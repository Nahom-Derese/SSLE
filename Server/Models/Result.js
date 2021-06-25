const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResultSchema = new Schema({
  Biology: {
    type: Number,
    required: true,
  },
  Chemistry: {
    type: Number,
    required: true,
  },
  Civics: {
    type: Number,
    required: true,
  },
  English: {
    type: Number,
    required: true,
  },
  Maths: {
    type: Number,
    required: true,
  },
  Physics: {
    type: Number,
    required: true,
  },
  SAT: {
    type: Number,
    required: true,
  },
  Economics: {
    type: Number,
    required: true,
  },
  Geography: {
    type: Number,
    required: true,
  },
  History: {
    type: Number,
    required: true,
  },
  Student: {
    type: Schema.Types.ObjectId,
    ref: "Student",
  },
});

module.exports = mongoose.model("Results", ResultSchema);
