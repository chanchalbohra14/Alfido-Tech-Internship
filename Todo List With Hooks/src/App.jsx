import React from "react";
import { Routes, Route } from "react-router-dom";
import TodoListApp from "./Components/TodoListApp";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TodoListApp />} />
      </Routes>
    </div>
  );
};

export default App;
