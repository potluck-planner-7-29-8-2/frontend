import React, { useState } from "react";
import { login, IS_LOGGING_IN } from "./../actions/loginActions";
import { useStateValue } from "./../hooks/useStateValue";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

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
    <form onSubmit={() => login(IS_LOGGING_IN, user)}>
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
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
};

export default Login;
