const {
    reject
} = require("lodash");
const {
    resolve
} = require("path");
const Wishlist = require("../models/wishlistBook");

const getAllBooksInWishlist = () => {
    return new Promise((resolve, reject) => {
        Wishlist.find()
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
module.exports = {
    getAllBooksInCart,
    insertBookToCart
}