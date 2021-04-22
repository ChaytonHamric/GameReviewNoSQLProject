const express = require("express");
const urlRoutes = express.Router();
const bodyParser = require("body-parser");

const controller = require("../controllers/title.controller");
urlRoutes.get("/", controller.read);

module.exports = urlRoutes;
