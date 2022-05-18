const express = require("express"),
  app = express();
port = process.env.PORT || 3000;

const mongoose = require("mongoose");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://0.0.0.0:27017/TheGreatLibrary")
  .then(() => {
    app.listen(port, () => {
      console.info(
        `start server start listening on port http://localhost:${port}`
      );
    });
  })
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  return res.json({ hello: "world" });
});

app.post("/creating-store", (req, res) => {
  const { name, adress, phone } = req.body;
  addStore(name, adress, phone)
    .then((store) => res.json(store))
    .catch((err) => res.json(err));
});
