import React from "react";
import { bottomlinks, navbarLinks } from "./data";
import "./navbar.css";
const NavBar = ({ links = [] }) => {
  return (
    <ul className="nav-container bg-gray flex list-none text-bold h-4 items-center justify-around px-4">
      <Links links={navbarLinks} />
    </ul>
  );
};

export default NavBar;

export const BottomNavbar = () => {
  return (
    <ul className="nav-bottom-container  bg-transparent flex list-none text-bold justify-around h-4 items-center bg-dark-gray">
      <Links links={bottomlinks} />
    </ul>
  );
};

const Links = ({ links }) => {
  return (
    <>
      {links.map((link) => (
        <li key={link} className="nav-links flex-1">
          <a href="#one" className=" text-black text-none">
            {link[0].toUpperCase() + link.slice(1)}
          </a>
        </li>
      ))}
    </>
  );
};
