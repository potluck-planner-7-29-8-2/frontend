import React, { useState, useEffect } from "react";
import { useStateValue } from "../hooks/useStateValue";
import { updateEvent } from "../actions";
import { Icon, Input } from "semantic-ui-react";
import { getEvent } from "../actions";
import moment from "moment";


const UpdateEventForm = props => {
  const [editEvent, setEvent] = useState({
    event_name: "",
    date: "",
    time: "",
    description: "",
    address: "",
    city: "",
    state: ""
  });

  const [{ event }, dispatch] = useStateValue();
  let eventID = props.match.params.eventID;

  useEffect(() => {
    getEvent(dispatch, eventID);
    const date = moment().format('MM/DD/YYYY', event.data.date);
    setEvent({...event.data, date: date});
  }, [dispatch, eventID]);

  const eventInputHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    setEvent({ ...editEvent, [name]: value });
  };

  return (
    <div>
      <h2>Event Name: {editEvent.event_name}</h2>
      <ul>
        <li>Date: {editEvent.date}</li>
        <li>Address: {editEvent.address}</li>
        <li>City: {editEvent.city}</li>
        <li>State: {editEvent.state}</li>
        <li>Time: {editEvent.time}</li>
        <li>
          Description: <p>{editEvent.description}</p>
        </li>
      </ul>
      <form
        onSubmit={e => {
          e.preventDefault();
          updateEvent(dispatch, eventID, {
            event_name: editEvent.event_name,
            date: editEvent.date,
            time: editEvent.time,
            description: editEvent.description,
            address: editEvent.address,
            city: editEvent.city,
            state: editEvent.state
          });
          setEvent({
            event_name: "",
            date: "",
            time: "",
            description: "",
            address: "",
            city: "",
            state: ""
          });
          props.history.push(`/dashboard/event/${eventID}`);
        }}
      >
        <fieldset>
          <legend>Update Event</legend>
          <Input
            name="event_name"
            type="text"
            value={editEvent.event_name}
            onChange={event => eventInputHandler(event)}
            placeholder="Event Name"
          />
          <Input
            name="date"
            type="date"
            value={editEvent.date}
            onChange={event => eventInputHandler(event)}
          />
          <Input
            name="time"
            type="time"
            value={editEvent.time}
            onChange={event => eventInputHandler(event)}
          />
          <Input
            name="description"
            type="text"
            value={editEvent.description}
            onChange={event => eventInputHandler(event)}
            placeholder="Description"
          />
          <Input
            name="address"
            type="text"
            value={editEvent.address}
            onChange={event => eventInputHandler(event)}
            placeholder="Street Address"
          />
          <Input
            name="city"
            type="text"
            value={editEvent.city}
            onChange={event => eventInputHandler(event)}
            placeholder="City"
          />
          <Input
            name="state"
            type="text"
            value={editEvent.state}
            onChange={event => eventInputHandler(event)}
            placeholder="State"
          />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default UpdateEventForm;
