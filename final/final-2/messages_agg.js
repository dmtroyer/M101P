use enron;
db.messages.aggregate([
  { $project:
    {
      "_id": 1,
      "headers.From": 1,
      "headers.To": 1
    }
  },
  { $unwind: "$headers.To"},
  { $group:
    {
      _id: "$_id",
      headersFrom: { $first: "$headers.From" },
      headersTo: { $addToSet : "$headers.To" }
    }
  },
  { $unwind : "$headersTo" },
  { $group:
    {
      _id: {
        "from": "$headersFrom",
        "to": "$headersTo"
      },
      numMessages: { $sum: 1 }
    }
  },
  { $sort: { numMessages: -1 }},
  { $limit: 1 }
]);