from Anonymizer import Anonymizer
import pandas as pd


# run this file in order to generate anonymized data
def __main__(k, l, t):
    df = pd.DataFrame(pd.read_csv("../doc/StudentsPerformance.csv"))

    # map group A, B, E to other
    race_mapping = {'group A': 'other',
                    'group B': 'other',
                    'group C': 'group C',
                    'group D': 'group D',
                    'group E': 'other'}
    df['race_ethnicity'] = df['race_ethnicity'].map(race_mapping)

    #convert to one-hot encoding format
    education_mapping = {'some high school': 1,
                         'high school': 1,
                         'some college': 2,
                         'associate\'s degree': 3,
                         'bachelor\'s degree': 4,
                         'master\'s degree': 4}
    df['parental_level_of_education'] = df['parental_level_of_education'].map(education_mapping)

    # merge 3 scores
    df['score'] = df.apply(lambda x: f"{x['reading_score']},{x['writing_score']},{x['math_score']}", axis=1)
    df = df.drop(["reading_score", "writing_score", "math_score"], axis=1)

    for name in set(("gender", "race_ethnicity", 'lunch', 'test_preparation_course', "score")):
        df[name] = df[name].astype("category")

    # set QID columns and sensitive column
    feature_columns = ["gender", "race_ethnicity", "parental_level_of_education", "lunch", "test_preparation_course"]
    sensitive_column = "score"

    # anonymize
    rows = Anonymizer(df, feature_columns, sensitive_column, k, l, t)
    anon_df = rows.anonymize()

    # convert numerical values back to categorical values
    education_mapping = {"1": "before college",
                         "2": "some college",
                         "3": "associate's degree",
                         "4": "bachelor's and master's degree",
                         "1-2": "before college,some college",
                         "2-3": "some college,associate's degree",
                         "3-4": "associate's degree,bachelor's and master's degree"}
    anon_df['parental_level_of_education'] = anon_df['parental_level_of_education'].map(education_mapping)

    anon_df[['reading_score', 'writing_score', 'math_score']] = anon_df['score'].str.split(',', expand=True)
    anon_df = anon_df.drop(['score'], axis=1)
    anon_df[['reading_score', 'writing_score', 'math_score']] = anon_df[['reading_score', 'writing_score', 'math_score']].astype(int)

    for index, row in anon_df.iterrows():
        anon_df = pd.concat([anon_df, pd.DataFrame([row] * (row["count"]-1))], axis=0, ignore_index=True)
    anon_df = anon_df.drop("count", axis=1)
    anon_df.to_csv("../doc/anonymized.csv", index=False)

if __name__ == "__main__":
    __main__(k=2, l=10, t=0.3)
