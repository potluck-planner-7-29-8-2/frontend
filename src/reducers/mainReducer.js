import { loginReducer, dataReducer, signUpReducer, eventReducer, userReducer } from './index'

export const mainReducer = ({data, login, signUp, event, user}, action) => ({
    data: dataReducer(data, action),
    login: loginReducer(login, action),
    signUp: signUpReducer(signUp, action),
    event: eventReducer(event, action),
    user: userReducer(user, action)
})

export const initialState = {
    data: {
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
    user: {
        user_id: '',
        username: '',
        full_name: '',
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
        isUserLoading: false,
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