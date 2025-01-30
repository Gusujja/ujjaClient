

import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/ujjalogo.jpg";
import icon from "../../assets/images/icoimage.svg";
import { CiBellOn } from "react-icons/ci"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      {/* Brand Logo */}
      <div   onClick={() => navigate("/")}className="navbar-logo" style={{height:"40px"}}>
       
          <img src={logo} alt="" />
          
      
        {/* <p>Unison Jiu Jitsu Academy</p> */}
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <CiBellOn color="black" size={30} />
        </li>
      </ul>
      {/* Profile Dropdown */}
      <div className="profile-container">
        <img
          src={icon}
          alt="profile"
          className="profile-image"
          onClick={toggleDropdown}
        />
        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <ul className="dropdown-menu">
            <li>
              <a href="#profile">Profile</a>
            </li>
            <li>
              <a href="#settings">Settings</a>
            </li>
            <li>
              <a href="#logout">Logout</a>
            </li>
          </ul>
        )}
      </div>

      {/* Mobile Menu Icon */}
      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? "✖" : "☰"}
      </button>
    </nav>
  );
};

export default Navbar;
