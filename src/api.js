const express = require("express");
const serverless = require("serverless-http");
const mongoose = require("mongoose");
const funkoRoute = require("./routes/funko");
require('dotenv').config();

// settings
const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});
// middlewares
app.use(express.json());
app.use("/.netlify/functions/api", funkoRoute);


// routes
app.get("/", (req, res) => {
  res.send("Suck APIS");
});

// mongodb connection
const MONGODB_URI = "mongodb+srv://trompitas:8jhOTJXYVNVxP0JF@cluster0.72l6r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

module.exports.handler = serverless(app);
