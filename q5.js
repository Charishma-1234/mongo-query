db.users.deleteOne({name:"test1"});
db.employees.drop();

db.employees.insertOne({
    name:"John smith",
    email:"john@gmail.com",
    address:{city:"Columbus", state:"OH"},
    departments:"IT",
    salary:1456,
    score: [4,1,6,4],
    skills: ["java", "python"],
    date: Date(),
 })

db.employees.insertOne({
    name:"Cathy George",
    email:"cathy@gmail.com",
    address:{city:"Jacksonville", state:"FL"},
    departments:"HR",
    salary:2500,
    score: [6, 2, 6, 4],
    skills: ["Java", "Python", "Reactjs", "Mongodb"],
    date: Date(),
})

db.employees.insertOne({
    name:"Mike Covington",
    email:"mike@gmail.com",
    address:{city:"Columbus", state:"OH"},
    departments:"Admin",
    salary:1500,
    score: [6, 4],
    skills: ["Java", "Reactjs"],
    date: Date(),
})

db.employees.find().sort({name:1}) //assending
db.employees.find().sort({name:-1}) //descending

db.users.find({}, {name:1, salary:1}).sort({salary:-1}) // name and salary 

db.employees.find(
    { "address.city": "Columbus" },
    { name: 1, salary: 1, _id: 0 }
  )
 OR
db.employees.find({ "address.city": "Columbus" });
it both displays employees from columbus
 
db.employees.find({skills:"java"}); //displays employees having knowledge of java
