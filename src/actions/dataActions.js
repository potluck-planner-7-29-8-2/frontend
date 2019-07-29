import { axiosWithAuth } from '../utils/axiosTypes'

export const GETTING_USERS='GETTING_USERS'
export const GOT_USERS='GOT_USERS'
export const USERS_ERROR='USERS_ERROR'

export const GETTING_EVENTS='GETTING_EVENTS'
export const GOT_EVENTS='GOT_EVENTS'
export const EVENTS_ERROR="EVENTS_ERROR"

export const CREATING_EVENT="CREATING_EVENT"
export const CREATED_EVENT="CREATED_EVENT"
export const CREATING_EVENT_ERROR="CREATING_EVENT_ERROR"


//will return a list of all users. We can then filter this with the 
//user stored in localStorage to get our needed userID
export const getUsers = (dispatch) => {
    dispatch({type: GETTING_USERS})
    axiosWithAuth()
        .get('/users')
        .then(res => {
            dispatch({type:GOT_USERS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: USERS_ERROR, payload: err.response.data.message})
        })
}


//need to pass in the id of the user currently logged in
export const getEvents = (dispatch, id) => {
    dispatch({type: GETTING_EVENTS})
    axiosWithAuth()
        .get(`/users/${id}/events`)
        .then(res => {
            dispatch({type: GOT_EVENTS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: EVENTS_ERROR, payload: err.response.data.message})
        })
}

/* 
    event should be the following shape: 
    {
        "event_name": "",
        "date": "",
        "time": "",
        "description": "",
        "address": "",
        "city": "",
        "state": ""
    }
*/
export const addEvent = (dispatch, id, event) => {
    dispatch({type: CREATING_EVENT})
    axiosWithAuth()
        .post(`/users/${id}/events`, event)
        .then(res => {
            dispatch({type: CREATED_EVENT, payload: res.data})
        })
        .catch(err => {
            dispatch({type: CREATING_EVENT_ERROR, payload: err.response.data.message})
        })
}

