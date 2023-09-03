// Footer.js
import React from 'react';
import logo from '../Logo.svg';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
            <img src={logo} alt="Footer Logo" />
            <p>Little Lemon</p>
        </div>
        <div className="footer-links">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order-online">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </div>
      </div>
      <div className="footer-info">
        <p>&copy; 2023 Little Lemon Restaurant</p>
        <p>123 Main Street, City</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Email: info@littlelemon.com</p>
      </div>
      <div className="footer-social">
        <p>Follow Us:</p>
        <ul>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
