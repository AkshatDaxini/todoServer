const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv").config();
const ToDoRoutes = require("../routes/TodoRoutes");

const app = express(); //web server  init

app.use(cors());

app.use(
  express.json({
    limit: "20mb",
  })
);

ToDoRoutes(app);

const port = process.env.PORT || 3000;

//error handling middleware
app.listen(port);
console.log("⚡ API server started on: " + port);

app.get("/", (req, res) => {
  res.send({
    message: "Hello World!",
  });
});
