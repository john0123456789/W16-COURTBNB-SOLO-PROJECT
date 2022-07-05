import { thunkGetReviews, thunkDeleteReview } from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./ReviewsPage.css";

function ReviewsPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);
  const reviews = useSelector((state) => state.reviews);
  const reviewsArr = Object.values(reviews);
  const url = window.location.href.split("/");
  const num = Number(url[url.length - 1]);

  useEffect(() => {
    dispatch(thunkGetReviews(num));
  }, [dispatch, num]);

  if (reviewsArr.length === 0) {
    return (
      <h1 className="no-reviews">
        There are currently no reviews for this court.
      </h1>
    );
  } else {
    if (!user) {
      return (
        <>
          {reviews &&
            reviewsArr.map((review) => {
              return (
                <ul className="reviewBox" key={review.id}>
                  <div className="reviewItems">
                    <ul>Review:{review.review}</ul>
                    <ul>Rating:{review.rating}</ul>
                  </div>
                </ul>
              );
            })}
        </>
      );
    } else {
      if (reviewsArr.length === 0) {
        return (
          <h1 className="no-reviews">
            There are currently no reviews for this court.
          </h1>
        );
      } else {
        return (
          <>
            {reviews &&
              reviewsArr.map((review) => {
                const handleDeleteClick = (e) => {
                  e.preventDefault();
                  const reviewId = Number(e.target.id);
                  for (review of reviewsArr) {
                    if (review.id === reviewId) {
                      dispatch(thunkDeleteReview(review, reviewId));
                      history.push(`/reviews/court/${review.courtId}`);
                    }
                  }
                };
                if (review.userId === user.id) {
                  return (
                    <ul className="reviewBox" key={review.id}>
                      <div className="reviewItems">
                        <ul>Review: {review.review}</ul>
                        <ul>Rating: {review.rating}</ul>
                        <button
                          className="remove-review-btn"
                          type="button"
                          id={review.id}
                          onClick={handleDeleteClick}
                        >
                          Remove
                        </button>
                      </div>
                    </ul>
                  );
                } else {
                  return (
                    <ul className="reviewBox" key={review.id}>
                      <div className="reviewItems">
                        <ul>Review:{review.review}</ul>
                        <ul>Rating:{review.rating}</ul>
                      </div>
                    </ul>
                  );
                }
              })}
          </>
        );
      }
    }
  }
}

export default ReviewsPage;
