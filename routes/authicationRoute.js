const Joi = require("joi");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ userEmail: req.body.userEmail });
  if (!user) return res.status(400).send("Invalid email or password.");
  // const salt = await bcrypt.genSalt(10);
  // const hashPass = await bcrypt.hash(req.body.password, salt);
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid email or password.");
  let token = await user.generateAuthToken();
  res.json({ token });
});

function validate(req) {
  const schema = Joi.object({
    userEmail: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
  });

  return schema.validate(req);
}

module.exports = router;
