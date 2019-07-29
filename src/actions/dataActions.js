import { axiosWithAuth } from '../utils/axiosTypes'

export const GETTING_USERS='GETTING_USERS'
export const GOT_USERS='GOT_USERS'
export const USERS_ERROR='USERS_ERROR'

export const GETTING_EVENTS='GETTING_EVENTS'
export const GOT_EVENTS='GOT_EVENTS'
export const EVENTS_ERROR="EVENTS_ERROR"

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