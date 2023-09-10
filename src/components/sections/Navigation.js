import { Link } from "react-router-dom";
import Navlogo from '../../assets/nav-logo.png';
import '../../styles/sections/Navbar.css';

export default function Navigation(props) {
  return (
    <menu className={`navbar-menu ${props.device}`}>
      {props.device === "mobile" ? (
        ""
      ) : (
        <Link to="/"><img className="nav-image" src={Navlogo} alt="Little Lemon logo" /></Link>
      )}
      <Link className="hover-effect" to="/"> <h1>Home</h1></Link>
      <Link className="hover-effect" to="/about-us"><h1>About</h1></Link>
      <Link className="hover-effect" to="/menu"><h1>Menu</h1></Link>
      <Link className="hover-effect" to="/reservations"><h1>Reservations</h1></Link>
      <Link className="hover-effect" to="/order-online"><h1>Order Online</h1></Link>
      <Link className="hover-effect" to="/login"><h1>Login</h1></Link>
    </menu>
  );
}
