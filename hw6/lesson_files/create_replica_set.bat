mkdir \data\rs1 \data\rs2 \data\rs3
start mongod --replSet m101 --logpath "1.log" --dbpath \data\rs1 --port 27017 --smallfiles
start mongod --replSet m101 --logpath "2.log" --dbpath \data\rs2 --port 27018 --smallfiles
start mongod --replSet m101 --logpath "3.log" --dbpath \data\rs3 --port 27019 --smallfiles