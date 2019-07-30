import React, { useState } from "react";
import { useStateValue } from "../hooks/useStateValue";
import { addGuest } from "../actions/specificEventActions";
const Guests = props => {
  const [userSearch, setUserSearch] = useState("");
  const [displayedUsers, setDisplayedUsers] = useState([]);

  const [{ users }, dispatch] = useStateValue();

  const searchHandler = event => {
    setUserSearch(event.target.value);
  };

  const userCompare = toCompare => {
    let searchGuests = users.data;
    searchGuests = searchGuests.filter(
      user => user.full_name.toLowerCase() === toCompare.toLowerCase()
    );
    setDisplayedUsers(searchGuests);
  };

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          userCompare(userSearch);
          console.log(displayedUsers);
        }}
      >
        <input
          value={userSearch}
          placeholder="Search users"
          onChange={event => searchHandler(event)}
        />
      </form>
      <ul>
        {displayedUsers.map(user => {
          return (
            <li key={user.user_id}>
              {user.full_name}
              <button
                onClick={e => {
                  e.preventDefault();
                  addGuest(dispatch, props.eventID, {
                    user_id: user.user_id,
                    attending: true
                  });
                }}
              >
                Invite
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Guests;
