import { loginReducer, dataReducer, signUpReducer, eventReducer } from './index'

export const mainReducer = ({data, login, signUp, event}, action) => ({
    data: dataReducer(data, action),
    login: loginReducer(login, action),
    signUp: signUpReducer(signUp, action),
    event: eventReducer(event, action),
})

export const initialState = {
    data: {
        events: [],
        users: [],
        error: '',
        isDataLoading: false,
    },
    login: {
        isLoginLoading: false,
        isLoggedIn: false,
        isLoggedOut: false,
    },
    signUp:{
        isSignUpLoading: false,
        isSignedUp: false,
        errorMessage: ''
    },
    event: {
        id: '',
        organizerID: '',
        name: '',
        date: '',
        time: '',
        description: '',
        address: '',
        city: '',
        state: '',
        food: [{
            recipe_name: '',
            guestID: '',
            guestName: ''
        }],
        guests: [{
            id: '',
            name: '',
            isAttending: false
        }],
        isEventLoading: false,
        error: ''
    }
}