from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client.test
animals = db.animals

doc = {'animal': 'monkey'}

animals.insert(doc)
del doc['animal']

doc['animal'] = 'cat'
animals.insert(doc)
del doc['animal']

doc['animal'] = 'lion'
animals.insert(doc)