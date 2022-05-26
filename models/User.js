const mongoose = require("mongoose");
const crypto = require("crypto");
const joi = require("joi");
// const { string } = require("joi");

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: "The filed fullName is a required filed!",
    },
    phone: {
        type: String,
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
}, { timestamps: true });

UserSchema.methods.hashPassword = function() {
    this.password = crypto
        .pbkdf2Sync(this.password, "", 1000, 64, `sha512`)
        .toString(`hex`);
};

UserSchema.methods.validateUser = function validate(params) {
    this.password = crypto
        .pbkdf2Sync(this.password, "", 1000, 64, `sha512`)
        .toString(`hex`);
};
UserSchema.methods.validateUserSchema = function() {
    const joi = joi.object({
        password: joi.string().alphanum().min(6).max(30),
    });
    return joi;
};

module.exports = mongoose.model("User", UserSchema);