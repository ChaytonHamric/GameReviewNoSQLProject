import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CreateReview from "./CreateReview";
import ReviewList from "./ReviewList";
import "../style.css"
export default function Game(props) {
  const { name } = useParams();
  const [reviewList, setReviewList] = useState([]);
  const [gameName, setGameName] = useState(decodeURI(name))
  const boxArt = encodeURI(`https://static-cdn.jtvnw.net/ttv-boxart/${gameName}-150x210.jpg`)
  useEffect(() => {
    fetch(`http://localhost:3000/reviews/${gameName.split(' ').join('')}`)
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
        setReviewList(reviews);
      });
  }, []);
  console.log(props)

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
          </div>
        </div>
        </center>
        <div className="container">
          {<ReviewList reviews={reviewList} />}
        </div>
        <div className="container">
          <CreateReview
            gameName={gameName.split(" ").join("")}
            updateReviewList={setReviewList}
            currentReviewList={reviewList}
          />
        </div>
        </div>
    </div>
  );
};
