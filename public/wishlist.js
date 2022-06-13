$('[data-role="getAllBooks"]').click(function () {
  $.get("/book", (resolve) => {
    const resultAllBooks = $('[data-role="books"]');
    resultAllBooks.html("");
    $.each(resolve, (_, book) => {
      const pointerDivBook = $(`<div data-role=${book._id}>`);
      pointerDivBook.append(
        `<span>title:${book.title}</span><br><button>Delete</button>`
      );
      resultAllBooks.append(pointerDivBook);
    });
  });
});
