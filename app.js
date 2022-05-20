const express = require("express"),
  app = express();
port = process.env.PORT || 3000;

const mongoose = require("mongoose");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const routeBooks = require("./routes/shopRoute");
const routeCart = require("./routes/cartRout");
const routeWishlist = require("./routes/wishListRout");

app.use("/books", routeBooks);
app.use("/cart", routeCart);
app.use("/whishlist", routeWishlist);

mongoose
  .connect("mongodb://localhost:27017/TheGreatLibrary")
  .then(() => {
    app.listen(port, () => {
      console.info(
        `start server start listening on port http://localhost:${port}`
      );
    });
  })


  app.get("/*", function (req, res) {
    res.status("404");
    res.sendFile(path.join(__dirname, "/eror.html"));
  });
  


