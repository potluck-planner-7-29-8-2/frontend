import React, { useState, useEffect } from "react";
import { loginAction } from "./../actions/loginActions";
import { useStateValue } from "./../hooks/useStateValue";
import { NavLink } from "react-router-dom";
const Login = props => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const [{ login }, dispatch] = useStateValue(); //what comes before the comma is the entire state

  useEffect(() => {
    if (login.isLoggedIn) {
      props.history.push("/dashboard");
    }
  }, [login, props.history]);

  function handleChange(event) {
    const updatedUser = { ...user, [event.target.name]: event.target.value };
    setUser(updatedUser);
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        loginAction(dispatch, user);
        setUser({ username: "", password: "" });
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
        <NavLink to="/signup">
          <button>Sign Up</button>
        </NavLink>
      </fieldset>
    </form>
  );
};

export default Login;
