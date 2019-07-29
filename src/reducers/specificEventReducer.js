/*
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
*/


export const eventReducer = (state, {type, payload}) => {
    switch(type){
        default:
            return state
    }
}