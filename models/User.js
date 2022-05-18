const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: "The filed fullName is a required filed!",
    },
    phone: {
      type: Number,
      required: "The filed phone is a required filed!",
    },
    email: {
      type: String,
      required: "The filed email is a required filed!",
    },
    password: {
      type: String,
      required: "The filed password is a required filed!",
    },
    isVip: {
      type: Boolean,
      required: "The filed isVip is a required filed!",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
