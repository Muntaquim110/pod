import React from 'react';
import './App.css';
import Navbar from './component/Navbar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home.js';
import About from './component/About.js';
import Podlist from './component/Podlist.js';
import Contact from './component/Contact.js';
import Audio from './component/Audio.js';
import Footer from './Footer.js';



function App() {
  return (
    <div className="App">
        <div>
          
          <Navbar />
          <Routes>
            <Route path="/App" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Podlist" element={<Podlist />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          
         
        </div>
          <Audio />
        <div>

          <Footer />
        </div>
    </div>
      ); 
}

export default App;
