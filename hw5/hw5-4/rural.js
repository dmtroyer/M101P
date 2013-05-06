use m101;
db.zips.aggregate([
  { $project:
    {
      _id: 0,
      firstChar: { $substr: ["$city",0,1] },
      pop: 1
    }
  },
  { $match:
    {
      firstChar: { $in: ["0","1","2","3","4","5","6","7","8","9"]}
    }
  },
  { $group:
    {
      _id: "sum!",
      "Population Sum": { $sum: "$pop" }
    }
  }
])
