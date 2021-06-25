const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  Reg_no: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  School: {
    type: String,
    required: true,
  },
  Stream: {
    type: String,
    required: true,
  },
  Sex: {
    type: String,
    required: true,
  },
  Result: {
    type: Schema.Types.ObjectId,
    ref: "Results",
  },
});

module.exports = mongoose.model("Student", studentSchema);
