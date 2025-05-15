import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ReactCounterApp from "./Components/ReactCounterApp";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ReactCounterApp />} />
      </Routes>
    </div>
  );
};

export default App;
