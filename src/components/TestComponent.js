import React, { useEffect } from 'react'
import { loginAction, getUsers, getEvents } from '../actions'
import {useStateValue} from '../hooks/useStateValue'
import { useLocalStorage } from '../hooks/useLocalStorage'

const TestComponent = () => {
    const [{users, events, login, signUp, event}, dispatch] = useStateValue()
    const [user_id,] = useLocalStorage('user_id')

    useEffect(() => {
        getUsers(dispatch)
        getEvents(dispatch, user_id)
    }, [dispatch]);
    return (
        <div>
            <button onClick = {() => loginAction(dispatch, {'username': 'ehickey', 'password': '123'} )}>Login</button>    
           
        </div>
    )
}

export default TestComponent
