import { csrfFetch } from "./csrf"

// CREATE
const CREATE_REVIEW = 'reviews/CREATE_REVIEW'
// READ
const GET_REVIEWS = 'reviews/GET_REVIEWS'
// const GET_SINGLE_REVIEW = 'courts/GET_SINGLE_REVIEW'
// UPDATE
// const UPDATE_REVIEW = 'reviews/UPDATE_REVIEW'
// DELETE
const DELETE_REVIEW = 'reviews/DELETE_REVIEW'


// actions
const actionCreateReview = (review) => {
    return {
        type: CREATE_REVIEW,
        review
    }
}

const actionGetReviews = (reviews) => {
    return {
        type: GET_REVIEWS,
        reviews
    }
}

// const actionSingleReview = (review) => {
//   return {
//     type: GET_SINGLE_REVIEW,
//     review
//   }
// }

// const actionUpdateReview = (review) => {
//     return {
//         type: UPDATE_REVIEW,
//         review
//     }
// }

const actionDeleteReview = (review) => {
    return {
        type: DELETE_REVIEW,
        review
    }
}

// action creators/thunks
// create new review
export const thunkCreateReview = (review) => async dispatch => {
    const response = await csrfFetch('/api/reviews/create', {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify(review)
    });

    if (response.ok) {
      const newReview = await response.json()
      dispatch(actionCreateReview(newReview))
      return newReview;
    }
  };

// get all reviews
export const thunkGetReviews = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/court/${id}`);

    if (response.ok) {
      const data = await response.json();
      dispatch(actionGetReviews(data))
    }
}

// get a court
// export const thunkSingleReview = (id) => async (dispatch) => {
//   const response = await csrfFetch(`/api/reviews/${id}`)

//   if (response.ok) {
//     const data = await response.json();
//     dispatch(actionSingleReview(data))
//   }
// }

// update a court
// export const thunkUpdateReview = (review, id) => async (dispatch) => {
//   const response = await csrfFetch(`/api/reviews/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(review),
//     });
//     if (response.ok) {
//       const updatedReview = await response.json();
//       dispatch(actionUpdateReview(updatedReview));
//       return updatedReview;
//     }
//   }

// delete a review
export const thunkDeleteReview = (review, id) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${id}`, {
    method: 'DELETE'
  })

  if (response.ok) {
    const reviewId = await response.json(review);
    dispatch(actionDeleteReview(reviewId));
    return reviewId;
  }
}

const initialState = {};

export const reviewReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type) {
      case GET_REVIEWS:
        action.reviews.forEach((review) => {
        return newState[review.id] = review;
        });
        return newState;
      case CREATE_REVIEW:
         return {...state, [action.review.id]: action.review };
      // case UPDATE_REVIEW:
      //     newState = {...state, [action.review.id]: action.review };
      //     return newState;
      case DELETE_REVIEW:
        delete newState[action.review.id];
        return newState;
      default:
        return state;
    }
}
