import React, { useState } from "react";

const EventCard = props => {
  const { username, event_name, date, time, city, state } = props;

  return (
    <div className="EventCard">
      <h2>{event_name}</h2>
      <div className="card-organizer">Organized By: {username} </div>
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
