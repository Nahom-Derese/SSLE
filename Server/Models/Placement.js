import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Placement = new Schema({
  Stream_Placement: {
    type: String,
  },
  Stream_Choice_no: {
    type: Number,
  },
  University_Placement: {
    type: String,
  },
  University_Choice_no: {
    type: Number,
  },
});

export default Placement;
