import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Cover from "./components/UI/Cover/Cover";

function App() {
  return (
    <Router>

      <div className="App">
        <Routes>
            <Route path="/" element={<Cover/>}/>
            <Route path="/quiz" element={<div/>}/>
        </Routes>
      </div>

    </Router>
  );
}

export default App;
