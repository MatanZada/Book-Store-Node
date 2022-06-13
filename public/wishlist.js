$('[data-role="getWishlist"]').click(function () {
  $.get("/book", (resolve) => {
    const resultAllBooks = $('[data-role="wishlistContainer"]');
    resultAllBooks.html("");
    $.each(resolve, (_, book) => {
      const pointerDivBook = $(
        `<div style="border: 1px solid #ccc;
        width: 180px;
        padding:10px;
        margin-bottom:10px;
        margin-top:10px;
        " data-role=${book._id}>`
      );

      pointerDivBook.append(
        `<span style="font-weight:bold;">${book.title}</span>
        <p>description: ${book.description}</p>
        <p>price: $${book.price}</p>
        <button data-role="deleteWishlistBook">Delete</button>`
      );
      resultAllBooks.append(pointerDivBook);
    });
    $('[data-role="deleteWishlistBook"]').click(function () {
      const dataIdInformationDelete = $(
        '[data-role="dataIdInformation"]'
      ).val();
      fetch("/wishlist/:id" + dataIdInformationDelete, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      }).then((res) => res.json(res));
    });
  });
});
