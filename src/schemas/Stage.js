import mongoose from "mongoose";
const { Schema, model } = mongoose;

const StageSchema = new Schema(
  {
    name: String,
    time: String,
    deleted: Boolean,
    unity: String,
  },
  {
    timestamps: true,
  }
);

export default model("Stage", StageSchema);
