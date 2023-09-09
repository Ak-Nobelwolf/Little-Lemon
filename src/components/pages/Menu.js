import React from 'react';
import MenuImage from '../../assets/menu.webp';
import '../../styles/pages/Menu.css';

function Menu() {
  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <img src={MenuImage} alt="Our Menu" className="menu-image" />
    </div>
  );
}

export default Menu;
