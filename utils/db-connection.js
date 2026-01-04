const { Sequelize } = require("sequelize"); //importing sequelize

//2- npm install --save mysql2 (mandatory any database )

const sequelize = new Sequelize("students", "root", "972013", {
  // creating connection
  host: "localhost",
  dialect: "mysql", // jo language install kri hogi
});

(async () => {
  try {
    await sequelize.authenticate(); //checking is sequelize connected with db or not
    console.log("Connection to the Databse has been created");
  } catch (error) {
    console.log(error);
  }
})();

module.exports = sequelize;

// const mysql = require('mysql2')
// const connection = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"972013",
//     database:"students",
// })

// connection.connect((err)=>{
//     if(err)
//     {
//           console.log(err.message)
//     }
//     const studentQuery = `CREATE TABLE IF NOT EXISTS students(
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         name VARCHAR(20),
//         email VARCHAR(30) UNIQUE,
//         age INT)`
//     connection.execute(studentQuery,(err)=>{
//        if(err){
//         return console.log(err.message)
//        }
//         console.log("student table created")
//     })
// })

// module.exports = connection;
