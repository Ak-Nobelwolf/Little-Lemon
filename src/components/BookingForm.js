// import React, { useState } from 'react';
// import '../styles/BookingForm.css'; // Import your CSS file

// function BookingForm() {
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('17:00');
//   const [guests, setGuests] = useState(1);
//   const [occasion, setOccasion] = useState('Birthday');

//   const [availableTimes] = useState([
//     '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30','21:00', '21:30', '22:00'
//   ]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//   };

//   return (
//     <form className="booking-form" onSubmit={handleSubmit}>
//       <label htmlFor="res-date">Choose date</label>
//       <input
//         type="date"
//         id="res-date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//         required
//       />

//       <label htmlFor="res-time">Choose time</label>
//       <select
//         id="res-time"
//         value={time}
//         onChange={(e) => setTime(e.target.value)}
//         required
//       >
//         {availableTimes.map((availableTime) => (
//           <option key={availableTime} value={availableTime}>
//             {availableTime}
//           </option>
//         ))}
//       </select>

//       <label htmlFor="guests">Number of guests</label>
//       <input
//         type="number"
//         placeholder="1"
//         min="1"
//         max="10"
//         id="guests"
//         value={guests}
//         onChange={(e) => setGuests(parseInt(e.target.value))}
//         required
//       />

//       <label htmlFor="occasion">Occasion</label>
//       <select
//         id="occasion"
//         value={occasion}
//         onChange={(e) => setOccasion(e.target.value)}
//         required
//       >
//         <option value="Birthday">Birthday</option>
//         <option value="Anniversary">Anniversary</option>
//       </select>

//       <input type="submit" value="Make Your Reservation" />
//     </form>
//   );
// }

// export default BookingForm;
import React, { useState } from 'react';
import '../styles/BookingForm.css'; // Import your CSS file

function BookingForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [submitted, setSubmitted] = useState(false); // Track form submission

  const [availableTimes] = useState([
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30','21:00', '21:30', '22:00'
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (you can perform API calls, validations, etc.)

    // For now, just set a flag to indicate successful submission
    setSubmitted(true);
  };

  return (
    <div className="booking-container">
      {submitted ? (
        <div className="success-message">
          Reservation successful! We look forward to seeing you.
        </div>
      ) : (
        <form className="booking-form" onSubmit={handleSubmit}>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <label htmlFor="res-time">Choose time</label>
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

          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
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
          </select>

          <input type="submit" value="Make Your Reservation" />
        </form>
      )}
    </div>
  );
}

export default BookingForm;
