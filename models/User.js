const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const joi = require("joi");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userPhone: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "minimum password length is 6 characters"]
    },
    vip: {
        type: Boolean,
        required: true
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
module.exports = User;