const User = require("../models/user");

const loginUser = (userEmail, password) => {
    return new Promise((resolve, reject) => {
        let user = new User({
            userEmail,
            password
        });
        user
            .save((err, userData) => {
                userData ? resolve(userData) : reject(err);
            })
            .then((userData) => resolve(userData))
            .catch((err) => reject(err));
    });
};

module.exports = loginUser;