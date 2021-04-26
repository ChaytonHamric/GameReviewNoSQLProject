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
      <Link to="/">Home</Link>
      <a href="#myform">Create a Review</a>
      <div className="media">
        <img className="mr-3" src={boxArt} alt={`${gameName} Box Art`} />
        <div className="media-body">
          <h1 className="mt-0">{gameName}</h1>
        </div>
      </div>

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
