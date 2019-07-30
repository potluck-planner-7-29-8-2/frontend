<<<<<<< HEAD
import React, { useEffect } from "react";
=======
import React, { useState, useEffect } from "react";
import Event from "../components/Event";
>>>>>>> cc1258a95b678e33e06b57ea937a3dc90180d76c
import AddEvent from "../components/AddEvent";
import { getEvents } from "../actions/generalEventsActions";
import { useStateValue } from "../hooks/useStateValue";
import { useLocalStorage } from "../hooks/useLocalStorage";
<<<<<<< HEAD

const EventList = () => {
  const [{ events }, dispatch] = useStateValue();
  const [user_id] = useLocalStorage("user_id");

  console.log('events', events);
  useEffect(() => {
    console.log('events', events);
    getEvents(dispatch, user_id);
  }, [dispatch]);
=======
/*{
    "event_name": "",
    "date": "",
    "time": "",
    "description": "",
    "address": "",
    "city": "",
    "state": ""
}*/

/*export const getEvents = (dispatch, id) => {
    dispatch({type: GETTING_EVENTS})
    axiosWithAuth()
        .get(`/users/${id}/events`)
        .then(res => {
            dispatch({type: GOT_EVENTS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: EVENTS_ERROR, payload: err.response.data.message})
        })
}*/

const EventList = () => {
  const [eventList, setEventList] = useState([]);
  const [{ events }, dispatch] = useStateValue();
  const [user_id] = useLocalStorage("user_id");
  console.log(eventList);
  //console.log(getEvents(dispatch, user_id))

  useEffect(() => {
    setEventList(events.data);
  }, [events]);
>>>>>>> cc1258a95b678e33e06b57ea937a3dc90180d76c

  return (
    <div>
      <h1>Events</h1>
      <AddEvent />
    </div>
  );
};

export default EventList;
