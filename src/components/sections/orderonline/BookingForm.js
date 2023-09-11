// BookingForm.js
import React, { useState } from 'react';
import '../../../styles/sections/BookingForm.css';

function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false); // Track form submission

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (you can perform API calls, validations, etc.)

    // For now, just set a flag to indicate successful submission
    setSubmitted(true);
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);

    // Dispatch the state change with the new date
    dispatch({ type: 'UPDATE_TIMES', date: newDate });
  };

  return (
    <div className="booking-container">
      {submitted ? (
        <div className="success-message">
          Reservation successful! A confirmation message has been sent to your email,
          we look forward to seeing you.
        </div>
      ) : (
        <form className="booking-form" onSubmit={handleSubmit}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />


          <label htmlFor="res-date">Choose Date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={handleDateChange}
            required
          />

          <label htmlFor="res-time">Choose Time</label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            {availableTimes.map((availableTime) => (
              <option key={availableTime} value={availableTime}>
                {availableTime}
              </option>
            ))}
          </select>

          <label htmlFor="guests">Number of Guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="6"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
            required
          />

          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            required
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Engagement">Engagement</option>
            <option value="Other">Other</option>
          </select>

          <input type="submit" value="Make Your Reservation" />
        </form>
      )}
    </div>
  );
}

export default BookingForm;
