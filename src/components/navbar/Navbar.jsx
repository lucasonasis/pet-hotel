import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { WiAlien } from 'react-icons/wi';
import './Navbar.css';
import { Outlet, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pet-navbar" id="pet-navbar">
      <div className="pet-navbar-links" id="pet-navbar-links">
        <img src={require('./../../assets/logo.png')} className="pet-navbar-links-logo"/>
        <div className="pet-navbar-links-container" id="pet-navbar-links-container">
        <NavLink to='/' style={({ isActive }) => { return { color : isActive ? 
        "#02de0a" : "" } }}><p>Home</p></NavLink>
        <NavLink to='/about' style={({ isActive }) => { return { color : isActive ? "#02de0a" : "" } }}><p>About</p></NavLink>
        <NavLink to='/dogs' style={({ isActive }) => { return { color : isActive ? "#02de0a" : "" } }}><p>Dogs</p></NavLink>
        <NavLink to='/cats' style={({ isActive }) => { return { color : isActive ? "#02de0a" : "" } }}><p>Cats</p></NavLink>
        <NavLink to='/booking' style={({ isActive }) => { return { color : isActive ? "#02de0a" : "" } }}><p>Booking</p></NavLink>
        <NavLink to='/contact' style={({ isActive }) => { return { color : isActive ? "#02de0a" : "" } }}><p>Contact</p></NavLink>
        </div>
      </div>

      <div className="pet-navbar-mobile" id="pet-navbar-mobile">
        {toggleMenu
          ? <RiCloseLine color="#0a0a0a" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#0a0a0a" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="pet-navbar-links-mobile scale-up-center">
          <div className="pet-navbar-links-container-mobile">
        <NavLink to='/' style={({ isActive }) => { return { color : isActive ? 
        "#02de0a" : "" } }}><p>Home</p></NavLink>
        <NavLink to='/about' style={({ isActive }) => { return { color : isActive ? "#02de0a" : "" } }}><p>About</p></NavLink>
        <NavLink to='/dogs' style={({ isActive }) => { return { color : isActive ? "#02de0a" : "" } }}><p>Dogs</p></NavLink>
        <NavLink to='/cats' style={({ isActive }) => { return { color : isActive ? "#02de0a" : "" } }}><p>Cats</p></NavLink>
        <NavLink to='/booking' style={({ isActive }) => { return { color : isActive ? "#02de0a" : "" } }}><p>Booking</p></NavLink>
        <NavLink to='/contact' style={({ isActive }) => { return { color : isActive ? "#02de0a" : "" } }}><p>Contact</p></NavLink>
          </div>
        </div>
        )}
      </div>
      {/* <script>
        window.onload = function() {
          window.scrollTo(0, 0)
        };
      </script> */}
    </div>
  );
};

export default Navbar;