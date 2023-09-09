// Footer.js
import React from 'react';
import logo from '../../assets/Logo.svg';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
            <img src={logo} alt="Footer Logo" />
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
        <div className="footer-info">
          <p>221b Baker Street, London</p>
          <p>Phone: +44 (123) 456-7890</p>
          <p>Email: info@littlelemon.com</p>
          <p>&copy; 2023 Little Lemon Restaurant</p>
        </div>
        <div className="footer-social">
          <p>Follow Us:</p>
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
