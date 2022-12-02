const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mobile-test");

mongoose.connection.on("connected", () => {
  console.log("mongo connection established");
});

mongoose.connection.on("error", (error) => {
  console.log("Mongo connection error", error);
});

module.exports = mongoose.connection;
