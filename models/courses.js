const{Sequelize,DataTypes} = require('sequelize')
const sequelize = require('../utils/db-connection')

const Courses = sequelize.define("courses",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = Courses;