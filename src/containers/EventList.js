import React, { useState } from 'react';
import Event from '../components/Event';

/*{
    "event_name": "",
    "date": "",
    "time": "",
    "description": "",
    "address": "",
    "city": "",
    "state": ""
}*/

const EventList = () => {
    const [events, setEvents] = useState([]);

    return (
        <div>
            <h1>Events</h1>
        {events.map(event => {
           return <Event eventInfo={event} />
        })}
        </div>
    )
}

export default EventList;