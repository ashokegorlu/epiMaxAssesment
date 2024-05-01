import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import AssignTaskPage from "./Components/AssignTaskPage";
import TaskHomePage from "./Components/TaskHomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskHomePage />} />
        <Route path="/Summary" element={<AssignTaskPage />} />
      </Routes>
    </Router>
  );
}

export default App;
