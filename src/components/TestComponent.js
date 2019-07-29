import React, { useEffect } from 'react'
import { loginAction, signUpAction, getUsers, getEvents, addEvent } from '../actions'
import {useStateValue} from '../hooks/useStateValue'
import { useLocalStorage } from '../hooks/useLocalStorage'

const TestComponent = () => {
    const [{data, login, signUp, event}, dispatch] = useStateValue()
   const [user_id,] = useLocalStorage('user_id')
   console.log(data)
    useEffect(() => {
        getUsers(dispatch)
        getEvents(dispatch, user_id)
    }, [dispatch]);
    return (
        <div>
            <button onClick = {() => loginAction(dispatch, {'username': 'ehickey', 'password': '123'} )}>Login</button>    
            <button onClick ={() => signUpAction(dispatch, {'username': 'ehickey2', 'password': '123', 'full_name': 'Ethan Hickey', 'email': 'test@gmail.com'})}>Sign Up</button>
            <button onClick = {() => addEvent(dispatch, user_id, {event_name: 'Test', date: '10/6/2019', time: '12:00', description: 'testing', address: '123 test', city: 'Test', state: 'test city' })}>Add Event</button>
        </div>
    )
}

export default TestComponent
