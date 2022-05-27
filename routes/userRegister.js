const express = require("express"),
    router = express.Router(),
    addUser = require('../controller/usersController')


router.post("/signup", (req, res) => {
    let {
        userName,
        userPhone,
        userEmail,
        password,
        vip
    } = req.body
    addUser(userName,
            userPhone,
            userEmail,
            password,
            vip)
        .then((usertDate) => res.json(usertDate))
        .catch((error) => res.json(error));
    console.log(req.body);
});

router.get("/:userEmail", (req, res) => {
    getBookByTitle(req.params.userEmail)
        .then((emailData) => res.json(emailData))
        .catch((err) => {
            console.log(err);
            res.send(err);
        });
});

module.exports = router;