const express = require("express");

const ProductController = require("../controllers/ProductsController");

const route = express.Router();

route.get("/create", ProductController.createProduct);
route.post("/create", ProductController.createProductPost);
route.post("/remove/:id", ProductController.removeProduct);
route.get("/:id", ProductController.getProduct);
route.get("/", ProductController.showProducts);

module.exports = route;
