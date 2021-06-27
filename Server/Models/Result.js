import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Result = new Schema({
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
  Total: {
    type: Number,
    required: true,
  },
});

export default Result;
