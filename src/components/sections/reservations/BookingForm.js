// BookingForm.js
import React, { useState, useEffect } from 'react';
import {fetchAPI} from '../../../BookingAPI';
import '../../../styles/sections/BookingForm.css';


function BookingForm({ dispatch,submitForm}) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [setSubmitted] = useState(false); // Track form submission
  const [availableTimes, setAvailableTimes] = useState([]); // Store available times

  useEffect(() => {
    // Fetch available times when the date changes
    if (date) {
      // Call the API function to fetch available times
      fetchAPI(date)
        .then((times) => {
          setAvailableTimes(times);
        })
        .catch((error) => {
          console.error('Error fetching available times:', error);
          setAvailableTimes([]); // Reset available times on error
        });
    }
  }, [date]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here (you can perform API calls, validations, etc.)

    try {
      // Call the submitForm function passed as a prop
      const success = await submitForm({
        date,
        time,
        guests,
        occasion,
        firstName,
        lastName,
        email,
        phone,
      });

      if (success) {
        // If the submission is successful, set the submitted state to true
        setSubmitted(true);
      } else {
        // Handle submission failure, if needed
        console.error('Booking submission failed.');
      }
    } catch (error) {
      // Handle API call errors, if needed
      console.error('Error submitting booking:', error);
    }
  };

  return (
    <div className="booking-container">
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
            onChange={(e) => setDate(e.target.value)}
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
      )
    </div>
  );
}

export default BookingForm;
