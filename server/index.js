const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config()

const app = express();

const PORT = 5003;

// setting routes for user and theater
const userRoutes = require('./routes/userRoute')
const theaterRoutes = require("./routes/theaterRoutes")

mongoose
  .connect("mongodb+srv://sashitnegi:xRBtLmYj3JRgUeUI@cluster0.l2q5s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("DB connected"))
  .catch((err) => {
    console.log(err);
  });
  // middleware
  app.use(express.json())
  app.use(express.urlencoded())

  app.use('/api/users', userRoutes)
  app.use('/api/theaters' , theaterRoutes )




app.listen(PORT, () => {
  console.log("server started");
});



