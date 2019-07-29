import React, { useState } from "react";
import { useStateValue } from "./../hooks/useStateValue";
import { useLocalStorage } from "./../hooks/useLocalStorage";

const EventCard = props => {
  const { users, organizer_id, event_name, date, time, city, state } = props;

  const [{ events }, dispatch] = useStateValue();
  console.log(events);
  const [user_id] = useLocalStorage("user_id");

  return (
    <div className="EventCard">
      <h2>{event_name}</h2>
      <div className="card-organizer">Organized By: </div>
      <div className="card-date">
        Date: {date} Time: {time}
      </div>
      <div className="card-location">
        Location: {city}, {state}
      </div>
      <div />
    </div>
  );
};

export default EventCard;
