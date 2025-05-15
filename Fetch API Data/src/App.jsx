import React from "react";
import { Routes, Route } from "react-router-dom";
import FetchData from "./Components/FetchData";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FetchData />} />
      </Routes>
    </div>
  );
};

export default App;
