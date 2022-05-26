const express = require("express"),
    router = express.Router(),
    addUser = require('../controller/usersController')


router.post("/", (req, res) => {
    const {
        userName,
        userPhone,
        userEmail,
        password,
        isVip
    } = req.body;
    addUser(userName,
            userPhone,
            userEmail,
            password,
            isVip)
        .then((usertDate) => res.json(usertDate))
        .catch((error) => res.json(error));
});


// router.post('/', (req, res) => {
//     const {
//         userName,
//         userPhone,
//         userEmail,
//         password,
//         isVip
//     } = req.body

//     addUser(userName, userPhone, userEmail, password, isVip)
//         .then((user) => res.json(user))
//         .catch((err) => res.json(err));
// });

// router.post("/:userId", (req, res) => {});

module.exports = router;