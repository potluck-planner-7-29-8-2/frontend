import React from "react";
import { useStateValue } from "./hooks/useStateValue"; //must import this custom hook in any component that needs to either 1. access a value from the global state OR 2. dispatch an action to change the global state
import { PrivateRoute } from "./utils/PrivateRoute"; //import to create a PrivateRoute - user can not get to that path unless logged in
import TestComponent from "./components/TestComponent";
import SignUp from "./components/SignUp";
import Login from './components/Login';
import AddEvent from './components/AddEvent';

function App() {
  const [{ login }, dispatch] = useStateValue();
  // In order to access or update the state, use this custom hook. It will return the state and the dispatch function (which sends the action to the reducer to update state)
  //You can destructure the state so you only get the parts you need. Currently I have two states, login and data. This will change as we go. So you can just do this:
  //              const[{login}, dispatch] = useStateValue()

  return (
    <div className="App">
      {/* <PrivateRoute path='/test' redirectURL='/home' component={SomeComponent}/>  
                When using PrivateRoute, you need to give it the protected path, the path 
                you want the user to be redirected to, and the component you want rendered*/}
                {/*<TestComponent />*/}
                <SignUp />
                <Login />
                <AddEvent />
        </div>
    );
}

export default App;
