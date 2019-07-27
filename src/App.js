import React from 'react';
import { useStateValue } from './hooks/useStateValue'
import { PrivateRoute } from './utils/PrivateRoute'

function App() {
    const [{login, data}, dispatch] = useStateValue()
    console.log(login, data)
    return (
        <div className="App">
            <PrivateRoute path='/test' redirectURL='/home' />
        </div>
    );
}

export default App;
