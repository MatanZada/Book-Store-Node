$('[data-role="getAllBooksInWishlist"]').click(function () {
  $.get("/wishlist", (response) => {
    const wrapperBook = $('[data-role="wraperBooks"]');
    populateOptionsWishlist(wrapperBook, response);
  });
});

function populateOptionsWishlist(selectElement, itratable) {
  selectElement.html("");
  $.each(itratable, function (_, itrate) {
    const div = $("<div>");
    div.append(`<span style="font-weight:bold;"> title: ${itrate.title}</span>
    <p>description: ${itrate.description}</p>`);
    div.attr("value", itrate._id);
    div.append(`<button>remove book from wishlist</button>`);
    selectElement.append(div);
  });
}
