import React, { Component } from "react";
import star from "../star.png";

export default class Review extends Component {
  componentDidMount() {
    for (var i = 0; i < this.props.stars; ++i) {
      this.setState((prevState) => ({
        stars: [
          ...prevState.stars,
          <img className="star-image" src={star}></img>,
        ],
      }));
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      stars: [],
    };
  }
  render() {
    return (
      <div>
        <div>{this.state.stars}</div>
        <p>Review: {this.props.review}</p>
        <ul>
          <li>Hours Played{this.props.hours}</li>
        </ul>
      </div>
    );
  }
}
