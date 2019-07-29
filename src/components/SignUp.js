import React, { useState } from "react";
import { signUpAction } from "../actions";
import { useStateValue } from "../hooks/useStateValue";
import { Form, Icon, Input } from "semantic-ui-react";

const SignUp = props => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    full_name: "",
    email: ""
  });

  const [{ signUp }, dispatch] = useStateValue();
  console.log(signUp);
  const userInputHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [name]: value });
  };
  return (
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault();
          signUpAction(dispatch, user);
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
          Icon="at"
          label="Enter E-Mail"
          name="email"
          type="email"
          onChange={event => userInputHandler(event)}
          value={user.email}
          placeholder="E-Mail"
        />
        <button>Sign Up</button>
      </Form>
    </div>
  );
};

export default SignUp;
