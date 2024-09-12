from sklearn import svm
from sklearn.model_selection import KFold, cross_val_score,cross_validate
import pandas as pd
import numpy as np
import warnings
warnings.filterwarnings("ignore")


# run this file to compare the performance of SVM on original data and anonymized data
def run_svm(data, label):
    clf = svm.SVR(kernel='linear')
    kf = KFold(n_splits=10, shuffle=True, random_state=42)
    svr_scores = -cross_val_score(clf, data, label, cv=kf, scoring='neg_mean_squared_error')
    rmse_scores = np.sqrt(svr_scores)
    r2_scores = cross_val_score(clf, data, label, cv=kf, scoring='r2')
    explained_variance_scores = cross_val_score(clf, data, label, cv=kf, scoring='explained_variance')
    print("Mean Squared Error (MSE): %0.4f (+/- %0.4f)" % (svr_scores.mean(), svr_scores.std() * 4))
    print("Root Mean Squared Error (RMSE): %0.4f (+/- %0.4f)" % (rmse_scores.mean(), rmse_scores.std() * 4))
    print("R-squared (R^2): %0.4f (+/- %0.4f)" % (r2_scores.mean(), r2_scores.std() * 4))
    print("Explained Variance Score: %0.4f (+/- %0.4f)" % (
    explained_variance_scores.mean(), explained_variance_scores.std() * 4))


def read(path):
    df = pd.read_csv(path)
    df = pd.get_dummies(df, columns=["gender"], prefix='', prefix_sep='')

    # only C, D, other
    df['race_ethnicity'] = df['race_ethnicity'].map(
        {'group A': 'other',
         'group B': 'other',
         'group C': 'group_C',
         'group D': 'group_D',
         'group E': 'other',
         'other': 'other'})
    df.dropna(inplace=True)

    # convert to one-hot encoding format
    if len(df["race_ethnicity"].unique()) != 3:
        # for anonymized data
        result = pd.DataFrame()
        for index, row in df.iterrows():
            one_hot_result = {'group_C': 0, 'group_D': 0, 'other': 0}
            anon_groups = row['race_ethnicity'].split(',')
            for group in anon_groups:
                one_hot_result[group.replace(" ", "_")] = 1

            result = result.append(one_hot_result, ignore_index=True)
        df = pd.concat([df, result], axis=1).drop("race_ethnicity", axis=1)
    else:
        # for original data
        df = pd.get_dummies(df, columns=["race_ethnicity"], prefix='', prefix_sep='')

    # 1   (before college)                                     -> 1
    # 1-2 (before college, some college)                       -> 2
    # 2   (some college)                                       -> 3
    # 2-3 (some college, associate's degree)                   -> 4
    # 3   (associate's degree)                                 -> 5
    # 3-4 (associate's degree, bachelor's and master's degree) -> 6
    # 4   (bachelor's and master's degree)                     -> 7
    education_mapping = {"before college": 1, "high school": 1, "some high school": 1,
                         "before college,some college": 2,
                         "some college": 3,
                         "some college,associate's degree": 4,
                         "associate's degree": 5,
                         "associate's degree,bachelor's and master's degree": 6,
                         "bachelor's degree": 7,
                         "master's degree": 7,
                         "bachelor's and master's degree": 7}

    df["parental_level_of_education"] = df["parental_level_of_education"].map(education_mapping)

    df = df[(df["test_preparation_course"] == "completed") | (df["test_preparation_course"] == "none")]
    df["test_preparation_course"] = df["test_preparation_course"].map({"completed": 1, "none": 0}).astype("bool")

    df = df[(df["lunch"] == "standard") | (df["lunch"] == "free/reduced")]
    df["lunch"] = df["lunch"].map({"standard": 1, "free/reduced": 0}).astype("bool")

    df.dropna(inplace=True)
    return df


def __main__():
    df1 = read("../doc/StudentsPerformance.csv")
    df2 = read("../doc/anonymized.csv")

    print("original data:")
    run_svm(df1.drop("writing_score", axis=1), df1["writing_score"])
    print("\nanonymized data:")
    run_svm(df2.drop("writing_score", axis=1), df2["writing_score"])

if __name__ == "__main__":
    __main__()
