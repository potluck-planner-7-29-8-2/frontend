import React, { useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { useStateValue } from "../hooks/useStateValue";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getUsers } from "./../actions/usersActions";
import { deleteEvent } from "../actions/generalEventsActions";
import { Icon } from "semantic-ui-react";
import { changeAttendance, removeGuest } from "../actions/specificEventActions";
import moment from "moment";
import {
  StyledEventCard,
  StyledCardHeader,
  CardTop,
  CardDetails,
  CardCol,
  CardButtons
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
  }, [props.event, dispatch]);

  let username;
  users.data.forEach(user => {
    if (user.user_id === organizer_id) {
      username = user.username;
    }
  });

  return (
    <StyledEventCard>
      <CardTop>
        <NavLink to={`${url}/event/${event_id}`}>
          <StyledCardHeader>{event_name}</StyledCardHeader>{" "}
        </NavLink>

        <CardButtons>
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

          {props.event.attending ? (
            <button
              onClick={() =>
                removeGuest(dispatch, event_id, { data: { user_id: user_id } })
              }
            >
              Leave Event
            </button>
          ) : (
            <button
              onClick={() => {
                changeAttendance(dispatch, event_id, user_id, {
                  attending: true
                });
                console.log(event_id);
              }}
            >
              Accept Invite
            </button>
          )}
          {props.event.attending ? null : (
            <button
              onClick={() =>
                removeGuest(dispatch, event_id, { data: { user_id: user_id } })
              }
            >
              Decline
            </button>
          )}
        </CardButtons>
      </CardTop>
      <CardDetails>
        <CardCol>
          <div className="card-organizer">Organized By: {username}</div>
          <div className="card-location">
            Location: {city}, {state}
          </div>
        </CardCol>
        <CardCol>
          <div className="card-date">Date: {moment(date).format("LL")}</div>
          <div className="card-time">Time: {time}</div>
        </CardCol>
      </CardDetails>
    </StyledEventCard>
  );
};

export default withRouter(EventCard);
