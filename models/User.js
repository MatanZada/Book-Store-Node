const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

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

userSchema.pre('save', async function(next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(this.password, salt)
        this.password = hashPass
        next()
    } catch (error) {
        next(error)
    }
})

const User = mongoose.model("User", userSchema);
module.exports = User;