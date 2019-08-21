const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoUri");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log("Mongo Db connected ...");
  } catch (err) {
    console.err(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
