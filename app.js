const express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    path = require("path"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser");

const routeCart = require("./routes/cartRoute");
// const routeWishlist = require("./routes/wishListRoute");
const userRegister = require("./routes/userRegister");
const bookRoute = require("./routes/bookRoute");
const loginRoute = require("./routes/loginRoute")
const logger = require("./logger/logger");

app.use(express.static("public"));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

app.use("/cart", routeCart);
// app.use("/whishlist", routeWishlist);
app.use("/", userRegister);
app.use("/book", bookRoute);
app.use("/login", loginRoute);

mongoose.connect("mongodb://localhost:27017/GreatLibrary").then(() => {
    app.listen(port, () => {
        logger.info(
            `start server start listening on port http://localhost:${port}`
        );
    });
});

app.get("/*", function(req, res) {
    res.status("404");
    res.sendFile(path.join(__dirname, "/error.html"));
});