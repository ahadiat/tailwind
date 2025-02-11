import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { StrictMode } from 'react';
import './index.css';
import Navbar from './components/Navbar.jsx';
import Home from './Home.jsx';
import Utama from './components/About/Utama.jsx';
import ContactUs from './components/ContactUs.jsx';

function App() {
  const location = useLocation(); // Get current location
  const showContactUs = location.pathname !== "/"; // Check if NOT on Home route

  return (
    <>
      <Navbar />
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/Utama" element={<Utama />} /> {/* About Us page */}
      </Routes>
      {showContactUs && <ContactUs />} {/* Render ContactUs conditionally */}
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
