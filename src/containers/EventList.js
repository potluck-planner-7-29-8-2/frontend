import React, { useEffect } from "react";
import AddEvent from "../components/AddEvent";
import { getEvents } from "../actions/generalEventsActions";
import { useStateValue } from "../hooks/useStateValue";
import { useLocalStorage } from "../hooks/useLocalStorage";

const EventList = () => {
  const [{ events }, dispatch] = useStateValue();
  const [user_id] = useLocalStorage("user_id");

  console.log('events', events);
  useEffect(() => {
    console.log('events', events);
    getEvents(dispatch, user_id);
  }, [dispatch]);

  return (
    <div>
      <h1>Events</h1>
      <AddEvent />
    </div>
  );
};

export default EventList;
