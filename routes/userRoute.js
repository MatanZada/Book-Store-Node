const express = require("express");
const router = express.Router();

const { addUser } = require("../controller/usersController");
const User = require("../models/User");

router.post("/", (req, res) => {
  let { userName, userPhone, userEmail, password, vip } = req.body;

  addUser(userName, userPhone, userEmail, password, vip)
    .then((userDate) => res.json(userDate))
    .catch((error) => res.json(error));
  console.log(req.body);
});

router.post("/login", (req, res) => {
  asyncHandler(async (req, res) => {
    const { userEmail, password } = req.body;
    const user = await User.findOne({ userEmail });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.userName,
        phone: user.userPhone,
        email: user.userEmail,
        isVip: user.vip,
        token: null,
        createdAt: user.createdAt,
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  });
});

module.exports = router;
