import {GETTING_USERS, GOT_USERS, USERS_ERROR,
    GETTING_EVENTS, GOT_EVENTS, EVENTS_ERROR, 
    CREATED_EVENT, CREATING_EVENT, CREATING_EVENT_ERROR
} from '../actions'


/*
State shape:
data: {
        currentUser: {
            username:'',
            full_name: '',
            user_id: '', 
            email: ''
        },
        events: [
            {
                event_id: '',
                organizer_id: '',
                event_name: '',
                date: '',
                time: '',
                description: '',
                address: '',
                city: '',
                state: '',
            }
        ],
        users: [{
            user_id: '',
            username: '',
            full_name:''
        }],
        errorMessage: '',
        isDataLoading: false,
    },
*/

export const dataReducer = (state, {type, payload}) => {
    switch(type){
        case GETTING_USERS:
            return {
                ...state,
                isDataLoading: true
            }
        case GOT_USERS:
            return {
                ...state,
                isDataLoading: false,
                users: payload
            }
        case USERS_ERROR:
            return {
                ...state,
                isDataLoading: false,
                errorMessage: payload
            }
        case GETTING_EVENTS:
            return {
                ...state,
                isDataLoading: true
            }
        case GOT_EVENTS:
            return {
                ...state,
                isDataLoading: false,
                events: payload
            }
        case EVENTS_ERROR:
            return {
                ...state,
                isDataLoading: false,
                errorMessage: payload
            }
        case CREATING_EVENT:
            return {
                ...state,
                isDataLoading: true
            }
        case CREATED_EVENT:
            return {
                ...state,
                events: payload,
                isDataLoading: false
            }
        case CREATING_EVENT_ERROR:
            return {
                ...state,
                isDataLoading: false,
                errorMessage: payload
            }
        default:
            return state
    }
}