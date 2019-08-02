import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { getEvent } from "../actions";
import { useStateValue } from "../hooks/useStateValue";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { claimRecipe } from "../actions/specificEventActions";
import moment from "moment";
import Organizer from '../components/Organizer';
import Guest from '../components/Guest'


const Event = ({ match, history }) => {
  let eventID = match.params.eventID;
  const { url } = match;
  const [{ event }, dispatch] = useStateValue();
  const [user_id] = useLocalStorage("user_id");
  useEffect(() => {
    getEvent(dispatch, eventID);
  }, [dispatch, eventID]);

 

  useEffect(() => {
    const guests = event.data.guests;
    if (typeof event.data.recipes !== "string") {
      event.data.recipes.forEach(recipe => {
        let includes = false;
        guests.forEach(guest => {
          if (guest.user_id === recipe.user_id) {
            includes = true;
          }
        });
        if (includes === false) {
          claimRecipe(dispatch, eventID, {
            recipe_name: recipe.recipe_name,
            user_id: null
          });
        }
      });
    }
  }, [event.data.guests]);

  const eventTime = moment(event.data.time, "HH:mm:ss a").format("LT");

  if (user_id === event.data.organizer_id) {
    //First case if for organizer, Second case is for guest
   return( <Organizer event={event} url={url} dispatch={dispatch} eventTime={eventTime} eventID={eventID} user_id={user_id} history={history}/> )
    
  } else {
    return (<Guest event={event} dispatch={dispatch} eventTime={eventTime} eventID={eventID} user_id={user_id}/>)
  }
};

export default withRouter(Event);
