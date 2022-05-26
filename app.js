const express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    path = require('path'),
    mongoose = require("mongoose");

// const routeBooks = require("./routes/bookRoute");
// const routeCart = require("./routes/cartRoute");
// const routeWishlist = require("./routes/wishListRoute");
const userRegister = require("./routes/userRegister");

app.use(express.static("public"));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

// app.use("/books", routeBooks);
// app.use("/cart", routeCart);
// app.use("/whishlist", routeWishlist);


mongoose.connect("mongodb://localhost:27017/TheGreatLibrary").then(() => {
    app.listen(port, () => {
        console.info(
            `start server start listening on port http://localhost:${port}`
        );
    });
});
app.use("/", userRegister);

app.get("/*", function(req, res) {
    res.status("404");
    res.sendFile(path.join(__dirname, "/error.html"));
});