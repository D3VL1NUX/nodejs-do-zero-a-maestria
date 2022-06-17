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
    }
    res.redirect("/");
  });
});

app.get("/", (req, res) => {
  res.render("home");
});

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemysql",
});

conn.connect(function (err) {
  if (err) {
    console.log(err);
  }

  console.log("Conectou ao MySQL!");

  app.listen(3000);
});
