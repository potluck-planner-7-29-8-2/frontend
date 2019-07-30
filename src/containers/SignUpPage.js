import React from 'react'
import { NavLink } from 'react-router-dom'
import { useStateValue } from '../hooks/useStateValue'

import SignUpForm from '../components/SignUpForm'
import { SignUpContainer } from '../styled_components'
const SignUpPage = () => {
    const [{signUp}] = useStateValue()
    
    return (
        <SignUpContainer>
            {!signUp.isSignedUp 
                ? <SignUpForm />
                : <div>
                    <h2>Thank you for signing up!</h2>
                    <NavLink to='/'>Login Now</NavLink>
                </div>
            }
            {signUp.errorMessage && <h2>{signUp.errorMessage}</h2>}
        </SignUpContainer>
    )
}

export default SignUpPage
