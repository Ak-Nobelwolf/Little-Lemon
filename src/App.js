//App.js
import './App.css';
import Navbar from './components/sections/Navbar';
import AppRoutes from './components/sections/AppRoutes';
import Footer from './components/sections/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
