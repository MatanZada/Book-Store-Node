const express = require("express");
const router = express.Router();
const getAllBooksInCart= require("../controller/cartController.js");
router.get("/", (req, res) => {
    getAllBooksInCart()
      .then((booksInCart) => {
        res.json(booksInCart);
      })
      .catch((err) => {
        res.json(err);
      });
  });

module.exports = router;
