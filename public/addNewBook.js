const formNewBook = document.getElementById("insert-book-form");
formNewBook.addEventListener("submit", insertBookForm);

async function insertBookForm(event) {
  event.preventDefault();
  const bookTitle = document.getElementById("bookTitle").value;
  const bookDescription = document.getElementById("bookDescription").value;
  const bookPrice = document.getElementById("bookPrice").value;

  fetch("/insertNewBook", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      bookTitle,
      bookDescription,
      bookPrice,
    }),
  }).then((res) => res.json());
}
