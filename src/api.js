const express = require("express");
const serverless = require("serverless-http");
const mongoose = require("mongoose");
const funkoRoute = require("./routes/funko");
require('dotenv').config();

// settings
const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
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
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

module.exports.handler = serverless(app);