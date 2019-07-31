import React, { useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { useStateValue } from "../hooks/useStateValue";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getUsers } from "./../actions/usersActions";
import { deleteEvent, getEvents } from "../actions/generalEventsActions";
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
          {/*if a user is the organizer, only show delete button*/}
          {user_id === organizer_id && (
            <button
              onClick={e => {
                e.preventDefault();
                deleteEvent(dispatch, event_id);
              }}
              alt="Delete"
            >
              <i className="trash alternate icon" />
            </button>
          )}

          {/*if a user isnt the organizer, show option to accept/decline. If accept, show option to leave */}
          {user_id !== organizer_id ? (
            props.event.attending ? (
              <button
                onClick={() =>
                  removeGuest(dispatch, event_id, {
                    data: { user_id: user_id }
                  }).then(res => getEvents(dispatch, user_id))
                }
                alt="Leave"
              >
                Leave Event
              </button>
            ) : (
              <div>
                <button
                  onClick={() => {
                    changeAttendance(dispatch, event_id, user_id, {
                      attending: true
                    }).then(res => getEvents(dispatch, user_id));
                  }}
                  alt="Accept"
                >
                  <i className="check icon" />
                </button>
                <button
                  onClick={() =>
                    removeGuest(dispatch, event_id, {
                      data: { user_id: user_id }
                    }).then(res => getEvents(dispatch, user_id))
                  }
                  alt="Decline"
                >
                  <i className="close icon" />
                </button>
              </div>
            )
          ) : null}
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
