import React from 'react'
import { NavLink } from 'react-router-dom'
import { useStateValue } from '../hooks/useStateValue'

import SignUpForm from '../components/SignUpForm'

const SignUpPage = () => {
    const [{signUp}] = useStateValue()
    
    return (
        <>
            {!signUp.isSignedUp 
                ? <SignUpForm />
                : <div>
                    <h2>Thank you for signing up!</h2>
                    <NavLink to='/'>Login Now</NavLink>
                </div>
            }
            {signUp.errorMessage && <h2>{signUp.errorMessage}</h2>}
        </>
    )
}

export default SignUpPage
