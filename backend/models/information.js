const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  university: String,
  degree: String,
  major: String,
  gpa: Number,
  filePath: String,
});

module.exports = mongoose.model("Info", infoSchema);
