import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Images
import Hamburger from "../assets/shared/icon-hamburger.svg";
import Close from "../assets/shared/icon-close.svg";
import Logo from "../assets/shared/logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar-main">
      <div className="navbar-container">
        <img src={Logo} alt="App-Icon" />
        <img onClick={handleNav} src={Hamburger} alt="Burger-Icon" />
        <div className={nav ? "sidenav-show" : "sidenav"}>
          <img
            onClick={handleNav}
            className="close-icon"
            src={Close}
            alt="Close-Icon"
          />
          <ul>
            <li>
              <NavLink className="nav-link" onClick={handleNav} to="/home">
                00 HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                onClick={handleNav}
                to="/destination"
              >
                01 DESTINATION
              </NavLink>
            </li>
            <li>
              <NavLink>02 CREW</NavLink>
            </li>
            <li>
              <NavLink>03 TECHNOLOGY</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
