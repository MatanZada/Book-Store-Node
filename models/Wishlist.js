const mongoose = require("mongoose");
const WishlistSchema = new mongoose.Schema(
  {
    title: {
      type: mongoose.Schema.Types.String,
      ref: "Book",
      required: "The filed title is a required filed!",
    },
    description: {
      type: mongoose.Schema.Types.String,
      ref: "Book",
      required: "The filed description is a required filed!",
    },
    price: {
      type: mongoose.Schema.Types.Number,
      ref: "Book",
      required: "The filed price is a required filed!",
    },
  },
  {
    timestamps: true,
  }
);
WishlistSchema.methods.testFunc = function testFunc(params) {};
const Wishlist = mongoose.model("Wishlist", WishlistSchema);
module.exports = Wishlist;
