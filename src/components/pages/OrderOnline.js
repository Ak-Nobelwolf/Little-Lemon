// OrderOnline.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/OrderOnline.css';

function OrderOnline() {
  return (
    <div className="order-online-container">
      <h1>Order Online</h1>
      <p>Order delicious meals from the comfort of your home. Choose from our wide range of mouthwatering dishes and enjoy doorstep delivery or convenient pickup.</p>
      <div className="order-button-container">
        <Link to="/menu">
          <button className="order-button">Browse Menu</button>
        </Link>
      </div>
    </div>
  );
}

export default OrderOnline;
