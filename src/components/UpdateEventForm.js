import React, { useState, useEffect } from "react";
import { useStateValue } from "../hooks/useStateValue";
import { updateEvent } from "../actions";
import { Input } from "semantic-ui-react";
import { getEvent } from "../actions";
import moment from "moment";
import { StyledEventForm, StyledInput, UpdateContainer, UpdateLeftColumn } from '../styled_components'

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
    getEvent(dispatch, eventID)
        .then(res => {
            const date = moment(res.data.date).format('YYYY-MM-DD');
            setEvent({...res.data, date: date});
        })
  }, [dispatch, eventID]);

  const eventInputHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    setEvent({ ...editEvent, [name]: value });
  };

  return (
    <UpdateContainer>
        <UpdateLeftColumn>
            <h2><span>Event Name:</span> {editEvent.event_name}</h2>
                <li><span>Date:</span> {editEvent.date}</li>
                <li><span>Address:</span> {editEvent.address}</li>
                <li><span>City:</span> {editEvent.city}</li>
                <li><span>State:</span> {editEvent.state}</li>
                <li><span>Time:</span> {editEvent.time}</li>
                <li><span>
                Description:</span> {editEvent.description}
                </li>
        </UpdateLeftColumn>
      <StyledEventForm style={{width: '550px', margin: '0px'}}
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
          <legend>Update Event</legend>
          <StyledInput
            required
            name="event_name"
            type="text"
            value={editEvent.event_name}
            onChange={event => eventInputHandler(event)}
            placeholder="Event Name"
          />
          <StyledInput
            required
            name="date"
            type="date"
            value={editEvent.date}
            onChange={event => eventInputHandler(event)}
          />
          <StyledInput
            required
            name="time"
            type="time"
            value={editEvent.time}
            onChange={event => eventInputHandler(event)}
          />
          <StyledInput
            required
            name="description"
            type="text"
            value={editEvent.description}
            onChange={event => eventInputHandler(event)}
            placeholder="Description"
          />
          <StyledInput
            required
            name="address"
            type="text"
            value={editEvent.address}
            onChange={event => eventInputHandler(event)}
            placeholder="Street Address"
          />
          <StyledInput
            required
            name="city"
            type="text"
            value={editEvent.city}
            onChange={event => eventInputHandler(event)}
            placeholder="City"
          />
          <StyledInput
            required
            name="state"
            type="text"
            value={editEvent.state}
            onChange={event => eventInputHandler(event)}
            placeholder="State"
          />
          <button type="submit">Submit</button>
      </StyledEventForm>
    </UpdateContainer>
  );
};

export default UpdateEventForm;
