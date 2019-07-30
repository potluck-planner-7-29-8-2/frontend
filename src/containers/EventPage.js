import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { getEvent } from "../actions";
import { useStateValue } from "../hooks/useStateValue";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { addRecipe } from "../actions/specificEventActions";
import { claimRecipe } from "../actions/specificEventActions";
const EventPage = ({ match }) => {
  let eventID = match.params.eventID;
  const [{ event }, dispatch] = useStateValue();
  const [user_id] = useLocalStorage("user_id");
  const [createRecipe, setRecipe] = useState({ recipe_name: "" });
  useEffect(() => {
    getEvent(dispatch, eventID);
  }, [dispatch, eventID]);
  console.log(event);

  const recipeChangeHandler = e => {
    setRecipe({ recipe_name: e.target.value });
  };
  return (
    <div>
      Event Page
      <h2>Event Name: {event.data.event_name}</h2>
      <ul>
        <li>Address: {event.data.address}</li>
        <li>City: {event.data.city}</li>
        <li>State: {event.data.state}</li>
        <li>Time: {event.data.time}</li>
        <li>
          Description: <p>{event.data.description}</p>
        </li>
        <li>
          Guests:{" "}
          <ul>
            {event.data.guests.map(guest => {
              if (guest.attending) {
                return <li>{guest.full_name} </li>;
              } else {
                return <li>No guests attending</li>;
              }
            })}
          </ul>
        </li>
        <li>
          <ul>
            {" "}
            {event.data.recipes.map(recipe => {
              return (
                <li
                  onClick={e => {
                    e.preventDefault();
                    claimRecipe(dispatch, eventID, {
                      recipe_name: recipe.recipe_name,
                      user_id: user_id
                    });
                  }}
                >
                  {recipe.recipe_name}
                </li>
              );
            })}
            <form
              onSubmit={e => {
                addRecipe(dispatch, eventID, createRecipe);
                e.preventDefault();
              }}
            >
              <input
                type="text"
                value={createRecipe.recipe_name}
                placeholder="Recipe"
                onChange={e => recipeChangeHandler(e)}
              />
              <button>Add Recipe</button>
            </form>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(EventPage);
