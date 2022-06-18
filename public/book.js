const formNewBook = document.getElementById("insert-book-form");
formNewBook.addEventListener("submit", insertBookForm);

async function insertBookForm(event) {
  event.preventDefault();
  const title = document.getElementById("bookTitle").value;
  const description = document.getElementById("bookDescription").value;
  const price = document.getElementById("bookPrice").value;

  fetch("/book", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
      price,
    }),
  }).then((res) => res.json(res));
}

function populateOptions(selectElement, itratable) {
  selectElement.html("");
  $.each(itratable, function (_, itrate) {
    const divOfBook = $("<div>");
    divOfBook.text(itrate.title);
    divOfBook.attr("value", itrate._id);
    const addToCart = $("<button>add to cart</button>");
    addToCart.attr("value", itrate._id);
    divOfBook.append(addToCart);
    selectElement.append(divOfBook);

    addToCart.click(function () {
      const bookToCart = itrate.title;
      console.log(bookToCart);
      $.post("/cart", { bookToCart }, (resolve) => {
        console.log(resolve);
      });
    });
  });
}
<<<<<<< HEAD
//post book to wishlist function
function populateOptionsWishlist(selectElement, itratable) {
  selectElement.html("");
  $.each(itratable, function (_, itrateW) {
    const divOfBookWishlist = $("<div/>");
    divOfBookWishlist.text(itrateW.title, itrateW.description, itrateW.price);
    divOfBookWishlist.attr("value", itrateW._id);
    const addToWishlist = $("<button>add to wishlist</button>");
    addToWishlist.attr("value", itrateW._id);
    divOfBookWishlist.append(addToWishlist);
    selectElement.append(divOfBookWishlist);
    addToWishlist.click(function () {
      const bookToWishlist = {
        title: itrateW.title,
        description: itrateW.description,
      };

      console.log(bookToWishlist);
      $.post("/wishlist", { bookToWishlist }, (response) => {
        console.log(response);
      });
    });
  });
}
=======
>>>>>>> 8a5f05bb6e90306b78dc1c1f492138327f667a61

$('[data-role="getAllBooks"]').click(function () {
  $.get("/book", (response) => {
    const wrapperBooks = $('[data-role="books"]');
<<<<<<< HEAD
    const wrapperBook = $('[data-role="book"]');
    populateOptions(wrapperBooks, response);
    populateOptionsWishlist(wrapperBook, response);
=======
    populateOptions(wrapperBooks, response);

    //   const resultAllBooks = $('[data-role="books"]');
    //   resultAllBooks.html("");
    //   $.each(resolve, (_, book) => {
    //     const pointerDivBook = $(`<div data-role=${book._id}>`);
    //     pointerDivBook.append(`<span>name:${book.title}</span><br>`);
    //     resultAllBooks.append(pointerDivBook);
    //   });
>>>>>>> 8a5f05bb6e90306b78dc1c1f492138327f667a61
  });
});

$('[data-role="updateBook"]').click(function () {
  const dataIdInformation = $('[data-role="dataIdInformation"]').val();
  const title = $('[data-role="title"]').val();
  const description = $('[data-role="description"]').val();
  const price = $('[data-role="price"]').val();
  fetch("/book/" + dataIdInformation, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
      price,
    }),
  }).then((res) => res.json(res));
});

$('[data-role="getBook"]').click(function () {
  const theid = $('[data-role="dataIdInformation"]').val();
  $.get("/book/" + theid, (resolve) => {
    const bookId = $('[data-role="book"]');
    bookId.html("");
    $.each(resolve, (_, book) => {
      const divbook = $(`<div ${book} >`);
      divbook.append(`<span> ${book}</span><br>`);
      bookId.append(divbook);
    });
  });
});

$('[data-role="deleteBook"]').click(function () {
  const dataIdInformationDelete = $('[data-role="dataIdInformation"]').val();
  fetch("/book/:id" + dataIdInformationDelete, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => res.json(res));
});
