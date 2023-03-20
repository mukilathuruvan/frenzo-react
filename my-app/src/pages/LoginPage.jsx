import React, { useState } from "react";
import { useUserContext } from "../context/userContext";

const LoginPage = () => {
  const [user, setUser] = useState({ userName: "", password: "" });
  const { login } = useUserContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    login(user);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        Enter Username
        <input
          type="text"
          value={user.userName}
          onChange={(e) => setUser({ ...user, userName: e.target.value })}
        />
      </label>
      <label htmlFor="">
        Enter password
        <input
          type="text"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </label>
      <input type="submit" value="Login" />
    </form>
  );
};

export default LoginPage;
