import React, { useState } from "react";
import { signUp, IS_SIGNING_UP } from "../actions/signUpActions";

const SignUp = props => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    full_name: "",
    email: ""
  });

  const userInputHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  return (
    <div>
      <form onSubmit={() => signUp(IS_SIGNING_UP, user)}>
        <input
          name="username"
          type="text"
          onChange={event => userInputHandler(event)}
          value={user.username}
          placeholder="Username"
        />
        <input
          name="password"
          type="password"
          onChange={event => userInputHandler(event)}
          value={user.password}
          placeholder="Password"
        />
        <input
          name="full_name"
          type="text"
          onChange={event => userInputHandler(event)}
          value={user.full_name}
          placeholder="Full Name"
        />
        <input
          name="email"
          type="email"
          onChange={event => userInputHandler(event)}
          value={user.email}
          placeholder="E-Mail"
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
