const express = require("express");
const { engine } = require("express-handlebars");
const mysql = require("mysql");
const pool = require("./db/conn");

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/books/insertbook", (req, res) => {
  const title = req.body.title;
  const pagesQtd = req.body.pagesqtd;

  const queryBooks = `INSERT INTO books (??, ??) VALUES (?, ?)`;
  const data = ["title", "qtd_pages", title, pagesQtd];

  pool.query(queryBooks, data, function (err) {
    if (err) {
      console.log(err);
      return;
    }
    res.redirect("/books");
  });
});

app.get("/books", (req, res) => {
  const queryBooks = `SELECT * FROM books`;

  pool.query(queryBooks, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    const books = data;
    res.render("books", { books });
  });
});

app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  const bookId = `SELECT * FROM books  WHERE ?? = ?`;
  const data = ["id", id];

  pool.query(bookId, data, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    const book = data[0];
    res.render("book", { book });
  });
});

app.get("/books/edit/:id", (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM books WHERE ?? = ?`;
  const data = ["id", id];

  pool.query(sql, data, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    const book = data[0];
    res.render("editbook", { book });
  });
});

app.post("/books/updatebook", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const pages = req.body.pagesqtd;

  const sql = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`;
  const data = ["title", title, "qtd_pages", pages, "id", id];

  pool.query(sql, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    res.redirect("/books");
  });
});

app.post("/books/remove/:id", (req, res) => {
  const id = req.params.id;

  const sql = `DELETE FROM books WHERE ?? = ?`;
  const data = ["id", id];
  pool.query(sql, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    res.redirect("/books");
  });
});

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000);
