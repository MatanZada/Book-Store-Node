const express = require("express");
const router = express.Router();

const { addUser } = require("../controller/usersController");

router.post("/", (req, res) => {
  let { userName, userPhone, userEmail, password, vip } = req.body;

  addUser(userName, userPhone, userEmail, password, vip)
    .then((userDate) => res.json(userDate))
    .catch((error) => res.json(error));
  console.log(req.body);
});

// router.get("/:userEmail", (req, res) => {
//     getBookByTitle(req.params.userEmail)
//         .then((emailData) => res.json(emailData))
//         .catch((err) => {
//             console.log(err);
//             res.send(err);
//         });
// });

module.exports = router;
