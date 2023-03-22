import React from "react";
import { NavLink } from "react-router-dom";

const routes = ["home", "users", "products", "history", "profile", "login", "users-params"];

const Navbar = () => {
  return (
    <nav>
      {routes.map((route) => (
        <NavLink key={route} to={route === "home" ? "/" : route} style={{ marginLeft: "30px" }}>
          {route}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
