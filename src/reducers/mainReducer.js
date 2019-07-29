import { loginReducer, dataReducer, signUpReducer, eventReducer } from './index'

export const mainReducer = ({data, login, signUp, event}, action) => ({
    data: dataReducer(data, action),
    login: loginReducer(login, action),
    signUp: signUpReducer(signUp, action),
    event: eventReducer(event, action),
})

export const initialState = {
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
            full_name:'', 
            email: ''
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