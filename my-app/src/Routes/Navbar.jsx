import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" style={{ marginLeft: "30px" }}>
        home
      </NavLink>
      <NavLink to="/users" style={{ marginLeft: "30px" }}>
        user
      </NavLink>
      <NavLink to="/order" style={{ marginLeft: "30px" }}>
        order
      </NavLink>
      <NavLink to="/history" style={{ marginLeft: "30px" }}>
        history
      </NavLink>
    </nav>
  );
};

export default Navbar;
