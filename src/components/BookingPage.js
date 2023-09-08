import React from 'react';
import BookingForm from './BookingForm';

function BookingPage() {
  return (
    <div>
      {/* Add any additional content before the form */}
      <h1>Make a Reservation</h1>
      <p>Fill out the form below to book a table.</p>

      {/* Include the BookingForm component */}
      <BookingForm />

      {/* Add any additional content after the form */}
      <p>We look forward to serving you!</p>
    </div>
  );
}

export default BookingPage;
