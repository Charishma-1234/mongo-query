db.employees.find({department: "HR"}) //displays employees from HR department
db.employees.find({department: {$eq:"HR"}}) //displays employees from HR department
db.employees.find({salary: {$eq:1500}}) //displays employeeswhose salary is 1500 eq=equal to
db.employees.find({salary: {$gt:1500}}) //displays salary greater than 1500 gt=greaterthan
db.employees.find({salary: {$lt:1500}}) //display salary lessthan 1500 lt=lessthan
db.employees.find({salary: {$gte:1500}}) //greater than or equals
db.employees.find({salary: {$lte:1500}}) // lessthan or equals

