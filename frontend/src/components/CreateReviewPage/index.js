import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkCreateReview } from '../../store/reviews';
import { useHistory } from 'react-router-dom'

function CreateReviewPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const court = useSelector(state => state.reviews)
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');
  const [courtId] = useState(court.id);
  const [errors, setErrors] = useState([]);

  const updateReview = (e) => setReview(e.target.value);
  const updateRating = (e) => setRating(e.target.value);

  const handleSubmit = async (e) => {
    const review = {
      courtId,
      review,
      rating,
    };
    e.preventDefault();
    dispatch(thunkCreateReview(review));
    history.push('/reviews')
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push('/courts')
  }

  return (
    <>
      <h1>Add Review</h1>
      <form className='review-form' onSubmit={handleSubmit}>
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
          <select value={rating} onChange={updateRating} required>
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
