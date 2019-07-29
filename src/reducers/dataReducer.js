import {} from '../actions'


/*
State shape:
data: {
    events: [],
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
        default:
            return state
    }
}