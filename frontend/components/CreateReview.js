import React, { Component } from "react";

export default class CreateReview extends Component {
    render(){
        return(
            <div>
                <form>
                    <div className="form-group">
                        <label for="Hours Played">Hours Played</label>
                        <input required className="form-control" type="number" id="HoursPlayed" name="Hours Played" min="1" max="1000"></input>
                    </div>
                    <div className="form-group">
                        <label for="Five Star Rating">Five Star Rating</label>
                        <input required className="form-control" type="number" id="FiveStarRating" name="Five Star Rating" min="0" max="5"></input>
                    </div>
                    <div className="form-group">
                        <label for="Review">Bare Bones Review</label>
                        <input required className="form-control" type="text" id="Review" name="Review" defaultValue="Type your review here" maxLength="120"></input>
                    </div>
                    <input className="btn btn-primary"type="submit"></input>
                </form>
            </div>
            
            
        )
    }

}