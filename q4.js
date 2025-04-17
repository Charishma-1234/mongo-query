db.users.insertMany([
    {name:"test1", age:23},
    {name:"test2", age:21, location:"Hyderabad"},
    {name:"test3", country: "India"},
]);

db.users.find({name:"test1"})
db.users.find({},{name:1});//display ids and names
db.users.find({},{_id:0, name:1});//displays only name
db.users.find({}, {_id:0, name:1, email:1});//display name and email
db.users.find({}, {_id:0,email:1});//display only email and also can keep true and false instead of 0 and 1

db.users.find(
    {email: "cathy@gmail.com"},
    {_id:false, name:true}
); // it displays the name

