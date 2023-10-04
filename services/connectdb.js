const mongoose = require("mongoose");
require("dotenv").config();
const URI = process.env.MONGO_URI.replace(
  "<password>",
  process.env.MONGO_PASSWORD
);

mongoose.connection.once("open", () => {
  console.log("MongoDB connected succesfully");
});

mongoose.connection.on("error", (err) => {
  console.log("Mongo Error", err);
});

const connectDB = async () => {
  await mongoose.connect(URI);
};

module.exports = connectDB;
