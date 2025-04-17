db.employees.updateOne(
    {email: "john@gmail.com"},
    {$push: {score: 4}}
)
db.employees.updateOne(
    {email: "john@gmail.com"},
    {$pull: {score: 4}}
)
db.employees.updateMany(
    {},
    {$push: {skills: "Python"} }
)
db.employees.updateMany(
    {},
    {$addToSet: {skills: "Python"} }
)
db.employees.updateMany(
    {},
    {$pop:{score: 1}}
)
db.employees.updateMany(
    {},
    {$pop:{score: -1}}
)
