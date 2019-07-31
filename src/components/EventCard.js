import React, { useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { useStateValue } from "../hooks/useStateValue";
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
    event_id,
    history
  } = props.event;
  const { url } = props.match;
  const [{ users }, dispatch] = useStateValue();

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
      <div className="card-buttons">
        <button
          onClick={e => {
            e.preventDefault();
            deleteEvent(dispatch, event_id);
          }}
        >
          <i class="trash alternate icon" />
        </button>
      </div>
    </StyledEventCard>
  );
};

export default withRouter(EventCard);
