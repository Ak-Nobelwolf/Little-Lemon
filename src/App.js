//App.js
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/sections/Navbar';
import Homepage from './components/pages/Homepage';
import Menu from './components/pages/Menu';
import Reservations from './components/pages/Reservations';
import ConfirmedBooking from './components/sections/reservations/ConfirmedBooking';
import OrderOnline from './components/pages/OrderOnline';
import Login from './components/pages/Login';
import AboutUs from './components/pages/AboutUs';
import Footer from './components/sections/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
