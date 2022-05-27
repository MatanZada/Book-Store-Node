const { json } = require("express/lib/response");

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

module.exports = router;