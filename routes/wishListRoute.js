const express = require("express");
const router = express.Router();

const {
  addBookWishlist,
  getAllBookWishlist,
} = require("../controller/wishlistController");

router.get("/", (req, res) => {
  addBookWishlist()
    .then((booksInWishlist) => {
      res.json(booksInWishlist);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/", (req, res) => {
  const bookToWishlist = req.body.bookToWishlist;
  getAllBookWishlist(bookToWishlist)
    .then((theBookChosen) => res.json(theBookChosen))
    .catch((err) => res.json(err));
});
module.exports = router;
