import pandas as pd


class Anonymizer:
    def __init__(self, df: pd.DataFrame, feature_col, sensitive_col=None, k=0, l=0, t=0.0):
        self.df = df
        self.feature_col = feature_col
        self.sensitive_col = sensitive_col
        self.k = k
        self.l = l
        self.p = t

    def is_k_anonymous(self, partition):
        return len(partition) >= self.k

    def is_l_diverse(self, partition):
        return len(self.df.loc[partition][self.sensitive_col].unique()) >= self.l

    def is_t_close(self, partition):
        global_freqs = {}
        for value, count in self.df.groupby(self.sensitive_col)[self.sensitive_col].agg("count").to_dict().items():
            global_freqs[value] = count / float(len(self.df))
        d_max = None
        for value, count in self.df.loc[partition].groupby(self.sensitive_col)[self.sensitive_col].agg("count").to_dict().items():
            local_p = count / float(len(partition))
            d = abs(local_p - global_freqs[value])
            if d_max is None or d > d_max:
                d_max = d
        return d_max <= self.p

    def is_valid(self, partition):
        # k-anonymous
        if not self.is_k_anonymous(partition):
            return False

        if self.sensitive_col is not None:
            # l-diverse
            if self.l > 0 and not self.is_l_diverse(partition):
                return False
            # t-close
            if self.p > 0.0 and not self.is_t_close(partition):
                return False

        return True

    def get_spans(self, partition, scale=None):
        ret = {}
        for col in self.feature_col:
            span = len(self.df[col][partition].unique()) if self.df[col].dtype.name == "category" \
                else self.df[col][partition].max() - self.df[col][partition].min()
            if scale is not None:
                span = span / scale[col]
            ret[col] = span
        return ret

    def split(self, col, partition):
        dfp = self.df[col][partition]
        if dfp.dtype.name == "category":
            values = dfp.unique()
            lv = set(values[: len(values) // 2])
            rv = set(values[len(values) // 2:])
            return dfp.index[dfp.isin(lv)], dfp.index[dfp.isin(rv)]
        else:
            median = dfp.median()
            dfl = dfp.index[dfp < median]
            dfr = dfp.index[dfp >= median]
            return dfl, dfr

    def partition(self):
        scale = self.get_spans(self.df.index)
        finished = []
        partitions = [self.df.index]
        while partitions:
            part = partitions.pop(0)

            # try to partition based on several columns
            for col, span in sorted(self.get_spans(part, scale).items(), key=lambda x: -x[1]):
                lp, rp = self.split(col, part)
                if self.is_valid(lp) and self.is_valid(rp):
                    partitions.extend((lp, rp))
                    break
            # can't partition further, add to finished
            else:
                finished.append(part)

        return finished

    def anonymize(self):
        partitions = self.partition()
        aggregations = {}
        # set aggregation function for each column
        for col in self.feature_col:
            aggregations[col] = (lambda x: [",".join(set(x.astype("category")))]) \
                if self.df[col].dtype.name == "category" \
                else (lambda x: [f"{x.min()}-{x.max()}" if x.min() != x.max() else str(x.min())])

        rows = []
        for i, part in enumerate(partitions):
            grouped = self.df.loc[part].agg(aggregations, squeeze=False)
            sensitive_counts = self.df.loc[part].groupby(self.sensitive_col).agg({self.sensitive_col: "count"})
            values = grouped.apply(lambda x: x[0]).to_dict()
            for sensitive_value, count in sensitive_counts[self.sensitive_col].items():
                if count == 0:
                    continue
                values.update({self.sensitive_col: sensitive_value, "count": count})
                rows.append(values.copy())
        return pd.DataFrame(rows)
