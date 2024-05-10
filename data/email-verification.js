import mongoose from "mongoose";

const EmailVerification = new mongoose.model(
  "emailVerification",
  new mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    tmp_key: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
  })
);

export default EmailVerification;
