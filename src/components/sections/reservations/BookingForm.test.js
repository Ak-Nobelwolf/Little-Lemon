import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import userEvent from "@testing-library/user-event";

// test('Renders the "First Name" label', () => {
//     render(<BookingForm />);
//     const firstNameLabel = screen.getByText("First Name");
//     expect(firstNameLabel).toBeInTheDocument();
// });

// test('Renders the "Last Name" label', () => {
//     render(<BookingForm />);
//     const lastNameLabel = screen.getByText("Last Name");
//     expect(lastNameLabel).toBeInTheDocument();
// });

// test('Renders the "Email" label', () => {
//     render(<BookingForm />);
//     const emailLabel = screen.getByText("Email");
//     expect(emailLabel).toBeInTheDocument();
// });

// test('Renders the "Phone Number" label', () => {
//     render(<BookingForm />);
//     const phoneNumberLabel = screen.getByText("Phone Number");
//     expect(phoneNumberLabel).toBeInTheDocument();
// });

// test('Renders the "Choose Date" label', () => {
//     render(<BookingForm />);
//     const chooseDateLabel = screen.getByText("Choose Date");
//     expect(chooseDateLabel).toBeInTheDocument();
// });

// test('Renders the "Choose Time" label', () => {
//     render(<BookingForm />);
//     const chooseTimeLabel = screen.getByText("Choose Time");
//     expect(chooseTimeLabel).toBeInTheDocument();
// });

// test('Renders the "Number of Guests" label', () => {
//     render(<BookingForm />);
//     const numberOfGuestsLabel = screen.getByText("Number of Guests");
//     expect(numberOfGuestsLabel).toBeInTheDocument();
// });

// test('Renders the "Occasion" label', () => {
//     render(<BookingForm />);
//     const occasionLabel = screen.getByText("Occasion");
//     expect(occasionLabel).toBeInTheDocument();
// });

// test('Renders the "Make Your Reservation" button', () => {
//     render(<BookingForm />);
//     const reservationButton = screen.getByText("Make Your Reservation");
//     expect(reservationButton).toBeInTheDocument();
// });

test('initializeTimes function returns expected times', () => {
    const times = BookingForm.initializeTimes();
    const expectedTimes = [
        '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ];
    expect(times).toEqual(expectedTimes);
});

test('updateTimes function returns the same value as provided in the state', () => {
    const initialState = ['17:00', '18:00', '19:00'];
    render(<BookingForm availableTimes={initialState} dispatch={() => {}} />);

    // Simulate changing the date
    const dateInput = screen.getByLabelText('Choose Date');
    userEvent.type(dateInput, '2023-09-05');

    // Get updated available times
    const updatedTimes = screen.getByLabelText('Choose Time').textContent.trim().split('\n');

    // Check if the updated times match the initial state
    expect(updatedTimes).toEqual(initialState);
});