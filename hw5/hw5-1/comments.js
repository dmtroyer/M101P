use blog;
db.posts.aggregate([
  {$unwind: "$comments"},
  {$group: 
    {_id: "$comments.author", count: {$sum:1}}
  },
  {$sort:{count:-1}},
  {$limit: 10},
  {$project:
    {_id:0, "Comment Author": "$_id", "Comment Count": "$count"}
  }
])
