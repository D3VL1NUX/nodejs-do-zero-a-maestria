const express = require("express");

const ProductControllers = require("../controllers/ProductsController");

const route = express.Router();

route.get("/", ProductControllers.showProducts);

module.exports = route;
