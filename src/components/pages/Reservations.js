// Reservations.js
import React from 'react';
import BookingSlot from '../sections/reservations/BookingSlot';
import '../../styles/pages/Reservations.css';

function Reservations() {
  return (
    <div >
      <h1 className="reservation-title">Make a Reservation</h1>
      <p className="reservation-description">Fill out the form below to book a table.</p>
        <BookingSlot />
        <div className="important-notes">
          <ul>
            <li>Please provide accurate details for your reservation.</li>
            <li>Reservations are subject to availability; we will confirm your booking shortly.</li>
            <li>If you need to make changes or cancel your reservation, please contact us in advance.</li>
            <li>For parties of 6 or more, please call us directly to make a reservation.</li>
          </ul>
      </div>
    </div>
  );
}

export default Reservations;
