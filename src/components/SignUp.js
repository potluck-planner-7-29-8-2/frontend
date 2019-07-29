import React, { useState } from "react";
import { signUpAction } from "../actions";
import { useStateValue } from "../hooks/useStateValue";

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
      <form
        onSubmit={e => {
          e.preventDefault();
          signUpAction(dispatch, user);
        }}
      >
        <fieldset>
          <legend>Sign Up</legend>
          Username:
          <input
            name="username"
            type="text"
            onChange={event => userInputHandler(event)}
            value={user.username}
            placeholder="Username"
          />
          Password:
          <input
            name="password"
            type="password"
            onChange={event => userInputHandler(event)}
            value={user.password}
            placeholder="Password"
          />
          Full Name:
          <input
            name="full_name"
            type="text"
            onChange={event => userInputHandler(event)}
            value={user.full_name}
            placeholder="Full Name"
          />
          E-Mail:
          <input
            name="email"
            type="email"
            onChange={event => userInputHandler(event)}
            value={user.email}
            placeholder="E-Mail"
          />
        </fieldset>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
