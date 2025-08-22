import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./assets/components/Home";
import { Routes, Route } from "react-router-dom";
import Details from "./assets/components/Details";
function App() {
  return (
    <div className=" h-screen w-screen flex">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />

      </Routes>
    </div>
  );
}

export default App;
