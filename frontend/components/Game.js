import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CreateReview from "./CreateReview";
import ReviewList from "./ReviewList";

const Game = () => {
  const { name } = useParams();
  const [reviewList, setReviewList] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/reviews/${name}`)
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

  return (
    <div>
      <Link to="/">Home</Link>
      <h1>{name}</h1>
      {<ReviewList reviews={reviewList} />}
        <div>
            <CreateReview />
        </div>
    </div>
  );
};

export default Game;
