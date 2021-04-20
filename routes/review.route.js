const express = require('express');
const urlRoutes = express.Router();
const bodyParser = require('body-parser')



const controller = require("../controllers/review.controller");
urlRoutes.post("/create", bodyParser.json() ,controller.create);
urlRoutes.get('/:GameName', controller.readGame);
urlRoutes.get('/:GameName/:Review_ID', controller.read);

module.exports = urlRoutes;