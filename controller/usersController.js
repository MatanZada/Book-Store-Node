const { add } = require("lodash");
const User = require("../models/User");

const addUser = (userName, userPhone, userEmail, password, isVip) => {
    return new Promise((resolve, reject) => {
        const user = new User({
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
    // exports.addUser = (userName, userPhone, userEmail, password, isVip) => {
    //     return new Promise((resolve, reject) => {
    //         new User({
    //                 userName,
    //                 userPhone,
    //                 userEmail,
    //                 password,
    //                 isVip
    //             }).save().then((user) => resolve(user))
    //             .catch((err) => reject(err));
    //     });
    // }