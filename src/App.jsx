import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "/src/Components/Hero/Hero";
import Project from "/src/Components/Project/Project";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
