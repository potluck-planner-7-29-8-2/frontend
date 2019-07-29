import React, { useState } from "react";
import { loginAction } from "./../actions/loginActions";
import { useStateValue } from "./../hooks/useStateValue";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const [{ login }, dispatch] = useStateValue(); //what comes before the comma is the entire state
  console.log(login);

  function handleChange(event) {
    const updatedUser = { ...user, [event.target.name]: event.target.value };
    console.log(
      "handleChange",
      event.target.name,
      event.target.value,
      updatedUser
    );
    setUser(updatedUser);
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        loginAction(dispatch, user);
      }}
    >
      <fieldset>
        <legend>Login</legend>
        <div className="form-group row">
          Username:
          <div>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={user.username}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          Password:
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit">Login</button>
      </fieldset>
    </form>
  );
};

export default Login;
