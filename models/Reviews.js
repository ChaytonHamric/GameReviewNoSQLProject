const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    GameName: {
        type: String,
        require: true
    },
    HoursPlayed: {
        type: Number,
        require: true
    },
    FiveStarRating: {
        type: Number,
        require: true
    },
    Review: {
        type: String,
        require: true
    }
}, {timestamps: true});

const Review = mongoose.model('Reviews', reviewSchema);
module.exports = Review;