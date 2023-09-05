// // Nav.js
// import React from 'react';
// import logo from '../Logo.svg';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// function Nav() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <img src={logo} alt="Little Lemon Restaurant Logo" />
//       </div>
//       <div className="navbar-right">
//         <ul>
//         <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/menu">Menu</Link></li>
//           <li><Link to="/reservations">Reservations</Link></li>
//           <li><Link to="/order-online">Order Online</Link></li>
//           <li><Link to="/login">Login</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Nav;

import React from 'react';
import logo from '../Logo.svg';

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
