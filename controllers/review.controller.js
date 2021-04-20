module.exports = {
    create: (req, res) => {
        res.status(201).json({
            message: "Successfully Created"
        })
    },
    read: (req, res) => {
        res.status(201).json({
            message: "Successfully Created"
        })
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