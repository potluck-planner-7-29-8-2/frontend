import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom'

import { loginAction } from "../actions/loginActions";
import { useStateValue } from "../hooks/useStateValue";

const LoginForm = (props) => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    const [{ login }, dispatch] = useStateValue(); 
    
    useEffect(() => {
        if(login.isLoggedIn) {
            props.history.push('/dashboard');
        }
    }, [login, props.history])

    function handleChange(event) {
        const updatedUser = { ...user, [event.target.name]: event.target.value };
        setUser(updatedUser);
    }

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                loginAction(dispatch, user)
            }}
        >
            <fieldset>
                <legend>Login</legend>
                <div className="form-group row">
                    Username:
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        value={user.username}
                        onChange={handleChange}
                    />  
                </div>
                <div className="form-group row">
                    Password:
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={user.password}
                        onChange={handleChange}
                    />
                </div>
                <button disabled={login.isLoginLoading} type="submit">Login</button> 
            </fieldset>
        </form>
    );
};

export default withRouter(LoginForm)
