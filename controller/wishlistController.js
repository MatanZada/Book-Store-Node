const Wishlist = require("../models/Wishlist");

const addBookWishlist = () => {
  return new Promise((resolve, reject) => {
    let wishlist = new Wishlist({
      title,
      description,
      price,
    });
    wishlist.save((err, wishlistData) => {
      wishlistData ? resolve(wishlistData) : reject(err);
    });
  });
};

const getAllBookWishlist = () => {
  return new Promise((resolve, reject) => {
    Wishlist.find().then((wishlistData) => {
      wishlistData ? resolve(wishlistData) : reject(err);
    });
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
