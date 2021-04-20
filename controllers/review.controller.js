const mongoose = require('mongoose');
const Review = require('../models/Reviews')
 

module.exports = {
    create: async (req, res) => {

        try {
            const new_Review = new Review({
                GameName: req.params.GameName,
                HoursPlayed: req.params.HoursPlayed,
                FiveStarRating: req.params.FiveStarRating,
                Reviews: req.params.Reviews
            });
            await new_Review.save();

            res.status(201).json({
                review: {
                    ...new_Review._doc,
                    _id: new_Review.id,
                    HoursPlayed: new_Review.HoursPlayed,
                    FiveStarRating: new_Review.FiveStarRating,
                    Review: new_Review.Review
                }
            });
        }
        catch (err){
            throw err;
        }
    },
    read: async (req, res) => { 
        try {
            const review = await Review.findById(req.params.reviewId);
            res.status(201).json({
                review: {
                    ...review._doc,
                    _id: review.id,
                    HoursPlayed: review.HoursPlayed,
                    FiveStarRating: review.FiveStarRating,
                    Review: review.Review
                }
            });
        }
        catch (err){
            throw err;
        }
    },
    readGame: async (req, res) => {
        try{
            const reviews = await Review.find({
                GameName: req.params.GameName
            });
            transformed_Reviews = reviews.map(review => {
                return {
                    ...review._doc,
                    _id: review.id,
                    HoursPlayed: review.HoursPlayed,
                    FiveStarRating: review.FiveStarRating,
                    Review: review.Review
                }
            });
            res.status(201).json({
                reviews: transformed_Reviews
            });
        }
        catch (err){
            throw err;
        }
    } 
}