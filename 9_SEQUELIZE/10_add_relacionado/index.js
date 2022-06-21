const express = require("express");
const { engine } = require("express-handlebars");

const conn = require("./db/conn");
const User = require("./models/User");
const Address = require("./models/Address");

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/users/create", (req, res) => {
  res.render("adduser");
});

app.post("/users/create", async (req, res) => {
  const name = req.body.name;
  const occupation = req.body.occupation;
  let newsletter = req.body.newsletter;

  if (newsletter === "on") {
    newsletter = true;
  } else {
    newsletter = false;
  }

  await User.create({ name, occupation, newsletter });

  res.redirect("/users/create");
});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.findOne({ raw: true, where: { id: id } });

  res.render("userview", { user });
});

app.post("/users/delete/:id", async (req, res) => {
  const id = req.params.id;

  await User.destroy({ where: { id: id } });

  res.redirect("/");
});

app.get("/users/edit/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.findOne({ raw: true, where: { id: id } });

  res.render("useredit", { user });
});

app.post("/users/update", async (req, res) => {
  let { id, name, occupation, newsletter } = req.body;

  if (newsletter === "on") {
    newsletter = true;
  } else {
    newsletter = false;
  }

  const userData = { id, name, occupation, newsletter };

  await User.update(userData, { where: { id } });

  res.redirect("/");
});

app.post("/address/create", async (req, res) => {
  const { street, address, number, city, UserId } = req.body;

  const addressData = { address, number, city, UserId, street };

  await Address.create(addressData);

  res.redirect("/");
});

app.get("/", async (req, res) => {
  const users = await User.findAll({ raw: true });

  res.render("home", { users });
});

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
