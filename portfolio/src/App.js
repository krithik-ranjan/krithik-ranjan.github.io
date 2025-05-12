import logo from './logo.svg';
import './App.css';

import Home from './Home.js'
import Research from './Research.js';
import Creative from './Creative.js';
import Photos from './Photos.js';
import Comp from './Comp.js';

import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import CV from './assets/CV_KrithikRanjan.pdf';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        
        {/* Hidden pages */}
        <Route path="/comp" element={<Comp />} />
      </Routes>
    </Router>
  )
}

function MainPage() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="App">
      <div className="App-header" onClick={() => setActiveSection("home")}>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello! I'm Krithik Ranjan</h1>
      </div>
      
      {activeSection === "home" && <Home setActiveSection={setActiveSection} />}
      {activeSection === "research" && <Research setActiveSection={setActiveSection} />}
      {activeSection === "creative" && <Creative setActiveSection={setActiveSection} />}
      {activeSection === "photos" && <Photos setActiveSection={setActiveSection} />}
      

      <Foot />
    
    </div>
  );
}

function Foot() {
  return (
    <div className="App-footer">
        <hr></hr>
        <div className="Contact">
          <div className="Contact-left">
          krithik.ranjan@gmail.com
          </div>
          <div className="Contact-right">
          <a href={CV}>CV</a>&ensp;&#9671;&ensp;<a href="https://scholar.google.com/citations?user=bJ26JeEAAAAJ&hl=en">SCHOLAR</a>&ensp;&#9671;&ensp;<a href="https://www.linkedin.com/in/krithik-ranjan/">LINKEDIN</a>
          </div>
        </div>
      </div>
  );
}

export default App;
