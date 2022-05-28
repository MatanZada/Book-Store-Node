const formNewBook = document.getElementById("insert-book-form");
formNewBook.addEventListener("submit", insertBookForm);

async function insertBookForm(event) {
  event.preventDefault();
  const title = document.getElementById("bookTitle").value;
  const description = document.getElementById("bookDescription").value;
  const price = document.getElementById("bookPrice").value;

  fetch("/insertNewBook", {
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
    const theBooks = $('[data-role="books"]');
    theBooks.html("");
    $.each(resolve, (_, book) => {
      const divBook = $(`<div data-role=${book._id}>`);
      divBook.append(`<span>name:${book.title}</span><br>`);
      theBooks.append(divBook);
    });
  });
});

$('[data-role="updateBook"]').click(function () {
  const theId = $('[data-role="theId"]').val();
  const title = $('[data-role="title"]').val();
  const description = $('[data-role="description"]').val();
  const price = $('[data-role="price"]').val();
  fetch("/book/" + theId, {
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
