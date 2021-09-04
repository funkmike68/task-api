const mongoose = require("mongoose");

const connectString = "mongodb+srv://bigart73:dsoul4ever@cluster0.zwlwr.mongodb.net/TASK-API?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(connectString);
};

module.exports = connectDB;
