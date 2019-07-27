import { loginReducer } from './loginReducer'
import { dataReducer } from './dataReducer'

export const mainReducer = ({data, login}, action) => ({
    data: dataReducer(data, action),
    login: loginReducer(login, action)
})

export const initialState = {
    data: {
        test: 1234
    },
    login: {
        isLoggingIn: false,
        isLoggingOut: false,
        isLoggedIn: false,
        isLoggedOut: false,
        isSigningUp: false,
        isSignedUp: false,
        errorMessage: ''
    }
}