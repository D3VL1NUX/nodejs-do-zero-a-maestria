const express = require("express");
const { engine } = require("express-handlebars");
const mysql = require("mysql");

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/books/insertbook", (req, res) => {
  const title = req.body.title;
  const pagesQtd = req.body.pagesqtd;

  const queryBooks = `INSERT INTO books (title, qtd_pages) VALUES ('${title}', '${pagesQtd}')`;

  conn.query(queryBooks, function (err) {
    if (err) {
      console.log(err);
      return;
    }
    res.redirect("/books");
  });
});

app.get("/books", (req, res) => {
  const queryBooks = `SELECT * FROM books`;

  conn.query(queryBooks, function (err, data) {
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
  const bookId = `SELECT * FROM books  WHERE id = ${id}`;

  conn.query(bookId, function (err, data) {
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

  const sql = `SELECT * FROM books WHERE id = ${id}`;

  conn.query(sql, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    const book = data[0];

    res.render("editbook", { book });
  });
});

app.get("/", (req, res) => {
  res.render("home");
});

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "toor",
  database: "nodemysql",
});

conn.connect(function (err) {
  if (err) {
    console.log(err);
  }

  console.log("Conectou ao MySQL!");

  app.listen(3000);
});
