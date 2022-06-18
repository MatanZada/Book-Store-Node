const express = require("express");
const router = express.Router();

const {
  addBookWishlist,
  getAllBookWishlist,
} = require("../controller/wishlistController");

router.post("/", (req, res) => {
  const { title, description } = req.body.bookToWishlist;
  addBookWishlist(title, description)
    .then((booksInWishlist) => {
      res.json(booksInWishlist);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/", (req, res) => {
  const { title, description } = req.body.bookToWishlist;
  getAllBookWishlist(title, description)
    .then((theBookChosen) => res.json(theBookChosen))
    .catch((err) => res.json(err));
});
module.exports = router;
