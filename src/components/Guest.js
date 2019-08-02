import React from "react";
import { claimRecipe } from "../actions/specificEventActions";
import moment from "moment";
import headerImg from "../brooke-lark-nTZOILVZuOg-unsplash.jpg";
import guestHeaderImg from "../priscilla-du-preez-W3SEyZODn8U-unsplash.jpg";
import {
    Header,
    Icon,
    Container,
    List,
    Card,
    Image
  } from "semantic-ui-react";

  const Guest = ({event, dispatch, eventID, eventTime, user_id}) => {
    return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontFamily: "Poppins"
          }}
        >
          <Container textAlign="center">
            <Header as="h2" icon textAlign="center" style={{ fontSize: "3rem" }}>
              <Icon name="calendar check" />
              {event.data.event_name}
            </Header>
          </Container>
          <Container textAlign="center">
            <List style={{ fontSize: "2rem" }}>
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
                {`${eventTime}`}
              </List.Item>
              <List.Item>
                <List.Icon name="newspaper outline" />
                {event.data.description}
              </List.Item>
            </List>
          </Container>
          <Card.Group centered style={{ margin: "30px" }}>
            <Card style={{ padding: "20px" }}>
              <Card.Header textAlign="center" style={{ fontSize: "2.5rem" }}>
                <Image src={guestHeaderImg} size="large" />
                Guests
              </Card.Header>
              <Card.Content>
                <List style={{ margin: "auto" }}>
                  {event.data.guests.map(guest => {
                    //Mapping over guests to display
  
                    if (guest.attending) {
                      return (
                        <List.Item
                          key={guest.user_id}
                          style={{ fontSize: "2rem" }}
                        >
                          {guest.full_name} - Attending{" "}
                        </List.Item>
                      );
                    } else {
                      return (
                        <List.Item
                          key={guest.user_id}
                          style={{ fontSize: "2rem" }}
                        >
                          {guest.full_name} - Invited
                        </List.Item>
                      );
                    }
                  })}
                </List>
              </Card.Content>
            </Card>
            <Card style={{ padding: "20px" }}>
              <Card.Header textAlign="center" style={{ fontSize: "2.5rem" }}>
                <Image
                  src={headerImg}
                  style={{ height: "166.66px", width: "250px" }}
                />
                Choose a Dish
              </Card.Header>
              <Card.Content>
                <List style={{ margin: "auto" }}>
                  {" "}
                  {typeof event.data.recipes === "string" ? (
                    <List.Item>{event.data.recipes}</List.Item>
                  ) : (
                    event.data.recipes.map(recipe => {
                      //Determine if Recipes is an array or string and return value
                      return (
                        <List.Item
                          key={recipe.recipe_name}
                          style={{ fontSize: "2rem" }}
                        >
                          <div>
                          {!recipe.full_name || recipe.user_id === user_id ? (
                            <Icon
                              size="small"
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
                          ) : null}
                            {recipe.recipe_name} -{" "}
                            {recipe.full_name ? recipe.full_name : ""}
                          </div>
                          {/* Toggling between the name and unclaimed */}
                         
                        </List.Item>
                      );
                    })
                  )}
                </List>
              </Card.Content>
            </Card>
          </Card.Group>
        </div>
      );
  }

  export default Guest;