import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./assets/components/Home";
import { Routes, Route } from "react-router-dom";
import Details from "./assets/components/Details";
import Context from "./assets/utils/Context";

function App() {
  return (
    <Context>
      <div className=" h-screen w-screen  flex-col flex">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />

        </Routes>
      </div>
    </Context>
  );
}

export default App;
