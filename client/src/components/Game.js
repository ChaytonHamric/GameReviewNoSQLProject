import React, { useEffect, useState, Component } from "react";
import { Link, useParams, RouteComponentProps } from "react-router-dom";
import CreateReview from "./CreateReview";
import ReviewList from "./ReviewList";
import "../style.css"
import star from '../star.png'
import halfStar from '../half_star.png'

export default function Game(props) {
  const { name } = useParams();
  const [gameReviews, setReviewList] = useState([]);
  const [gameName, setGameName] = useState(decodeURI(name))
  const [stars, setStars] = useState([])
  const [rating, setRating] = useState(0)
  useEffect(() => {
    fetch(`http://157.230.63.172:3000/reviews/${gameName.split(" ").join("")}`)
      .then((res) => res.json())
      .then((list) => {
        let reviews = [];
        list.reviews.forEach((review) => {
          reviews.push({
            stars: review.FiveStarRating,
            review: review.Review,
            hours: review.HoursPlayed,
          });
        });
        calcAvg();
        setReviewList(reviews);
      });
  }, []);

  useEffect(() => {
    calcAvg()
  }, [gameReviews])

  const calcAvg = () => {
    if(gameReviews.length > 0) {
      const totalStars = gameReviews.reduce((total, review) => {
        total += review.stars;
        return total;
      }, 0);
      const rating = Math.round((totalStars / gameReviews.length)*2)/2
      console.log(rating)
      let starArr = []
      if((rating-.5) % 1 === 0) {
        console.log("number is a .5")
        for(let i = 0; i < rating - .5; ++i) {
          starArr = [...starArr, <img className="star-image star-avg" src={star}></img>]
        }
        starArr = [...starArr, <img className="star-image star-avg" src={halfStar}></img>]
      } else {
        for(let i = 0; i < rating; ++i) {
          starArr = [...starArr, <img className="star-image star-avg" src={star}></img>]
        }
      }
      setRating(rating)
      setStars(starArr)
    } else {
      let starsArr = []
      for(let i = 0; i < 5; ++i) {
        starsArr = [...starsArr, <img className="star-image star-avg inactive" src={star}></img>]
      }
      setStars(starsArr)
      setRating(0)
    }
  }

  const boxArt = encodeURI(`https://static-cdn.jtvnw.net/ttv-boxart/${gameName}-150x210.jpg`)

  return (
    <div>
      <nav className="container navbar navbar-expand-lg navbar-custom justify-content-between">
        {/* <center> */}
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#myform">Create a Review</a>
            </li>
          </ul>
        </div>
      {/* </center> */}
      </nav>
        <div className="container">
      <center>
        <div className="media container box-art">
          <img className="mr-3 box-image" src={boxArt} alt={`${gameName} Box Art`} />
          <div className="media-body">
            <h1 className="mt-0 gameName">{gameName}</h1>
              {stars}
          </div>
        </div>
        </center>
        <div className="container">
          <ReviewList reviews={gameReviews} />
          <CreateReview
            gameName={gameName.split(" ").join("")}
            updateReviewList={setReviewList}
            currentReviewList={gameReviews}
          />
        </div>
        <div className="container">
        </div>
        </div>
    </div>
  );
};