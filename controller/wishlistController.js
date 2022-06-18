const Wishlist = require("../models/Wishlist");

const addBookWishlist = (title, description, price) => {
  return new Promise((resolve, reject) => {
    let wishlist = new Wishlist({
      title,
      description,
    });
    wishlist.save((err, wishlistData) => {
      wishlistData ? resolve(wishlistData) : reject(err);
    });
  });
};

const getAllBookWishlist = (title, description, price) => {
  return new Promise((resolve, reject) => {
    Wishlist.find({
      title,
      description,
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
