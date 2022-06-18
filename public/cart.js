$('[data-role="getAllBooksInCart"]').click(function () {
    $.get('/cart',(response)=>{
        const wrapperBooks=$('[data-role="wraperBooks"]') 
        populateOptions(wrapperBooks,response)
     })
})


function populateOptions(selectElement, itratable){
    selectElement.html('');
    $.each(itratable, function(_ ,itrate){
        const div = $('<div>');
        div.text(itrate.title);
        div.attr('value', itrate._id);
        div.append(`<button>remove book from cart</button>`)
        selectElement.append(div);
    })
}