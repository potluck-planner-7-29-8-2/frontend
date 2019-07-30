import React, { useState, useEffect } from 'react';
import { getUsers } from '../actions/usersActions';
import { useStateValue } from '../hooks/useStateValue';
const Guests = () => {
    const [ userSearch, setUserSearch] = useState('');
    const [displayedUsers, setDisplayedUsers] = useState([]);

    const [{users}, dispatch] = useStateValue();

    const searchHandler = (event) => {
        setUserSearch(event.target.value);
    }

  const userCompare = (toCompare) => {
    const searchGuests = users.data;
    searchGuests.map(user => {
        console.log(displayedUsers)
        if(user.full_name.toLowerCase() === toCompare.toLowerCase()) {
            console.log(user)
            return  setDisplayedUsers([...displayedUsers, user])
        } 
        return displayedUsers;
    })
  }
    
    return (
        <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            getUsers(dispatch)
            userCompare(userSearch)
            console.log(users.data)
        }}>
        <input value={userSearch} placeholder='Search users' onChange={(event) => searchHandler(event)}/>
        </form>
        <ul>{displayedUsers.map(user => {
            return <li key={user.user_id}>{user.full_name}</li>
        })}</ul>
        </div>
    )
}

export default Guests;