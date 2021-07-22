import mongoose from "mongoose";
import Result from "./Result.js";
import Placement from "./Placement.js";

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  Reg_no: {
    type: Number,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Eligibility: {
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
    type: Result,
    required: true,
  },
  Placement: {
    type: Placement,
  },
});

const StudentModel = mongoose.model("results", studentSchema);

export default StudentModel;
