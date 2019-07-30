import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom'

import { loginAction } from "../actions/loginActions";
import { useStateValue } from "../hooks/useStateValue";

import styled from 'styled-components'

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
        <FormContainer>
        <Form
            onSubmit={e => {
                e.preventDefault();
                loginAction(dispatch, user)
            }}
        >
            <fieldset>
                <legend>Login</legend>
                <div className="form-group row">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        required
                        value={user.username}
                        onChange={handleChange}
                    />  
                </div>
                <div className="form-group row">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        required
                        value={user.password}
                        onChange={handleChange}
                    />
                </div>
                <LoginButton disabled={login.isLoginLoading} type="submit">Login</LoginButton> 
            </fieldset>
        </Form>
        </FormContainer>
    );
};

export default withRouter(LoginForm)

const FormContainer = styled.div`
    width: 390px;
    background: #fff;
    border-radius: 10px;
    padding: 77px 55px 33px;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
`
const Form = styled.form`
    width: 400px;
    height: 300px;
    margin: 20px auto 0;


    label {
        display: inline-block;
        margin-left: 20px;
        padding-top: 10px;
        font-size: ${({theme}) => theme.mediumFont}
    }

    input {
        outline; none;
        font-size: ${({theme}) => theme.mediumFont}
        padding-left: 10px;
        margin: 12px 10px 10px 18px;
        width: 290px;
        height: 35px;
    }
`
const LoginButton = styled.button`
    margin: 0 auto;
    width: 80px;
    height: 30px;
`