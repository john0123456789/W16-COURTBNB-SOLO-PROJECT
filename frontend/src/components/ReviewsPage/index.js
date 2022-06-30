import { thunkGetReviews, thunkDeleteReview } from '../../store/reviews';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

function ReviewsPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const sessionUser = useSelector(state => state.session.user);
    const reviews = useSelector(state => state.reviews);
    const reviewsArr = Object.values(reviews);
    const url = window.location.href.split("/")
    const num = Number(url[url.length - 1])

    useEffect (() => {
        dispatch(thunkGetReviews(num))
    }, [dispatch])

  if (sessionUser) {
    return (
        <>
        {reviews && reviewsArr.map(review => {
            const handleDeleteClick = (e) => {
                e.preventDefault();
                const reviewId = Number(e.target.id)
                for (review of reviewsArr) {
                  if(review.id === reviewId) {
                    dispatch(thunkDeleteReview(review, reviewId))
                    history.push(`/reviews/court/${review.courtId}`)
                  }
                }
              }
            return <ul key={review.id}>
                <li>Review: {review.review}</li>
                <li>Rating: {review.rating}</li>
                <button type='button' id={review.id} onClick={handleDeleteClick}>Remove</button>
            </ul>
          })}
        </>
    );
} else {
    return (
        <>
        {reviews && reviewsArr.map(review => {
            return <ul key={review.id}>
                <li>Review:{review.review}</li>
                <li>Rating:{review.rating}</li>
            </ul>
          })}
        </>
    );
  }
}

export default ReviewsPage;
