const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  path = require("path"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser");

// const routeCart = require("./routes/cartRoute");
const wishListRoute = require("./routes/wishlistRoute");
const userRegister = require("./routes/userRegister");
const bookRoute = require("./routes/bookRoute");

app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// app.use("/cart", routeCart);
app.use("/whishlist", wishListRoute);
app.use("/", userRegister);
app.use("/book", bookRoute);

mongoose.connect("mongodb://localhost:27017/GreatLibrary").then(() => {
  app.listen(port, () => {
    console.info(
      `start server start listening on port http://localhost:${port}`
    );
  });
});

app.get("/*", function (req, res) {
  res.status("404");
  res.sendFile(path.join(__dirname, "/error.html"));
});
