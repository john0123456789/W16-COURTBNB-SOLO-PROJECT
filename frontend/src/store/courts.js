import { csrfFetch } from "./csrf"

// CREATE
const CREATE_COURT = 'courts/CREATE_COURT'
// READ
const GET_COURTS = 'courts/GET_COURTS'
const GET_SINGLE_COURT = 'courts/GET_SINGLE_COURT'
// UPDATE
const UPDATE_COURT = 'courts/UPDATE_COURT'
// DELETE
const DELETE_COURT = 'courts/DELETE_COURT'


// actions
const actionCreateCourt = (court) => {
    return {
        type: CREATE_COURT,
        court
    }
}

const actionGetCourts = (courts) => {
    return {
        type: GET_COURTS,
        courts
    }
}

const actionSingleCourt = (court) => {
  return {
    type: GET_SINGLE_COURT,
    court
  }
}

const actionUpdateCourt = (court) => {
    return {
        type: UPDATE_COURT,
        court
    }
}

const actionDeleteCourt = (court) => {
    return {
        type: DELETE_COURT,
        court
    }
}

// action creators/thunks
// create new court
export const thunkCreateCourt = (court) => async dispatch => {
    const response = await csrfFetch(`/api/courts/create`, {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify(court)
    });

    if (response.ok) {
      const newCourt = await response.json()
      dispatch(actionCreateCourt(newCourt))
      return newCourt;
    }
  };

// get all courts
export const thunkGetCourts = () => async (dispatch) => {
    const response = await csrfFetch('/api/courts');

    if (response.ok) {
      const data = await response.json();
      dispatch(actionGetCourts(data))
    }
}

// get a court
export const thunkSingleCourt = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/courts/${id}`)

  if (response.ok) {
    const data = await response.json();
    dispatch(actionSingleCourt(data))
  }
}

// update a court
export const thunkUpdateCourt = (court, id) => async (dispatch) => {
  const response = await csrfFetch(`/api/courts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(court),
    });
    if (response.ok) {
      const updatedCourt = await response.json();
      dispatch(actionUpdateCourt(updatedCourt));
      return updatedCourt;
    }
  }

// delete a court
export const thunkDeleteCourt = (court, id) => async (dispatch) => {
  const response = await csrfFetch(`/api/courts/${id}`, {
    method: 'DELETE'
  })

  if (response.ok) {
    const courtId = await response.json(court);
    dispatch(actionDeleteCourt(courtId));
    return courtId;
  }
}

const initialState = {};

export const courtReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type) {
      case GET_COURTS:
        action.courts.forEach((court) => {
        return newState[court.id] = court;
        });
        return newState;
      case GET_SINGLE_COURT:
        return {...state, types: action.types};
      case CREATE_COURT:
        if (!state[action.court.id]) {
            newState = {...state, [action.court.id]: action.court }
        };
        return newState
      case UPDATE_COURT:
          newState = {...state, [action.court.id]: action.court };
          return newState;
      case DELETE_COURT:
        delete newState[action.court.id];
        return newState;
      default:
        return state;
    }
}
