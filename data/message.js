import mongoose from "mongoose";

const Message = new mongoose.model(
  "Message",
  new mongoose.Schema({
    date: {
      type: Date,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    read: {
      type: Boolean,
      required: true,
    },
  })
);

export default Message;
