import React from 'react'
import {login} from '../actions'
import {useStateValue} from '../hooks/useStateValue'

const TestComponent = () => {
    const [state, dispatch] = useStateValue()
    console.log(state)
    return (
        <div>
            <button onClick = {() => login(dispatch, {'username': 'ehickey', 'password': '123'} )}>Test Function</button>    
        </div>
    )
}

export default TestComponent
