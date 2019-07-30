import React, { useState, useEffect } from 'react';
import Event from '../components/Event';
import AddEvent from '../components/AddEvent';
import { getEvents } from '../actions/generalEventsActions';
import { useStateValue } from '../hooks/useStateValue';
import { useLocalStorage } from '../hooks/useLocalStorage';
/*{
    "event_name": "",
    "date": "",
    "time": "",
    "description": "",
    "address": "",
    "city": "",
    "state": ""
}*/

/*export const getEvents = (dispatch, id) => {
    dispatch({type: GETTING_EVENTS})
    axiosWithAuth()
        .get(`/users/${id}/events`)
        .then(res => {
            dispatch({type: GOT_EVENTS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: EVENTS_ERROR, payload: err.response.data.message})
        })
}*/

const EventList = () => {
    const [eventList, setEventList] = useState([]);
    const [{ events }, dispatch] = useStateValue();
    const [user_id] = useLocalStorage("user_id");
    console.log(eventList)
    //console.log(getEvents(dispatch, user_id))

    useEffect(() => {
        setEventList(events.data);
    },[events])


    return (
        <div>
            <h1>Events</h1>
            <AddEvent />
        </div>
    )
}

export default EventList;