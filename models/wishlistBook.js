const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "The filed title is a required filed!",
    },
    description: {
        type: String,
        required: "The filed price is a required filed!",
    },
    price: {
        type: Number,
        required: "The filed price is a required filed!",
    },
}, {
    timestamps: true,
})
const Wishlist = mongoose.model("Wishlist", wishlistSchema);
module.exports = Wishlist;