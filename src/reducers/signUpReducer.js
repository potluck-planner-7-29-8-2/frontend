import {IS_SIGNING_UP, SIGNUP_SUCCESS, SIGNUP_ERROR} from '../actions'

/*
State shape:
signUp:{
        isSignUpLoading: false,
        isSignedUp: false,
        errorMessage: ''
    },
*/

export const signUpReducer = (state, {type, payload}) => {
    switch(type){
        case IS_SIGNING_UP:
            return {
                ...state,
                isSignUpLoading: true,
                errorMessage: ''
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isSignUpLoading: false,
                isSignedUp: true
            }
        case SIGNUP_ERROR:
            return {
                ...state,
                isSignUpLoading: false,
                errorMessage: payload
            }
        default:
            return state
    }
}