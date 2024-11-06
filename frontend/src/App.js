import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './navbar/Navbar'
import Login from './navbar/Login'
import Home from './components/Home'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Features from './components/Features'
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonial" element={<Testimonials />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App

