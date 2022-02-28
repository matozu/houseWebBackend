import mongoose from "mongoose";

const Note = new mongoose.model(
  "Note",
  new mongoose.Schema({
    date: {
      type: Date,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  })
);
export default Note;
