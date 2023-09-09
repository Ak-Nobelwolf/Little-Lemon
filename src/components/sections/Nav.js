// Nav.js
import React from 'react';
import logo from '../../assets/Logo.svg';

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Little Lemon Restaurant Logo" />
      </div>
      <div className="navbar-right">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order-online">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
