import React, { useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { useStateValue } from "../hooks/useStateValue";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getUsers } from "./../actions/usersActions";
import { OrganizerButtons, GuestButtons } from "./Buttons";
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
          {/*organizers see delete, guests see option to accept, decline, or leave*/}
          {user_id === organizer_id ? (
            <OrganizerButtons event={props.event} dispatch={dispatch} />
          ) : (
            <GuestButtons
              event={props.event}
              dispatch={dispatch}
              user_id={user_id}
            />
          )}
        </CardButtons>
      </CardTop>
      <CardDetails>
        <CardCol>
          <div className="card-organizer">
            <span className="card-field">Organized By:</span> {username}
          </div>
          <div className="card-location">
            <span className="card-field">Location:</span> {city}, {state}
          </div>
        </CardCol>
        <CardCol>
          <div className="card-date">
            <span className="card-field">Date:</span>{" "}
            {moment(date).format("LL")}
          </div>
          <div className="card-time">
            <span className="card-field">Time:</span> {time}
          </div>
        </CardCol>
      </CardDetails>
    </StyledEventCard>
  );
};

export default withRouter(EventCard);
