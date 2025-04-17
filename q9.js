db.employees.find(
    {
    salary: {$gte: 1500},
    department: "HR"
}
);

db.employees.find({
    $or: [
        {
            salary: {$gte: 1500},
        },
        {department: "HR"},
    ],
});
db.employees.find({
    $and: [
        {
            salary: {$gte: 1500},
        },
        {department: "HR"},
    ],
});

db.employees.find({c1})
db.employees.find({c1, c2})
db.employees.find({$or:[]})
db.employees.find({$or:[{c1}, {c2}]}) // any of these condition matches it desire result
db.employees.find({$and:[{c1}, {c2}]})

db.employees.find({
    $nor: [
        {
            salary: {$gte: 1500},
        },
        {department: "HR"},
    ],
}); //display whose salary is not greater than 1500 and department is also not HR

db.employees.find({
    department: {$ne:"HR"}
})  //display employees whose department is not HR

db.employees.insertOne(
    {
        name:"test1",
        email: "test1@gmail.com"
    }) //insert a new document with name test1 and email test1@gmail.com 

db.employees.find({
    department:{$exists: false}
})