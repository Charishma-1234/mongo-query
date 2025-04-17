db.employees.insertMany([
    { name: "test1", departments: "test" },
    { name: "test2", departments: "test" },
    { name: "test3", departments: "test" }
  ])// inserting 3 documents with name test1, test2, and test3 and department test using insertMany  
  db.employees.find({}, { name: 1, departments: 1, _id: 0 }) //display name and departments of all the employees
  db.employees.deleteOne({department: "test1"});
  
