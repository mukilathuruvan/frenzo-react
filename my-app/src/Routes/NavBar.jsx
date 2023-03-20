import React from "react";
import { NavLink } from "react-router-dom";

const routes = ["home", "user", "order", "history", "profile", "login"];

const Navbar = () => {
  return (
    <nav>
      {routes.map((route) => (
        <NavLink
          to={route === "home" ? "/" : route}
          style={{ marginLeft: "30px" }}>
          {route}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
