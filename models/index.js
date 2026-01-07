const Student = require('./students')
const IdentityCard = require('./identitycard')
const Department = require('./department')
const StudentCourses = require('./StudentCourses')
const Courses = require('./courses');

//One to one relation 
Student.hasOne(IdentityCard)
IdentityCard.belongsTo(Student);




//One to many relation
Department.hasMany(Student);
Student.belongsTo(Department);


//Many to Many association
Student.belongsToMany(Courses,{through:StudentCourses});
Courses.belongsToMany(Student,{through:StudentCourses})


module.exports = {
    Student,
    IdentityCard,
    Department
}