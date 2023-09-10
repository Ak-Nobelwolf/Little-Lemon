// Footer.js
import { Link } from "react-router-dom";
import footerlogo from '../../assets/footer-logo.png';
import '../../styles/sections/Footer.css';

export default function Footer() {
  return (
    <footer>
      <menu>
        <li className="img-footer">
          <Link to="/"><img className="nav-footer-image" src={footerlogo} alt="Little Lemon logo" /></Link>
        </li>

        <li>
          <h1 className="footer-header">Navigation</h1>
          <ul className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about-us">About</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/reservations">Reservations</Link>
            <Link to="/order-online">Order</Link>
            <Link to="/login">Login</Link>
          </ul>
        </li>

        <li>
          <h1 className="footer-header">Contact Us</h1>
          <ul className="footer-links">
            <li>221b Baker Street, London</li>
            <li>Phone: +44 (123) 456-7890</li>
            <li>Email: info@littlelemon.com</li>
            <li>&copy; 2023 Little Lemon Restaurant</li>
          </ul>
        </li>

        <li>
          <h1 className="footer-header">Connect with Us</h1>
          <ul className="footer-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          </ul>
        </li>
      </menu>
    </footer>
  );
}
