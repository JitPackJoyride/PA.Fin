#https://medium.com/@adriensieg/text-similarities-da019229c894
#http://www.lumenai.fr/blog/quick-review-on-text-clustering-and-text-similarity-approaches
from sklearn.feature_extraction.text import TfidfVectorizer
import sys
options = [
    "cancel credit card",
    "apply for credit card", 
    "cancel insurance",
    "apply for insurance",
    "cancel bank account",
    "apply for bank account",
    "apply for loan",
    "update home address",
    "update email",
    "update mobile number"
    ]
vect = TfidfVectorizer(min_df=1)
command = sys.argv[1]
options.insert(0, command)
print(options)
tfidf = vect.fit_transform(options) #each sentence can be replaced by a whole document
sim = (tfidf * tfidf.T).A[0]
m = max(sim[1:])
l = [i for i, j in enumerate(sim) if j == m]
print(options[l[0]])