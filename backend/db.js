const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ahsan:ahsan123@cluster0.1ml71.mongodb.net/restaurant?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("MONGO DB CONNECTED");
  } catch (err) {
    console.error(err.message);
    // EXIT PROCESS with FAILURE
    process.exit(1);
  }
};

module.exports = connectDB;
