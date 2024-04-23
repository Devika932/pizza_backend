const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://seelamhemanthkumar88:Devika%4025@cluster0.oiyc2gy.mongodb.net/mern-pizza", { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});

db.on("error", () => {
  console.log(`Mongo DB Connection failed`);
});

module.exports = mongoose;
