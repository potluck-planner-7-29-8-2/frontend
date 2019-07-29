import React, {useState} from 'react';
import { useStateValue } from '../hooks';
import { addEvent } from '../actions';
const AddEvent = (props) => {
    const [event, setEvent] = useState({
        "event_name": "",
        "date": "",
        "time": "",
        "description": "",
        "address": "",
        "city": "",
        "state": ""
    });

    const [,dispatch] = useStateValue();

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            addEvent(event, ,dispatch)
        }}>
            <fieldset>
                <legend>Add Event</legend>
                <input type='text' value={event.event_name} placeholder='Event Name'/>
                <input type='date' value={event.date} placeholder='Date'/>
                <input type='time' value={event.timer} placeholder='Time'/>
                <input type='text' value={event.description} placeholder='Description'/>
                <input type='text' value={event.address} placeholder='Street Address'/>
                <input type='text' value={event.city} placeholder='City'/>
                <input type='text' value={event.state} placeholder='State'/>
                <button>Submit</button>
            </fieldset>
        </form>
    )
}