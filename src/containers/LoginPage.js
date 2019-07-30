import React, {useEffect } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'

import LoginForm from '../components/LoginForm'
import styled from 'styled-components'

const LoginPage = (props) => {
    const [token, ] = useLocalStorage('token')
    
    useEffect(() => {
        if(token)
            props.history.push('/dashboard')
    }, [token, props.history]);

    return (
        <LoginContainer>
            <LoginForm />
            <NavLink to='/signup'>Sign Up</NavLink>
        </LoginContainer>
    )
}

export default withRouter(LoginPage)


const LoginContainer=styled.div`
    min-height: 100vh
    display: flex;
    justify-content: center;
    padding: 15px;
    background: #f2f2f2;
`