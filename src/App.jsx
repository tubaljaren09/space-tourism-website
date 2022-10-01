import React from "react";
import { Route, Routes } from "react-router-dom";

// Styles
import "./styles/app.scss";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";

const App = () => {
  return (
    <div className="app-main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/space-tourism-website" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
};

export default App;
