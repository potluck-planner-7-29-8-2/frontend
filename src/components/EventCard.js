import React, { useState } from "react";
import { useStateValue } from "./../hooks/useStateValue";

const EventCard = props => {
  const { users, organizer_id, event_name, date, time, city, state } = props;

  const [{ event }, dispatch] = useStateValue();
  console.log(event);

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
