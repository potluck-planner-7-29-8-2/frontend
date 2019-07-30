import React, { useEffect } from 'react'
import { useStateValue } from '../hooks/useStateValue'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { getEvents } from '../actions'
import EventCard from '../components/EventCard'

const EventList = () => {
    const [user_id] = useLocalStorage("user_id");
    const [{ events }, dispatch] = useStateValue();
    const {errorMessage, data} = events
    
    useEffect(() => {
        getEvents(dispatch, user_id)
    },[dispatch, user_id])

    return (
        <>
            <h1>Events</h1>
            {errorMessage && <h2>{errorMessage}</h2>}
            {data.length>0 && data.map(event => <EventCard event={event} key={event.event_id} />)}
        </>
    )
}

export default EventList;