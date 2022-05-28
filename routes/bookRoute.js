const express = require("express");
const router = express.Router();

const {
  addBook,
  getAllBooks,
  // getBook,
  // getBookByTitle,
  updateBook,
  // deleteBook,
} = require("../controller/bookController");

router.post("/insertNewBook", (req, res) => {
  const { title, description, price } = req.body;
  addBook(title, description, price)
    .then((bookDate) => res.json(bookDate))
    .catch((error) => res.json(error));
});

// router.get("/:title", (req, res) => {
//   getBookByTitle(req.params.title)
//     .then((titleDate) => res.json(titleDate))
//     .catch((err) => {
//       console.log(err);
//       res.send(err);
//     });
// });

router.get("/", (req, res) => {
  getAllBooks()
    .then((books) => {
      res.json(books);
    })
    .catch((error) => res.json(error));
});

// router.get("/:theid", (req, res) => {
//   getBook(req.params.theid)
//     .then((book) => {
//       res.json(book);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  updateBook(id, title, description, price)
    .then((book) => {
      console.log(book);
    })
    .catch((err) => {
      res.json(err);
    });
});

// //   router.route('/product/name/:name')
// //   .get(function(req, res) {}

// router.delete("/:id", (req, res) => {
//   const _id = req.params.id;
//   deleteBook(_id)
//     .then((book) => {
//       console.log(book);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });
module.exports = router;
