// AppRoutes.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './Homepage'; // Import your Homepage component
import About from './About'; // Import your About component
import Menu from './Menu'; // Import your Menu component
import Reservations from './Reservations'; // Import your Reservations component
import OrderOnline from './OrderOnline'; // Import your OrderOnline component
import Login from './Login'; // Import your Login component
import BookingPage from './BookingForm';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book-table" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
