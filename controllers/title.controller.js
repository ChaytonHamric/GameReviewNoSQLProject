const mongoose = require("mongoose");
const Title = require("../models/GameTitle");

module.exports = {
  read: async (req, res) => {
    console.log("Reading Title List");
    try {
      const titles = await Title.find();
      console.log("Read Game List");
      res.status(201).json({
        titles: titles,
      });
    } catch (err) {
      throw err;
    }
  },
  readOne: async (req, res) => {
    console.log("Read Game List");
    try {
      console.log("Pulling Names");
      let titles = await Title.find({
        Name: { $regex: `${req.body.GameName}`, $options: "i" },
      });
      console.log("Finished Reading");
      if (req.body.GameName == "") {
        titles = [titles[Math.floor(Math.random() * titles.length)]];
      }
      if (titles.length == 0) console.log("No results found");
      console.log("Read Game List");
      res.status(201).json({
        titles: titles,
      });
    } catch (err) {
      throw err;
    }
  },
};
