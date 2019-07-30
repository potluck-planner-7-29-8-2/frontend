import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { getEvent } from "../actions";
import { useStateValue } from "../hooks/useStateValue";

const EventPage = ({ match }) => {
  let eventID = match.params.eventID;
  const [{ event }, dispatch] = useStateValue();

  useEffect(() => {
    getEvent(dispatch, eventID);
  }, [dispatch, eventID]);

  return (
    <div>
      Event Page
      <h2>Event Name: {event.data.event_name}</h2>
    </div>
  );
};

export default withRouter(EventPage);
