const Cart = require("../models/Cart");

const getAllBooksInCart = () => {
  return new Promise((resolve, reject) => {
    Cart.find()
      .then((booksInCart) => resolve(booksInCart))
      .catch((err) => reject(err));
  });
};
module.exports = getAllBooksInCart