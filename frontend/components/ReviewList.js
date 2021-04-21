import React, { Component } from 'react'
import Review from './Review'
export default class ReviewList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.reviews.map(review=><Review stars={review.stars} hours={review.hours} review={review.review} />)
                }
            </div>
        )
    }

}