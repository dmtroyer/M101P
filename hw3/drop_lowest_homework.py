import pymongo

def drop_lowest_homework():

    connection = pymongo.MongoClient('localhost', 27017)
    db = connection.school
    students = db.students

    cursor = students.find()
    # cursor = grade.find({'type': 'homework'}).sort([('student_id', pymongo.ASCENDING), ('score', pymongo.ASCENDING)])
    # id = ''

    # for doc in cursor:
    #     if doc['student_id'] != id:
    #         id = doc['student_id']
    #         grade.remove({ '_id': doc['_id']})
    for student in cursor:
        # print student['scores']
        # print sorted(student['scores'])
        lowest_score = None
        for score in student['scores']:
            if score['type'] == 'homework' and (lowest_score == None or score['score'] < lowest_score['score']):
                lowest_score = score
        student['scores'].remove(lowest_score)
        students.save(student)




drop_lowest_homework()
