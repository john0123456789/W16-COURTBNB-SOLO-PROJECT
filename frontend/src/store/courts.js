import { csrfFetch } from "./csrf"

// CREATE
const CREATE_COURT = 'court/createCourt'
// READ
const GET_COURTS = 'court/getCourts'
// UPDATE
const UPDATE_COURT = 'court/updateCourt'
// DELETE
const DELETE_COURT = 'courts/delete'


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

const actionDeleteCourt = (courtId) => {
    return {
        type: DELETE_COURT,
        court
    }
}

// action creators/thunks
export const thunkGetCourts = (user) => async (dispatch) => {
    const response = await csrfFetch('/api/courts');

    if (response.ok) {
        const data = await response.json();
        dispatch(actionGetCourts(data));
        return response;
    } else {
        return await response.json();
    }
  };
