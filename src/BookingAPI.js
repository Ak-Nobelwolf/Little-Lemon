// BookingAPI.js
// Import the required modules
const { format } = require('date-fns'); // Import date-fns for date formatting

// Function to generate available reservation times based on the date
const generateAvailableTimes = (startDate, endDate) => {
  const availableTimesData = {};
  const oddTimeSlots = ['18:00', '19:00', '20:00'];
  const evenTimeSlots = ['17:00', '20:00', '21:00'];
  let currentDate = new Date(startDate);
  let isOddDate = true;

  while (currentDate <= endDate) {
    const formattedDate = format(currentDate, 'yyyy-MM-dd'); // Format date as 'yyyy-MM-dd'
    availableTimesData[formattedDate] = isOddDate ? oddTimeSlots : evenTimeSlots;
    currentDate.setDate(currentDate.getDate() + 1);
    isOddDate = !isOddDate;
  }

  return availableTimesData;
};

// Define the start and end dates for generating available times
const startDate = new Date('2023-08-01');
const endDate = new Date('2033-08-30');
const availableTimesData = generateAvailableTimes(startDate, endDate);

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
