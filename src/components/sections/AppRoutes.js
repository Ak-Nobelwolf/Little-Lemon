// AppRoutes.js
import React from 'react';
import {Route, Routes } from 'react-router-dom';

import Homepage from '../pages/Homepage';
import Menu from '../pages/Menu';
import Reservations from '../pages/Reservations';
import ConfirmedBooking from './reservations/ConfirmedBooking';
import OrderOnline from '../pages/OrderOnline';
import Login from '../pages/Login';
import AboutUs from '../pages/AboutUs';

function AppRoutes() {
  return (
      <Routes>
        <Route exactpath="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default AppRoutes;
