import React, { useState } from "react";
import { signUpAction } from "../actions";
import { useStateValue } from "../hooks/useStateValue";
import { Form, Icon, Input } from "semantic-ui-react";

const SignUpForm = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        full_name: "",
        email: ""
    });
    const [{signUp}, dispatch] = useStateValue();
  
    const userInputHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
        setUser({ ...user, [name]: value });
    };

    return (
        <Form
            onSubmit={e => {
                e.preventDefault();
                signUpAction(dispatch, user);
                setUser({
                    username: "",
                    password: "",
                    full_name: "",
                    email: ""
                })
            }}
        >
            <Form.Input
                label="Username"
                name="username"
                type="text"
                onChange={event => userInputHandler(event)}
                value={user.username}
                placeholder="Username"
            />
            <Form.Input
                label="Enter Password"
                name="password"
                type="password"
                onChange={event => userInputHandler(event)}
                value={user.password}
                placeholder="Password"
            />
            <Form.Input
                label="Enter Full Name"
                name="full_name"
                type="text"
                onChange={event => userInputHandler(event)}
                value={user.full_name}
                placeholder="Full Name"
            />
            <Form.Input
                iconPosition="left"
                icon="at"
                label="Enter E-Mail"
                name="email"
                type="email"
                onChange={event => userInputHandler(event)}
                value={user.email}
                placeholder="E-Mail"
            />
            <button disabled={signUp.isSignUpLoading} type="submit">Sign Up</button>
        </Form>
    );
};

export default SignUpForm;
