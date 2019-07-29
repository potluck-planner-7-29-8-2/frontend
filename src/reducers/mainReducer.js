import { loginReducer, usersReducer, eventsReducer, signUpReducer, eventReducer } from './index'

export const mainReducer = ({login, signUp, event, users, events}, action) => ({
    login: loginReducer(login, action),
    signUp: signUpReducer(signUp, action),
    event: eventReducer(event, action),
    users: usersReducer(users, action),
    events: eventsReducer(events, action)
})

export const initialState = {
    events: {
        data: [{
            event_id: '',
            organizer_id: '',
            event_name: '',
            date: '',
            time: '',
            description: '',
            address: '',
            city: '',
            state: '',
        }],
        errorMessage: '',
        isEventsLoading: false
    },
    users: {
        data: [{
            user_id: '',
            username: '',
            full_name:'', 
            email: ''
        }],
        errorMessage: '',
        isUsersLoading: false,
    },
    login: {
        isLoginLoading: false,
        isLoggedIn: false,
        errorMessage: '',
        welcomeMessage: ''
    },
    signUp:{
        isSignUpLoading: false,
        isSignedUp: false,
        errorMessage: ''
    },
    event: {
        id: '',
        organizerID: '',
        event_name: '',
        date: '',
        time: '',
        description: '',
        address: '',
        city: '',
        state: '',
        recipes: [{
            recipe_name: '',
            user_id: '',
            full_name: ''
        }],
        guests: [{
            user_id: '',
            full_name: '',
            attending: false
        }],
        isEventLoading: false,
        errorMessage: ''
    }
}