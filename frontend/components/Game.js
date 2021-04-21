import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import ReviewList from './ReviewList'

const Game = () =>{
    const { search } = useLocation()
    const match = search.match(/name=(.*)/)
    const name = match?.[1]
    const [reviewList, setReviewList] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/reviews/${title}`).then(res => res.json()).then(reviewList => {
            let reviews = []
            reviewList.reviews.forEach(review => {
                reviews.push({
                    stars: review.FiveStarRating,
                    review: review.Review,
                    hours: review.HoursPlayed
                })
            });
            return reviews
        }).then(reviews => setReviewList(reviews))
    })
    return(
        <div>
            <Link to="/">
                Home
            </Link>
            {
                <ReviewList reviews={reviewList} />
            }
        </div>
    )    
        
}

export default Game