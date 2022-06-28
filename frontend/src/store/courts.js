import { csrfFetch } from "./csrf"

// CREATE
const CREATE_COURT = 'courts/CREATE_COURT'
// READ
const GET_COURTS = 'courts/GET_COURTS'
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

export const thunkGetCourts = () => async (dispatch) => {
    const response = await csrfFetch('/api/courts');

    if (response.ok) {
      const data = await response.json();
      dispatch(actionGetCourts(data))
    }
}

export const thunkUpdateCourt = (editedCourt, id) => async (dispatch) => {
  const response = await csrfFetch(`/api/courts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedCourt),
    });
    if (response.ok) {
      const court = await response.json();
      dispatch(editedCourt(court));
      return court;
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
      case CREATE_COURT:
        if (!state[action.court.id]) {
            newState = {...state, [action.court.id]: action.court }
        };
        return newState
      case UPDATE_COURT:
        if (!state[action.court.id]) {
          newState = {...state, [action.court.id]: action.court }
        };
      default:
        return state;
    }
}
