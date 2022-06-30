import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkCreateReview } from '../../store/reviews';
import { useHistory } from 'react-router-dom'

function CreateReviewPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user);
  const [userId] = useState(user.id);

  const court = useSelector(state => state.courts);
  console.log(court)
  const courtArr = Object.values(court);
  console.log(courtArr)
  const courtId = null;

  const [review, setReview] = useState('');
  const [rating, setRating] = useState(1);
  const [errors, setErrors] = useState([]);

  const updateReview = (e) => setReview(e.target.value);
  const updateRating = (e) => setRating(parseInt(e.target.value, 10));


  const handleAddReview = async (e) => {
    const reviewForm = {
      userId,
      courtId,
      review,
      rating,
    };
    e.preventDefault();
    dispatch(thunkCreateReview(reviewForm));
    history.push('/courts')
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push('/courts')
  }

  return (
    <>
      <h1>Add Review</h1>
      <form className='review-form' onSubmit={handleAddReview}>
        <ul>
          {errors.map((error, id) => (
            <li key={id}>{error}</li>
          ))}
        </ul>
        <label>
          Review
          <textarea
            type="text"
            placeholder="Review"
            value={review}
            onChange={updateReview}
            required
          />
        </label>
        <label>
          Rating
          <select value={rating} onChange={updateRating}>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
          </select>
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </>
  );
}

export default CreateReviewPage;
