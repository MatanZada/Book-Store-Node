const express = require("express"),
    router = express.Router(),
    addUser = require('../controller/usersController')


router.post("/signup", (req, res) => {
    addUser(req.body)
        .then((usertDate) => res.json(usertDate))
        .catch((error) => res.json(error));
    console.log(req.body);
});

module.exports = router;