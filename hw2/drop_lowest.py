import pymongo

def example():

    connection = pymongo.MongoClient('localhost', 27017)
    db = connection.students
    grade = db.grades

    item = grade.find_one()

    print item

def drop_lowest_grade():

    connection = pymongo.MongoClient('localhost', 27017)
    db = connection.students
    grade = db.grades

    cursor = grade.find({'type': 'homework'}).sort([('student_id', pymongo.ASCENDING), ('score', pymongo.ASCENDING)])
    id = ''

    for doc in cursor:
        if doc['student_id'] != id:
            id = doc['student_id']
            grade.remove({ '_id': doc['_id']})


drop_lowest_grade()
