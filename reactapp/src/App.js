// import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Play } from "./pages/Play";
import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  return (
    <div className="background">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="play" element={<Play />} />
      </Routes>
    </div>
  );
}

export default App;
