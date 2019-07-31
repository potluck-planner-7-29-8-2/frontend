import React, { useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { useStateValue } from "../hooks/useStateValue";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getUsers } from "./../actions/usersActions";
import { deleteEvent } from "../actions/generalEventsActions";
import { Icon } from "semantic-ui-react";
import moment from "moment";
import {
  StyledEventCard,
  StyledCardHeader
} from "../styled_components/Dashboard/EventCard";

const EventCard = props => {
  const {
    event_name,
    organizer_id,
    date,
    time,
    city,
    state,
    event_id
  } = props.event;
  const { url } = props.match;
  const [{ users }, dispatch] = useStateValue();
  const [user_id] = useLocalStorage("user_id");

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);
  let username;
  users.data.forEach(user => {
    if (user.user_id === organizer_id) {
      username = user.username;
    }
  });

  return (
    <StyledEventCard>
      <div className="card-information">
        <NavLink to={`${url}/event/${event_id}`}>
          <StyledCardHeader>{event_name}</StyledCardHeader>{" "}
        </NavLink>
        <div className="card-organizer">Organized By: {username}</div>
        <div className="card-date">
          Date: {moment(date).format("LL")} Time: {time}
        </div>
        <div className="card-location">
          Location: {city}, {state}
        </div>
      </div>
      <div className="card-buttons">
        {user_id === organizer_id && (
          <button
            onClick={e => {
              e.preventDefault();
              deleteEvent(dispatch, event_id);
            }}
          >
            <i className="trash alternate icon" />
          </button>
        )}
      </div>
    </StyledEventCard>
  );
};

export default withRouter(EventCard);
