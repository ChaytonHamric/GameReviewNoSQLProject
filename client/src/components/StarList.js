import React, { Component } from "react";
import starImg from "../star.png";
import '../style.css'

export default class CreateReview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      starCount: 0
    }

    this.starRef = React.createRef()
  }

  componentDidMount() {
    this.setRating()
  }

  setRating(ev) {
    const currentStars = this.state.starCount
    const stars = this.starRef.current.getElementsByClassName("star-image");
    Array.from(stars).forEach(star => {
      currentStars >= star.dataset.value ? star.classList.remove('inactive') : star.classList.add('inactive')
    })
  }

  clickHandler(ev) {
    let rating = ev.target.dataset.value
    this.setState({ starCount: rating })
    this.props.updateFormStars(rating)
    ev.stopPropagation();
  }

  hoverHandler(ev) {
    const currentStars = this.state.starCount
    const stars = ev.target.parentElement.getElementsByClassName('star-image')
    const hoverValue = ev.target.dataset.value
    Array.from(stars).forEach(star => {
      hoverValue >= star.dataset.value
        ? star.classList.remove("inactive")
        : star.classList.add("inactive");
    })
  }

  render() {
    return (
      <div data-rating={this.state.starCount} onMouseOut={this.setRating.bind(this)} ref={this.starRef} className="star-list">
        {[...Array(5).keys()].map(star => {
          return (
            <img src={starImg} className="star-image star-input" key={star + 1} data-value={star+1} onMouseOver={this.hoverHandler.bind(this)} onClick={this.clickHandler.bind(this)} />
          )
        })}
      </div>
    );
  }
}