const { reject } = require("lodash");
const { resolve } = require("path");
const Wishlist = require("../models/Wishlist");

const addBookWishlist = () => {
  return new Promise((resolve, reject) => {
    let wishlist = new Wishlist({
      title,
      description,
      price,
    });
    wishlist
      .save()
      .then((theBookChosen) => {
        resolve(theBookChosen);
      })
      .catch((err) => reject(err));
  });
};

const getAllBookWishlist = (title) => {
  return new Promise((resolve, reject) => {
    Wishlist.find({
      title,
    })
      .then((wishlistData) => resolve(wishlistData))
      .catch((err) => reject(err));
  });
};

const deleteOneBookWishlist = () => {
  return new Promise((resolve, reject) => {
    Wishlist.deleteOne(
      {},
      {
        _id,
      },
      (err, wishlistData) => {
        err ? reject(err) : resolve(wishlistData);
      }
    );
  });
};

module.exports = {
  addBookWishlist,
  getAllBookWishlist,
  deleteOneBookWishlist,
};
