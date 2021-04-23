const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const titleSchema = new Schema({
  Name: {
    type: String,
    require: true
  }
}, {
  collection: 'GameTitles'
})

const GameTitle = mongoose.model('GameTitles', titleSchema);
module.exports = GameTitle;