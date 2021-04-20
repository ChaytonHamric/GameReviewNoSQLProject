const express = require('express');
const urlRoutes = express.Router();



const controller = require("../controllers/review.controller");
urlRoutes.post("/create", controller.create);
urlRoutes.get('/:Game_Name', controller.readGame);
urlRoutes.get('/:Game_name/:Review_ID', controller.read);

module.exports = urlRoutes;