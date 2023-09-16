// BookingSlot.js
import React, { useReducer } from 'react';
import BookingForm from './BookingForm';
import {submitAPI } from '../../../BookingAPI'; // Import API functions
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation

function BookingSlot() {
  // Define a reducer function to handle state changes
  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        // You can customize this logic to return available times based on the selected date
        // For now, it simply returns the same state, as the data fetching is handled in BookingForm.js
        return state;
      default:
        return state;
    }
  };

  // Define a function to initialize availableTimes
  const initializeTimes = () => {
    return [
      '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ];
  };

  // Use useReducer to manage availableTimes state
  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes());

  // Use the useNavigate hook to get the navigation function
  const navigate = useNavigate();

  // Function to submit the form data
  const submitForm = async (formData) => {
    try {
      // Call the API function to submit the form data
      const success = await submitAPI(formData);
      if (success) {
        // If the submission is successful, navigate to the confirmation page
        navigate('/booking-confirmed');
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
    <main>
      <div>
        {/* Pass the dispatch function and submitForm function down to the BookingForm component */}
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      </div>
    </main>
  );
}

export default BookingSlot;
