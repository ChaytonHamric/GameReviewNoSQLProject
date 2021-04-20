const mongoose = require('mongoose');
const Review = require('../models/Reviews')
 

module.exports = {
    create: (req, res) => {
        res.status(201).json({
            message: "Successfully Created"
        })
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