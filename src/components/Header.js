import React from 'react'
import { NavLink } from 'react-router-dom'
import { logout } from '../actions';
import { useStateValue } from '../hooks/useStateValue'

const Header = () => {
    const [, dispatch] = useStateValue()
    return (
        <>
            HEADER
            <NavLink to='/dashboard/addEvent' >Add New Event</NavLink>
            <NavLink to='/dashboard' >Home</NavLink>
            <NavLink to='/' onClick={() => logout(dispatch)}>Log Out</NavLink>
        </>
    )
}

export default Header
