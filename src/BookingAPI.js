// BookingAPI.js
// Simulated data store for available reservation times
const availableTimesData = {
  '2023-09-01': ['18:00', '19:00', '20:00'],
  '2023-09-02': ['17:00', '20:00', '21:00'],
  '2023-09-03': ['18:00', '19:00', '20:00'],
  '2023-09-04': ['17:00', '20:00', '21:00'],
  '2023-09-05': ['18:00', '19:00', '20:00'],
  '2023-09-06': ['17:00', '20:00', '21:00'],
  '2023-09-07': ['18:00', '19:00', '20:00'],
  '2023-09-08': ['17:00', '20:00', '21:00'],
  '2023-09-09': ['18:00', '19:00', '20:00'],
  '2023-09-10': ['17:00', '20:00', '21:00'],
  '2023-09-11': ['18:00', '19:00', '20:00'],
  '2023-09-12': ['17:00', '20:00', '21:00'],
  '2023-09-13': ['18:00', '19:00', '20:00'],
  '2023-09-14': ['17:00', '20:00', '21:00'],
  '2023-09-15': ['18:00', '19:00', '20:00'],
  '2023-09-16': ['17:00', '20:00', '21:00'],
  '2023-09-17': ['18:00', '19:00', '20:00'],
  '2023-09-18': ['17:00', '20:00', '21:00'],
  '2023-09-19': ['18:00', '19:00', '20:00'],
  '2023-09-20': ['17:00', '20:00', '21:00'],
  '2023-09-21': ['18:00', '19:00', '20:00'],
  '2023-09-22': ['17:00', '20:00', '21:00'],
  '2023-09-23': ['18:00', '19:00', '20:00'],
  '2023-09-24': ['17:00', '20:00', '21:00'],
  '2023-09-25': ['18:00', '19:00', '20:00'],
  '2023-09-26': ['17:00', '20:00', '21:00'],
  '2023-09-27': ['18:00', '19:00', '20:00'],
  '2023-09-28': ['17:00', '20:00', '21:00'],
  '2023-09-29': ['18:00', '19:00', '20:00'],
  '2023-09-30': ['17:00', '20:00', '21:00'],
    // Add more dates and times as needed
  };

  // Simulated data store for submitted reservations
  const submittedReservations = [];

  // Function to fetch available reservation times for a given date
  function fetchAPI(date) {
    return new Promise((resolve, reject) => {
      // Simulate an API call with a delay (replace with actual API call)
      setTimeout(() => {
        const availableTimes = availableTimesData[date] || [];
        resolve(availableTimes);
      }, 1000); // Simulate a 1-second delay
    });
  }

  // Function to submit a reservation
  function submitAPI(formData) {
    return new Promise((resolve, reject) => {
      // Simulate a successful submission (replace with actual API call)
      setTimeout(() => {
        submittedReservations.push(formData);
        resolve(true);
      }, 1000); // Simulate a 1-second delay
    });
  }

  module.exports = { fetchAPI, submitAPI };
