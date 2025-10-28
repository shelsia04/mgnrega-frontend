import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DistrictSelector from "./components/DistrictSelector";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/districts" element={<DistrictSelector />} />
          <Route path="/dashboard/:district" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
