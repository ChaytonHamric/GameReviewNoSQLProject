const mongoose = require('mongoose');
const Review = require('../models/Reviews')
 

module.exports = {
    create: async (req, res) => {
        console.log(req.body)
        try {
            const new_Review = new Review({
                GameName: req.body.GameName,
                HoursPlayed: req.body.HoursPlayed,
                FiveStarRating: req.body.FiveStarRating,
                Review: req.body.Review
            });
            const return_Review = await new_Review.save();

            res.status(201).json(return_Review);
        }
        catch (err){
            throw err;
        }
    },
    read: async (req, res) => { 
        try {
            const review = await Review.find({
                _id:req.params.Review_ID
            });
            if (!review || review.length == 0){
                res.status(404).json({
                    message: "Review Not Found"
                });
            }
            res.status(201).json(review);
        }
        catch (err){
            throw err;
        }
    },
    readGame: async (req, res) => {
        console.log(req.params.GameName)
        try{
            const reviews = await Review.find({
                GameName: req.params.GameName
            });
            res.status(201).json({
                reviews: reviews
            });
        }
        catch (err){
            throw err;
        }
    } 
}

