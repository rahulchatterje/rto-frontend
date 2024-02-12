// Navbar.js

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import '../css/CustomNavbar.css';

const CustomNavbar = () => {
    const navbarStyle= {
        marginRight:'6%',
      };
      
  return (
  <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-white shadow " >
        
  <div className="container">
  <Link to="/" className="navbar-brand">
      <img
        src="/img/rto.jpg" // Replace with the path to your logo
        alt="Logo"
        height="40"
        className="d-inline-block align-top"
      />
     RTO Managment System
    </Link>
    
    <div  id="navbarNav" style={navbarStyle}>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
        <Link to="/">Home</Link>
        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item">
        <Link to="/about">About Us</Link>
        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item">
        <Link to="/service">Service</Link>
         
          
        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item">
        <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>  
  );
};

export default CustomNavbar;
