import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const Login = ({ loginUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here and call loginUser function
    // loginUser(username, password);
    navigate("/admin-dashboard");
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
