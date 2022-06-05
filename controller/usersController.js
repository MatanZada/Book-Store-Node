const User = require("../models/user");

const addUser = (userName, userPhone, userEmail, password, vip) => {
  return new Promise((resolve, reject) => {
    let user = new User({
      userName,
      userPhone,
      userEmail,
      password,
      vip,
    });
    user
      .save((err, userData) => {
        userData ? resolve(userData) : reject(err);
      })
      .then((userData) => resolve(userData))
      .catch((err) => reject(err));
  });
};

module.exports = addUser;
