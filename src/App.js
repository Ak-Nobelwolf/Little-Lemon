
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import AppRoutes from './components/AppRoutes'; // Import the Routes component

function App() {
  return (
    <>
      <Header />
      <Nav />
      <AppRoutes />
      <Main />
      <Footer />
    </>
  );
}

export default App;
