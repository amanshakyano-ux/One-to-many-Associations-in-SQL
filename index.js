const express = require("express");
const db = require("./utils/db-connection");
// const routes = require('./routes/studentRouter')
const router = require("./routes/studentRouter");
const courseRouter = require('./routes/courseRoutes')
 require("./models");

const app = express();

app.use(express.json());

app.use("/students", router);
app.use("/courses", courseRouter);

db.sync({force:true})
  .then(() => {
    app.listen(3000, (err) => {
      console.log("server is running");
    });
  })
  .catch((err) => {
    console.log(err);
  });

  