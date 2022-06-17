const express = require("express");
const router = express.Router();

const {
  addBookWishlist,
  insertBookToWishlist,
} = require("../controller/wishlistController");

router.get("/", (req, res) => {
  addBookWishlist()
    .then((booksInCart) => {
      res.json(booksInCart);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/", (req, res) => {
  const bookToWishlist = req.body.bookToWishlist;
  // const price = req.body
  insertBookToWishlist(bookToWishlist)
    .then((theBookChosen) => res.json(theBookChosen))
    .catch((err) => res.json(err));
});
module.exports = router;
