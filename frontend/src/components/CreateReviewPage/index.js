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


  const handleAddReview = async (e) => {
    const url = window.location.href.split('/')
    console.log(url)
    const num = Number(url[url.length -1])

    const reviewForm = {
      userId,
      courtId: num,
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
    <body className="reviewBody">
      <h1>Add Review</h1>
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
