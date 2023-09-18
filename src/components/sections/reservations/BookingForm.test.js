// import { render, screen } from "@testing-library/react";
// import BookingForm from './BookingForm';
// import userEvent from "@testing-library/user-event";

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

// test('initializeTimes function returns expected times', () => {
//     const times = BookingForm.initializeTimes();
//     const expectedTimes = [
//         '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
//     ];
//     expect(times).toEqual(expectedTimes);
// });

// test('updateTimes function returns the same value as provided in the state', () => {
//     const initialState = ['17:00', '18:00', '19:00'];
//     render(<BookingForm availableTimes={initialState} dispatch={() => {}} />);

//     // Simulate changing the date
//     const dateInput = screen.getByLabelText('Choose Date');
//     userEvent.type(dateInput, '2023-09-05');

//     // Get updated available times
//     const updatedTimes = screen.getByLabelText('Choose Time').textContent.trim().split('\n');

//     // Check if the updated times match the initial state
//     expect(updatedTimes).toEqual(initialState);
// });

// BookingForm.test.js

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('HTML5 validation attributes are applied correctly', () => {
  render(<BookingForm />);

  const firstNameInput = screen.getByLabelText('First Name');
  const lastNameInput = screen.getByLabelText('Last Name');
  const emailInput = screen.getByLabelText('Email');
  const phoneInput = screen.getByLabelText('Phone Number');
  const dateInput = screen.getByLabelText('Choose Date');
  const timeInput = screen.getByLabelText('Choose Time');
  const guestsInput = screen.getByLabelText('Number of Guests');

  expect(firstNameInput).toHaveAttribute('required');
  expect(lastNameInput).toHaveAttribute('required');
  expect(emailInput).toHaveAttribute('required');
  expect(phoneInput).toHaveAttribute('required');
  expect(phoneInput).toHaveAttribute('pattern', '[0-9]{10}');
  expect(dateInput).toHaveAttribute('required');
  expect(timeInput).toHaveAttribute('required');
  expect(guestsInput).toHaveAttribute('required');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '6');
});

test('Valid and invalid states for JavaScript validation functions', () => {
    render(<BookingForm />);

    // Simulate invalid input
    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'invalid-email' } });
    fireEvent.change(screen.getByLabelText('Phone Number'), { target: { value: '123' } });
    fireEvent.change(screen.getByLabelText('Choose Date'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Choose Time'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Number of Guests'), { target: { value: '7' } });

    // Check that error messages are displayed for invalid input
    expect(screen.getByText('First Name is required')).toBeInTheDocument();
    expect(screen.getByText('Last Name is required')).toBeInTheDocument();
    expect(screen.getByText('Invalid email address')).toBeInTheDocument();
    expect(screen.getByText('Invalid phone number (10 digits)')).toBeInTheDocument();
    expect(screen.getByText('Date is required')).toBeInTheDocument();
    expect(screen.getByText('Time is required')).toBeInTheDocument();
    expect(screen.getByText('Number of guests must be between 1 and 6')).toBeInTheDocument();

    // Reset the form by providing valid input
    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Phone Number'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText('Choose Date'), { target: { value: '2023-09-20' } });
    fireEvent.change(screen.getByLabelText('Choose Time'), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText('Number of Guests'), { target: { value: '4' } });

    // Check that error messages are not displayed for valid input
    expect(screen.queryByText('First Name is required')).toBeNull();
    expect(screen.queryByText('Last Name is required')).toBeNull();
    expect(screen.queryByText('Invalid email address')).toBeNull();
    expect(screen.queryByText('Invalid phone number (10 digits)')).toBeNull();
    expect(screen.queryByText('Date is required')).toBeNull();
    expect(screen.queryByText('Time is required')).toBeNull();
    expect(screen.queryByText('Number of guests must be between 1 and 6')).toBeNull();
  });