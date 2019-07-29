import React from "react";

const EventCard = props => {
  const { organizer_id, event_name, date, time, city, state } = props;

  console.log(props);
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
