import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
       <nav className="navbar">
          <div className="navbar-logo">Logo</div>
            <ul className="navbar-links">
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/testimonial">Testimonial</Link></li>
               <li><Link to="/features">Features</Link></li>
               <li><Link to="/contact">Contact</Link></li>
            </ul>
            <Link to="/login">
                 <button className="navbar-login-button">Login</button>
            </Link>
        </nav>
    </div>
  )
}

export default Navbar
