const Product = require("../models/Product");

module.exports = class ProductControllers {
  static showProducts(req, res) {
    res.render("products/all");
  }
};
