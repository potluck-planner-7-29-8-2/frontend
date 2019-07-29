import React, {useState} from 'react';
import { useStateValue } from '../hooks/useStateValue';
import { addEvent } from '../actions';
import { useLocalStorage } from '../hooks/useLocalStorage';
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

    const [{events},dispatch] = useStateValue();
    console.log(events)
    const [user_id,] = useLocalStorage('user_id')

    const eventInputHandler = e => {
        console.log(typeof user_id)
        const name = e.target.name;
        console.log(name)
        const value = e.target.value;
        console.log(value)
        setEvent( {...event, [name]: value } );
      };

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            addEvent(dispatch, user_id ,event)
        }}>
            <fieldset>
                <legend>Add Event</legend>
                <input name="event_name" type='text' value={event.event_name} onChange={(event) => eventInputHandler(event)} placeholder='Event Name'/>
                <input name="date" type='date' value={event.date} onChange={(event) => eventInputHandler(event)}/>
                <input name="time" type='time' value={event.time} onChange={(event) => eventInputHandler(event)}/>
                <input name="description" type='text' value={event.description} onChange={(event) => eventInputHandler(event)} placeholder='Description'/>
                <input name="address" type='text' value={event.address} onChange={(event) => eventInputHandler(event)} placeholder='Street Address'/>
                <input name="city" type='text' value={event.city} onChange={(event) => eventInputHandler(event)} placeholder='City'/>
                <input name="state" type='text' value={event.state} onChange={(event) => eventInputHandler(event)} placeholder='State'/>
                <button>Submit</button>
            </fieldset>
        </form>
    )
}

export default AddEvent;