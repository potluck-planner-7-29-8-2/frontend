import React from "react";
import { NavLink, withRouter } from 'react-router-dom'

const EventCard = props => {
    const { username, event_name, date, time, city, state, event_id } = props.event;
    const {url} = props.match
    return (
        <div className="EventCard">
            <NavLink to={`${url}/event/${event_id}`}><h2>{event_name}</h2></NavLink>
            <div className="card-organizer">Organized By: {username} </div>
            <div className="card-date">
                Date: {date} Time: {time}
            </div>
            <div className="card-location">
                Location: {city}, {state}
            </div>
        </div>
    );
};

export default withRouter(EventCard);
