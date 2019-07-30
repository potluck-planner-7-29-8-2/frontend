import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { getEvent } from "../actions";
import { useStateValue } from "../hooks/useStateValue";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { addRecipe } from "../actions/specificEventActions";
import { claimRecipe } from "../actions/specificEventActions";
import { removeRecipe } from "../actions/specificEventActions";

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

  // //need it to be {'recipe_name': ''}
  //  export const removeRecipe = (dispatch, id, recipe) => {
  //     dispatch({ type: REMOVING_RECIPE });
  //     axiosWithAuth()
  //       .delete(`/events/${id}/recipes`, recipe)
  //       .then(res => {
  //         dispatch({ type: REMOVED_RECIPE, payload: res.data });
  //       })
  //       .catch(err => {
  //         dispatch({
  //           type: REMOVE_RECIPE_ERROR,
  //           payload: err.response.data.message
  //         });
  //       });
  //   };

  if (user_id === event.data.organizer_id) {
    //First case if for organizer, Second case is for guest
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
                //Mapping over guests to display
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
              {typeof event.data.recipes === "string" ? (
                <li>{event.data.recipes}</li>
              ) : (
                event.data.recipes.map(recipe => {
                  //Determine if Recipes is an array or string and return value
                  return (
                    <li>
                      {recipe.recipe_name} :{" "}
                      {recipe.full_name ? recipe.full_name : "unclaimed"}{" "}
                      {/* Toggling between the name and unclaimed */}
                      <button
                        onClick={e => {
                          e.preventDefault();
                          recipe.full_name
                            ? claimRecipe(dispatch, eventID, {
                                //Determine if a full_name is associated with recipe and return value, toggle between null and name to claim
                                recipe_name: recipe.recipe_name,
                                user_id: null
                              })
                            : claimRecipe(dispatch, eventID, {
                                recipe_name: recipe.recipe_name,
                                user_id: user_id
                              });
                        }}
                      >
                        Claim Recipe
                      </button>
                      <button
                        onClick={event => {
                          removeRecipe(dispatch, eventID, {
                            recipe_name: recipe.recipe_name
                          });
                          event.preventDefault();
                        }}
                      >
                        Delete Recipe
                      </button>
                    </li>
                  );
                })
              )}
              <form
                onSubmit={e => {
                  addRecipe(dispatch, eventID, createRecipe); //Creates recipe
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
  } else {
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
                //Mapping over guests to display
                if (guest.attending) {
                  let key = guest.full_name;
                  return <li>{guest.full_name} </li>;
                } else {
                  let key = event.data.id;
                  return <li>No guests attending</li>;
                }
              })}
            </ul>
          </li>
          <li>
            <ul>
              {" "}
              {typeof event.data.recipes === "string" ? (
                <li>{event.data.recipes}</li>
              ) : (
                event.data.recipes.map(recipe => {
                  //Determine if Recipes is an array or string and return value
                  return (
                    <li
                      onClick={e => {
                        e.preventDefault();
                        recipe.full_name
                          ? claimRecipe(dispatch, eventID, {
                              //Determine if a full_name is associated with recipe and return value, toggle between null and name to claim
                              recipe_name: recipe.recipe_name,
                              user_id: null
                            })
                          : claimRecipe(dispatch, eventID, {
                              recipe_name: recipe.recipe_name,
                              user_id: user_id
                            });
                      }}
                    >
                      {recipe.recipe_name} :{" "}
                      {recipe.full_name ? recipe.full_name : "unclaimed"}{" "}
                      {/* Toggling between the name and unclaimed */}
                    </li>
                  );
                })
              )}
            </ul>
          </li>
        </ul>
      </div>
    );
  }
};

export default withRouter(EventPage);
