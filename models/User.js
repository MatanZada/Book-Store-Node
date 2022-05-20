const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
      minlength: [6, "minimum password length is 6 characters"],
    },
    isVip: {
      type: Boolean,
      required: "The filed isVip is a required filed!",
    },
  },
  { timestamps: true }
);
userSchema.methods.pre("save", function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
module.exports = mongoose.model("User", userSchema);
