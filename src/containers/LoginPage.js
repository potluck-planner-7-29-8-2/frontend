import React, {useEffect } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'

import LoginForm from '../components/LoginForm'

const LoginPage = (props) => {
    const [token, ] = useLocalStorage('token')
    
    useEffect(() => {
        if(token)
            props.history.push('/dashboard')
    }, [token, props.history]);

    return (
        <>
            <LoginForm />
            <NavLink to='/signup'>Sign Up</NavLink>
        </>
    )
}

export default withRouter(LoginPage)
