//mongosh
//show dbs
//use mydb
//db.createCollection("employees")
//show collections
// db.createCollection("products")
//db.products.insertOne({ name:"John", email:"john@gmail.com", pass:"1234",});
//db.products.find();
//show collections
// db.products.renameCollection("users")
//show collections
// db.users.insertMany([ { name: "Mike", email: "mike@gmail.com", pass: "1234" }, { name: "Cathy", email: "cathy@gmail.com", pass: "1234" }] )
//db.users.find();
//db.users.findOne();
// db.users.find().limit(2);
//db.users.count();
// db.users.countDocuments();
//db.users.insertMany([ {name:"test1", age:23}, {name:"test2", age:21, location:"Hyderabad"}, {name:"test3", country: "India"},]);
//db.users.find();
//db.users.find({name:"test1"})
//db.users.find({},{name:1});
//db.users.find({},{_id:0, name:1});
//db.users.find({}, {_id:0, name:1, email:1});
//db.users.find({}, {_id:0,email:1});
//db.users.find({email: "cathy@gmail.com"},{_id:false, name:true}); // displays the name
//db.users.deleteOne({name:"test1"});
//db.users.find()
//db.employees.drop()
//db.employees.insertOne({name:"John smith",email:"john@gmail.com",address:{city:"Columbus", state:"OH"},departments:"IT",salary:1456,score: [4,1,6,4],skills: ["java", "python"],date: Date() })
//q5 lo unnavi execute cheyi
//db.employees.find({}, { name: 1, salary: 1, _id: 0 }) it displyas only name and salary
// db.employees.find().sort({name:1})
//db.users.find({}, {name:1, salary:1}).sort({salary:-1})
//