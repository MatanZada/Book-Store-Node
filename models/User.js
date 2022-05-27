const mongoose = require("mongoose");
const crypto = require("crypto");
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

userSchema.methods.hashPassword = function() {
    this.password = crypto
        .pbkdf2Sync(this.password, "", 1000, 64, `sha512`)
        .toString(`hex`);
};

userSchema.methods.validateUser = function validate(params) {
    this.password = crypto
        .pbkdf2Sync(this.password, "", 1000, 64, `sha512`)
        .toString(`hex`);
};
userSchema.methods.validateUser = function() {
    joi.object({
        password: joi.string().alphanum().min(6).max(30),
    });
    return joi;
};
const User = mongoose.model("User", userSchema);
module.exports = User;