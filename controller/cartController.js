const { reject } = require("lodash");
const { resolve } = require("path");
const Cart = require("../models/Cart");
// const Book = require("../models/Book");

const getAllBooksInCart = () => {
  return new Promise((resolve, reject) => {
    Cart.find()
      .then((booksInCart) => resolve(booksInCart))
      .catch((err) => reject(err));
  });
};
const insertBookToCart = (title) => {
  return new Promise((resolve, reject) => {
    const cart = new Cart({
      title
    });
    cart
      .save()
      .then((theBookChosen) => {
        resolve(theBookChosen);
      })
      .catch((err) => reject(err));
  });
};
module.exports = {getAllBooksInCart, insertBookToCart}

