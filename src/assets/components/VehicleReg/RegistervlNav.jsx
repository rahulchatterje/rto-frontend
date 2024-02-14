// Navbar.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


const RegiNavBar = () => {
  const navbarStyle = {
    marginRight: '6%',
  };

  return (
    <nav className="navbar navbar-expand-sm relative navbar-light bg-white shadow " >

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

        <div id="navbarNav" style={navbarStyle}>
          <ul className="navbar-nav ml-auto">

            <li className="nav-item">
              <Link to="/about">User Manual</Link>
            </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li className="nav-item">
              <Link to="/service">Acts and Rules</Link>


            </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li className="nav-item">
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>
        <img
          src="/img/g20-logo.png" // Replace with the path to your logo
          alt="Logo"
          height="40"
          className="d-inline-block align-top"
        />
      </div>
    </nav>
  );
};

export default RegiNavBar;
