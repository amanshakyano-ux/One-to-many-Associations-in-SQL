const Student = require('./students')
const IdentityCard = require('./identitycard')
const Department = require('./department')


//One to one relation 
Student.hasOne(IdentityCard)
IdentityCard.belongsTo(Student);




//One to many relation
Department.hasMany(Student);
Student.belongsTo(Department);


module.exports = {
    Student,
    IdentityCard,
     Department
}