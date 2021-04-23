const express = require("express");
const urlRoutes = express.Router();
const bodyParser = require("body-parser");

const controller = require("../controllers/title.controller");
urlRoutes.post("/", bodyParser.json(), controller.readOne);

module.exports = urlRoutes;
