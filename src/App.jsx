import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

// Styles
import "./styles/app.scss";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Destination from "./components/Destination";

const App = () => {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  return (
    <div className={"app-main" + location}>
      <Navbar />
      <Routes>
        <Route path="/space-tourism-website" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </div>
  );
};

export default App;
