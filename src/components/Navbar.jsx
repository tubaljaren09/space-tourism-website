import React, { useState } from "react";

// Images
import AppIcon from "../assets/app.png";
import BurgerIcon from "../assets/burger.png";
import CloseIcon from "../assets/close.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar-main">
      <div className="navbar-container">
        <img src={AppIcon} alt="App-Icon" />
        <img onClick={handleNav} src={BurgerIcon} alt="Burger-Icon" />
        <div className={nav ? "sidenav-show" : "sidenav"}>
          <img
            onClick={handleNav}
            className="close-icon"
            src={CloseIcon}
            alt="Close-Icon"
          />
          <ul>
            <li>00 HOME</li>
            <li>01 DESTINATION</li>
            <li>02 CREW</li>
            <li>03 TECHNOLOGY</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
