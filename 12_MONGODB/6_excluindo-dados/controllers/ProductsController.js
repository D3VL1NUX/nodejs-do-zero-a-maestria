const Product = require("../models/Product");

module.exports = class ProductControllers {
  static async showProducts(req, res) {
    const products = await Product.getProducts();

    res.render("products/all", { products });
  }

  static createProduct(req, res) {
    res.render("products/create");
  }

  static createProductPost(req, res) {
    const { name, price, description, image } = req.body;

    const product = new Product(name, price, description, image);

    product.save();

    res.redirect("/products");
  }

  static async getProduct(req, res) {
    const { id } = req.params;

    const product = await Product.getProductById(id);

    res.render("products/product", { product });
  }

  static async removeProduct(req, res) {
    const { id } = req.params;

    await Product.removeProductById(id);

    res.redirect("/products");
  }
};
