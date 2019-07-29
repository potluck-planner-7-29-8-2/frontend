import React, { useState } from "react";
import { login } from "./../actions/loginActions";

const Login = props => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  return (
    <form onSubmit={login}>
      <fieldset>
        <legend>Login</legend>
        <div className="form-group row">
          Username
          <div>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={user.username}
            />
          </div>
        </div>
        <div className="form-group row">
          Password
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={user.password}
            />
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default Login;
