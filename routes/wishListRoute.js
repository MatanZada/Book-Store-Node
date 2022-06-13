const express = require("express");
const router = express.Router();

const { addBookWishlist } = require("../controller/wishlistController");

router.post("/", (req, res) => {
  const { title, description, price } = req.body;
  addBookWishlist(title, description, price)
    .then((wishlistDate) => res.json(wishlistDate))
    .catch((error) => res.json(error));
});

module.exports = router;
