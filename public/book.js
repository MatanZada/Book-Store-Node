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

$('[data-role="getAllBooks"]').click(function () {
  $.get("/book", (resolve) => {
    const resultAllBooks = $('[data-role="books"]');
    resultAllBooks.html("");
    $.each(resolve, (_, book) => {
      const pointerDivBook = $(`<div data-role=${book._id}>`);
      pointerDivBook.append(`<span>name:${book.title}</span><br>`);
      resultAllBooks.append(pointerDivBook);
    });
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
