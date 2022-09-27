import React from "react";

// Styles
import "./styles/app.scss";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="app-main">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
