const { Router } = require("express");
const express = require("express");

const AuthController = require("../controllers/AuthController");

const route = express.Router();

route.get("/login", AuthController.login);
route.post("/login", AuthController.loginPost);
route.get("/register", AuthController.register);
route.post("/register", AuthController.registerPost);
route.get("/logout", AuthController.logout);

module.exports = route;
