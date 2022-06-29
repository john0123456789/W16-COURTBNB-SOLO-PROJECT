import { thunkGetReviews } from '../../store/reviews';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

function ReviewsPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const sessionUser = useSelector(state => state.session.user);
    const reviewsObj = useSelector(state => state.reviews);
    const reviewsArr = Object.values(reviewsObj);

    useEffect (() => {
        dispatch(thunkGetReviews())
    }, [dispatch])

  if (sessionUser) {
    return (
        <>
        {reviewsObj && reviewsArr.map(review => {
            const handlePostClick = (e) => {
                e.preventDefault();
                history.push(`/reviews/create`)
              }
            return <ul key={review.id}>
                <li>{review.review}</li>
                <li>{review.rating}</li>
                <button type='button' onClick={handlePostClick}>Add Review</button>
            </ul>
          })}
        </>
    );
} else {
    return (
        <>
        {reviewsObj && reviewsArr.map(review => {
            return <ul key={review.id}>
                <li>{review.review}</li>
                <li>{review.rating}</li>
            </ul>
          })}
        </>
    );
  }
}

export default ReviewsPage;
