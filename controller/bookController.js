const Book = require("../models/Book");

const addBook = (title, description, price) => {
  return new Promise((resolve, reject) => {
    let book = new Book({
      title,
      description,
      price,
    });
    book.save((err, bookData) => {
      bookData ? resolve(bookData) : reject(err);
    });
  });
};

// const getAllBooks = () => {
//   return new Promise((resolve, reject) => {
//     Book.find()
//       .then((books) => resolve(books))
//       .catch((err) => reject(err));
//   });
// };

// const getBook = (_id) => {
//   return new Promise((resolve, reject) => {
//     Book.findById(_id)
//       .lean()
//       .then((book) => resolve(book))
//       .catch((err) => reject(err));
//   });
// };

// function getBookByTitle() {
//   var regex = new RegExp(req.params.title, "i"),
//     query = { description: regex };
//   Book.find(query, function (err, books) {
//     if (err) {
//       res.json(err);
//     }
//     res.json(books);
//   });
// }

// const updateBookt = (title, description, price) => {
//   return new Promise((resolve, reject) => {
//     Book.findByIdAndUpdate(_id, { $set: { title, description, price } })
//       .then((book) => {
//         resolve(book);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// };

// const deleteBook = (_id) => {
//   return new Promise((resolve, reject) => {
//     Book.findByIdAndDelete(_id)
//       .then((book) => {
//         resolve(book);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// };

module.exports = {
  addBook,
  // getAllBooks,
  // getBook,
  // getBookByTitle,
  // updateBookt,
  // deleteBook,
};
