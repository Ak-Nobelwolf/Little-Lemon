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

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
  });

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

  const validateFirstName = () => {
    if (firstName.trim() === '') {
      setErrors((prevState) => ({
        ...prevState,
        firstName: 'First Name is required',
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        firstName: '',
      }));
    }
  };

  const validateLastName = () => {
    if (lastName.trim() === '') {
      setErrors((prevState) => ({
        ...prevState,
        lastName: 'Last Name is required',
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        lastName: '',
      }));
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors((prevState) => ({
        ...prevState,
        email: 'Invalid email address',
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        email: '',
      }));
    }
  };

  const validatePhone = () => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      setErrors((prevState) => ({
        ...prevState,
        phone: 'Invalid phone number (10 digits)',
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        phone: '',
      }));
    }
  };

  const validateDate = () => {
    if (date === '') {
      setErrors((prevState) => ({
        ...prevState,
        date: 'Date is required',
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        date: '',
      }));
    }
  };

  const validateTime = () => {
    if (time === '') {
      setErrors((prevState) => ({
        ...prevState,
        time: 'Time is required',
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        time: '',
      }));
    }
  };

  const validateGuests = () => {
    if (guests < 1 || guests > 6) {
      setErrors((prevState) => ({
        ...prevState,
        guests: 'Number of guests must be between 1 and 6',
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        guests: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here (you can perform API calls, validations, etc.)

    // Validate form fields before submission
    validateFirstName();
    validateLastName();
    validateEmail();
    validatePhone();
    validateDate();
    validateTime();
    validateGuests();

    // Check if there are any validation errors
    if (
      errors.firstName ||
      errors.lastName ||
      errors.email ||
      errors.phone ||
      errors.date ||
      errors.time ||
      errors.guests
    ) {
      return;
    }

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
          onBlur={validateFirstName}
          required
        />
        <div className="error">{errors.firstName}</div>

        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          onBlur={validateLastName}
          required
        />
        <div className="error">{errors.lastName}</div>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
          required
        />
        <div className="error">{errors.email}</div>

        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onBlur={validatePhone}
          pattern="[0-9]{10}"
          required
        />
        <div className="error">{errors.phone}</div>

        <label htmlFor="res-date">Choose Date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          onBlur={validateDate}
          required
        />
        <div className="error">{errors.date}</div>

        <label htmlFor="res-time">Choose Time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          onBlur={validateTime}
          required
        >
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
        <div className="error">{errors.time}</div>

        <label htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="6"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value))}
          onBlur={validateGuests}
          required
        />
        <div className="error">{errors.guests}</div>

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
    </div>
  );
}

export default BookingForm;
