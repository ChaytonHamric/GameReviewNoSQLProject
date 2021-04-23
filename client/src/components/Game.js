import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CreateReview from "./CreateReview";
import ReviewList from "./ReviewList";

const Game = props => {
  const { name } = useParams();
  const [reviewList, setReviewList] = useState([]);
  const [gameName, setGameName] = useState(name)
  const boxArt = encodeURI(`https://static-cdn.jtvnw.net/ttv-boxart/${name}-100x100.jpg`)
  useEffect(() => {
    fetch(`http://localhost:3000/reviews/${gameName}`)
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
        <div class="media">
            <img class="mr-3" src={boxArt} alt={`${name} Box Art`} />
            <div class="media-body">
                <h1 class="mt-0">{props.name}</h1>
            </div>
        </div>
        <Link to="/">Home</Link>
        <h1>{props.name}</h1>
        {<ReviewList reviews={reviewList} />}
            <div>
                <CreateReview gameName={name} updateReviewList={setReviewList} currentReviewList={reviewList} />
            </div>
    </div>
  );
};

export default Game;
