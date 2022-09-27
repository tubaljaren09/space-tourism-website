import React from "react";

// Images
import AppIcon from "../assets/app.png";
import BurgerIcon from "../assets/burger.png";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="navbar-container">
        <img src={AppIcon} alt="App-Icon" />
        <img src={BurgerIcon} alt="Burger-Icon" />
      </div>
    </div>
  );
};

export default Navbar;
