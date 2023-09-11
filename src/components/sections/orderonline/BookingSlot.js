// BookingSlot.js
import React, {useReducer } from 'react';
import BookingForm from './BookingForm';

function BookingSlot() {
  // Define a reducer function to handle state changes
  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        // You can customize this logic to return available times based on the selected date
        // For example, you can fetch available times from an API based on the date.
        const { date } = action;
        return getAvailableTimesForDate(date);
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

  // Function to get available times based on the selected date (you can customize this)
  const getAvailableTimesForDate = (date) => {
    // Example: Return different times based on date (customize as needed)
    if (date === '2023-09-05') {
      return ['18:00', '19:00', '20:00'];
    } else if (date === '2023-09-06') {
      return ['17:00', '20:00', '21:00'];
    } else {
      // Return default times for other dates
      return initializeTimes();
    }
  };

  // Use useReducer to manage availableTimes state
  const [availableTimes, dispatch] = useReducer(reducer, [], initializeTimes);

  return (
    <main>
      <div>
        {/* Pass the dispatch function down to the BookingForm component */}
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </div>
    </main>
  );
}

export default BookingSlot;
