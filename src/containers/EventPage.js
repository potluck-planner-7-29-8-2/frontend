import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { getEvent } from "../actions";
import { useStateValue } from "../hooks/useStateValue";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { addRecipe, removeGuest } from "../actions/specificEventActions";
import { claimRecipe } from "../actions/specificEventActions";
import { removeRecipe } from "../actions/specificEventActions";
import { deleteEvent } from "../actions/generalEventsActions";
import Guests from "../components/Guests";
import { NavLink } from "react-router-dom";
import moment from "moment";

import { Header, Icon, Container, Button, List, Card } from "semantic-ui-react";

const EventPage = ({ match, history }) => {
  let eventID = match.params.eventID;
  const { url } = match;
  const [{ event }, dispatch] = useStateValue();
  const [user_id] = useLocalStorage("user_id");
  const [createRecipe, setRecipe] = useState({ recipe_name: "" });
  useEffect(() => {
    getEvent(dispatch, eventID);
  }, [dispatch, eventID]);

  const recipeChangeHandler = e => {
    setRecipe({ recipe_name: e.target.value });
  };

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

  if (user_id === event.data.organizer_id) {
    //First case if for organizer, Second case is for guest
    return (
      <div style={{ fontFamily: "Poppins" }}>
        <Container textAlign="center">
          <Header as="h2" icon textAlign="center">
            <Icon name="calendar check" />
            {event.data.event_name}
          </Header>
        </Container>
        <Container textAlign="center">
          <List>
            <List.Item>
              <List.Icon name="calendar" />
              {moment(event.data.date).format("LL")}
            </List.Item>
            <List.Item>
              <List.Icon name="map marker" />
              {event.data.address}, {event.data.city}, {event.data.state}{" "}
            </List.Item>
            <List.Item>
              <List.Icon name="outline clock" />
              {event.data.time}
            </List.Item>
            <List.Item>
              <List.Icon name="newspaper outline" />
              {event.data.description}
            </List.Item>
            <NavLink to={`${url}/update`}>
              <Button color="twitter">Edit Event</Button>
            </NavLink>
            <Button
              color="twitter"
              icon
              onClick={e => {
                e.preventDefault();
                deleteEvent(dispatch, eventID);
                history.push("/dashboard");
              }}
            >
              <Icon name="trash alternate" />
            </Button>
          </List>
        </Container>
        <Card.Group>
          <div
            style={{
              margin: "auto",
              display: "flex",
              justifyContent: "space-around",
              width: "75%"
            }}
          >
            <Card>
              <List>
                {event.data.guests.map(guest => {
                  //Mapping over guests to display

                  if (guest.attending) {
                    return (
                      <List.Item key={guest.user_id} size="tiny">
                        {guest.full_name} - Attending{" "}
                        {guest.user_id === event.data.organizer_id ? null : (
                          <Icon
                            name="trash alternate"
                            onClick={() =>
                              removeGuest(dispatch, eventID, {
                                data: { user_id: guest.user_id }
                              })
                            }
                          />
                        )}
                      </List.Item>
                    );
                  } else {
                    return (
                      <List.Item key={guest.user_id}>
                        {guest.full_name} - Invited
                        <Icon
                          name="trash alternate"
                          onClick={() =>
                            removeGuest(dispatch, eventID, {
                              data: { user_id: guest.user_id }
                            })
                          }
                        />
                      </List.Item>
                    );
                  }
                })}
              </List>
            </Card>
            <Card>
              <List>
                {" "}
                <h2>Food to bring:</h2>
                {typeof event.data.recipes === "string" ? (
                  <List.Item>{event.data.recipes}</List.Item>
                ) : (
                  event.data.recipes.map(recipe => {
                    //Determine if Recipes is an array or string and return value
                    return (
                      <List.Item key={recipe.recipe_name}>
                        <div>
                          <h3>
                            {recipe.recipe_name} -{" "}
                            {recipe.full_name ? recipe.full_name : ""}
                          </h3>
                        </div>
                        {/* Toggling between the name and unclaimed */}
                        <Icon
                          size="large"
                          name={recipe.full_name ? "times" : "check"}
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
                        />
                        <Icon
                          name="trash alternate"
                          size="large"
                          onClick={event => {
                            event.preventDefault();
                            removeRecipe(dispatch, parseInt(eventID), {
                              data: { recipe_name: recipe.recipe_name }
                            });
                          }}
                        />
                      </List.Item>
                    );
                  })
                )}
                <form
                  onSubmit={e => {
                    addRecipe(dispatch, eventID, createRecipe); //Creates recipe
                    setRecipe({ recipe_name: "" });
                    e.preventDefault();
                  }}
                >
                  <input
                    type="text"
                    value={createRecipe.recipe_name}
                    placeholder="Recipe"
                    onChange={e => recipeChangeHandler(e)}
                  />
                  <Button size="mini" primary>
                    Add Recipe
                  </Button>
                </form>
              </List>
            </Card>
          </div>
        </Card.Group>

        <Container textAlign="center">
          <Guests eventID={eventID} />
        </Container>
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
                  return (
                    <li key={guest.user_id}>Attending: {guest.full_name} </li>
                  );
                } else {
                  return (
                    <li key={guest.user_id}>Invited: {guest.full_name}</li>
                  );
                }
              })}
            </ul>
          </li>
          <li>
            <ul>
              {" "}
              <h2>Food to bring:</h2>
              {typeof event.data.recipes === "string" ? (
                <li>{event.data.recipes}</li>
              ) : (
                event.data.recipes.map(recipe => {
                  //Determine if Recipes is an array or string and return value
                  return (
                    <li key={recipe.recipe_name}>
                      {recipe.recipe_name} :{" "}
                      {recipe.full_name ? recipe.full_name : ""}{" "}
                      {/* Toggling between the name and unclaimed */}
                      {!recipe.full_name || recipe.user_id === user_id ? (
                        <Button
                          onClick={e => {
                            e.preventDefault();
                            recipe.full_name && recipe.user_id === user_id
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
                          {recipe.full_name && recipe.user_id === user_id
                            ? "Unclaim Recipe"
                            : "Claim Recipe"}
                        </Button>
                      ) : null}
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
