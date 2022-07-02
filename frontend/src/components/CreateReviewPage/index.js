import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkCreateReview } from '../../store/reviews';
import { useHistory } from 'react-router-dom'
import './CreateReviewPage.css';

function CreateReviewPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user);
  const [userId] = useState(user.id);

  const [review, setReview] = useState('');
  const [rating, setRating] = useState(1);

  const updateReview = (e) => setReview(e.target.value);
  const updateRating = (e) => setRating(parseInt(e.target.value, 10));

  let checkErrors = { review:'', };
  const [errors, setErrors] = useState(checkErrors);


  const handleAddReview = async (e) => {
    e.preventDefault();
    const url = window.location.href.split('/')
    const num = Number(url[url.length -1])

    let error = false;
    checkErrors = { ...checkErrors }

    if (review.length < 5) {
      checkErrors.review = "Review must be at least 5 characters long."
      error = true;
    }

    setErrors(checkErrors);

    if (!error) {
    const reviewForm = {
      userId,
      courtId: num,
      review,
      rating,
    };
    dispatch(thunkCreateReview(reviewForm));
    history.push('/courts')
  };
}

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push('/courts')
  }

  return (
    <>
    <body className="reviewBody">
      <h1>Add Review</h1>
      <div className="errorsList">
        <ul>{errors.review && <div>{errors.review}</div>}</ul>
      </div>
      <form className='review-form' onSubmit={handleAddReview}>
        <label>
          Review
          <textarea
            className="reviewBox"
            type="text"
            placeholder="Review"
            value={review}
            onChange={updateReview}
          />
        </label>
        <label>
          Rating
          <select className="rating-select" value={rating} onChange={updateRating}>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
          </select>
        </label>
        <div className="reviewButtons">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancelClick}>Cancel</button>
        </div>
      </form>
    </body>
    </>
  );
}

export default CreateReviewPage;
