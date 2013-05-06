use m101;
db.zips.aggregate([
  { $group:
    {
      _id: { city: "$city", state: "$state" },
      cityPopulation: { $sum: "$pop" }
    }
  },
  { $match:
    {
      "_id.state": { $in: ["CA", "NY"] },
      cityPopulation: { $gt: 25000 }
    }
  },
  { $group:
    {
      _id: "Averages",
      avgPop: { $avg: "$cityPopulation" }
    }
  }
])