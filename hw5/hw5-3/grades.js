use m101;
db.grades53.aggregate([
  { $unwind: "$scores" },
  { $match:
    {
      "scores.type": { $in: ["exam", "homework"]}
    }
  },
  { $group:
    {
      _id: { student: "$student_id", class: "$class_id" },
      studentAverage: { $avg: "$scores.score" }
    }
  },
  { $group:
    {
      _id: "$_id.class",
      classAverage: { $avg: "$studentAverage" }
    }
  },
  { $sort:
    {
      classAverage: -1
    }
  },
  { $project:
    {
      _id: 0,
      "Class": "$_id",
      "Class Average": "$classAverage"
    }
  }
])