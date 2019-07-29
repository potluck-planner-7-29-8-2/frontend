import React, { useEffect } from 'react'
import { loginAction } from '../actions'
import {useStateValue} from '../hooks/useStateValue'


const TestComponent = () => {
    const [{data, login, signUp, event}, dispatch] = useStateValue()
   
    return (
        <div>
            <button onClick = {() => loginAction(dispatch, {'username': 'ehickey', 'password': '123'} )}>Login</button>    
        </div>
    )
}

export default TestComponent
