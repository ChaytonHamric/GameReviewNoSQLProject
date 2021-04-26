import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CreateReview from "./CreateReview";
import ReviewList from "./ReviewList";

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <center> */}
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
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
      <center>
      <div className="media">
        <img className="mr-3" src={boxArt} alt={`${gameName} Box Art`} />
        <div className="media-body">
          <h1 className="mt-0">{gameName}</h1>
        </div>
      </div>
      </center>

      {<ReviewList reviews={reviewList} />}
      <div>
        <CreateReview
          gameName={gameName.split(" ").join("")}
          updateReviewList={setReviewList}
          currentReviewList={reviewList}
        />
      </div>
    </div>
  );
};
