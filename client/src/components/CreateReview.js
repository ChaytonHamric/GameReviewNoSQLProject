import React, { Component } from "react";
import StarList from './StarList'
export default class CreateReview extends Component {
    constructor(props) {
        super(props)
        this.hoursEl = React.createRef()
        this.reviewEl = React.createRef();
        this.state = {
            starCount: 0
        }
    }

    updateStarCount(stars) {
        this.setState({starCount: stars})
    }

    clickHandler(e) {
        const hours = this.hoursEl.current.value
        const review = this.reviewEl.current.value
        const stars = this.state.starCount
        const gameName = this.props.gameName

        fetch("http://157.230.63.172:3000/reviews/create/", {
          headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            GameName: gameName,
            HoursPlayed: hours,
            FiveStarRating: stars,
            Review: review,
          }),
        })
          .then((res) => res.json())
          .then((body) => {
              const newReviews = [...this.props.currentReviewList]
              newReviews.push({
                stars: body.FiveStarRating,
                review: body.Review,
                hours: body.HoursPlayed
              })
            this.props.updateReviewList(newReviews)
          });
        e.preventDefault()
    }

    render(){
        return(
            <div style={{margin: '35px'}}>
                <form id="myform" action="" >
                    <div className="form-group">
                        <label htmlFor="HoursPlayed">Hours Played</label>
                        <input ref={this.hoursEl} required className="form-control" type="number" id="HoursPlayed" name="HoursPlayed" min="1" max="1000"></input>
                    </div>
                    <div className="form-group">
                        {/* <label for="FiveStarRating">Five Star Rating</label>
                        <input required className="form-control" type="number" id="FiveStarRating" name="FiveStarRating" min="0" max="5"></input> */}
                        <StarList updateFormStars={this.updateStarCount.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Review">Bare Bones Review</label>
                        <input required ref={this.reviewEl} className="form-control" type="text" id="Review" name="Review" placeholder="Type your review here" maxLength="120"></input>
                    </div>
                    <button className="btn btn-primary" onClick={this.clickHandler.bind(this)}>Submit</button>
                </form>
            </div>
            
            
        )
    }

}
