const conn = require("../db/conn");
const { ObjectId } = require("mongodb");

class Product {
  constructor(name, price, description, image) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
  }

  save() {
    const product = conn.db().collection("products").insertOne({
      name: this.name,
      price: this.price,
      description: this.description,
      image: this.image,
    });

    return product;
  }

  static getProducts() {
    const products = conn.db().collection("products").find().toArray();

    return products;
  }

  static async getProductById() {
    const product = await conn
      .db()
      .collection("products")
      .findOne({ _id: ObjectId(id) });
  }

  static async removeProductById(id) {
    await conn
      .db()
      .collection("products")
      .deleteOne({ _id: ObjectId(id) });

    return;
  }
}

module.exports = Product;
