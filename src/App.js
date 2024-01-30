import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from "./components/Home";
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Header/>   
      <Routes>
      
      <Route path="/" element={<Home/>} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>} />
        <Route path="/Services" element={<Services/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
