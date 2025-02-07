/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' */
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./About";
import Projects from "./projects";


function App() {
  

  return (

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
       
            {/* Catch-all route for unmatched URLs */}
          </Routes>
        </Router>
      );
    };
  
/* 
    <Router>
    <Home />
    
   <Routes>
    <Route path = "/about" element = {<About />} />
   
    </Routes>

    </Router> */
   
 

     


export default App
