const User = require("../models/user");

const addUser = (userName, userPhone, userEmail, password, isVip) => {
    return new Promise((resolve, reject) => {
        let user = new User({
            userName,
            userPhone,
            userEmail,
            password,
            isVip
        });

        user.save((err, userData) => {
            userData ? resolve(userData) : reject(err);
        });
    });
};


module.exports = addUser