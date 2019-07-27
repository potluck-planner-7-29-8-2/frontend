import React from 'react';
import { useStateValue } from './hooks/useStateValue'

function App() {
    const [{login, data}, dispatch] = useStateValue()
    console.log(login, data)
    return (
        <div className="App">

        </div>
    );
}

export default App;
