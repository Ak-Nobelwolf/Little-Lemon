// ConfirmedBooking.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/sections/ConfirmedBooking.css'; // Import the CSS file

function ConfirmedBooking() {
  return (
    <div className="container">
      <h2>Booking Confirmed!</h2>
      <p className="confirmation-message">
        Your booking has been successfully confirmed. A confirmation message has been sent to your email, we look forward to seeing you.
      </p>
      <div>
        <Link to="/reservations" className="link">Book Another Reservation</Link>
      </div>
    </div>
  );
}

export default ConfirmedBooking;
