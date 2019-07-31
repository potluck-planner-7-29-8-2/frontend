import React, { useState } from "react";
import { useStateValue } from "../hooks/useStateValue";
import { addEvent } from "../actions";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Icon, Input } from "semantic-ui-react";

const AddEventForm = props => {
  const [event, setEvent] = useState({
    event_name: "",
    date: "",
    time: "",
    description: "",
    address: "",
    city: "",
    state: ""
  });

  const [, dispatch] = useStateValue();
  const [user_id] = useLocalStorage("user_id");

  const eventInputHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    setEvent({ ...event, [name]: value });
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        addEvent(dispatch, user_id, event);
        setEvent({
          event_name: "",
          date: "",
          time: "",
          description: "",
          address: "",
          city: "",
          state: ""
        });
        props.history.push('/dashboard');
      }}
    >
      <fieldset>
        <legend>Add Event</legend>
        <Input
          name="event_name"
          type="text"
          value={event.event_name}
          onChange={event => eventInputHandler(event)}
          placeholder="Event Name"
        />
        <Input
          name="date"
          type="date"
          value={event.date}
          onChange={event => eventInputHandler(event)}
        />
        <Input
          name="time"
          type="time"
          value={event.time}
          onChange={event => eventInputHandler(event)}
        />
        <Input
          name="description"
          type="text"
          value={event.description}
          onChange={event => eventInputHandler(event)}
          placeholder="Description"
        />
        <Input
          name="address"
          type="text"
          value={event.address}
          onChange={event => eventInputHandler(event)}
          placeholder="Street Address"
        />
        <Input
          name="city"
          type="text"
          value={event.city}
          onChange={event => eventInputHandler(event)}
          placeholder="City"
        />
        <Input
          name="state"
          type="text"
          value={event.state}
          onChange={event => eventInputHandler(event)}
          placeholder="State"
        />
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
};

export default AddEventForm;
