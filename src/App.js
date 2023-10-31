import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Cover from "./components/Cover/Cover";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <Router>

      <div className="App">
     
        <Routes>
            <Route path="/" element={<Cover/>}/>
          
            <Route path="/quiz" element={<MainPage/>}/>
        </Routes>
      </div>

    </Router>
  );
}

export default App;
