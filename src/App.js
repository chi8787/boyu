import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main';
import AboutPage from './pages/About';
import PicturesPage from './pages/Pictures';
import BookInfo from './pages/bookInfo';
import Booking from './pages/Booking';
import Travel from './pages/Travel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pictures" element={<PicturesPage />} />
        <Route path="/bookinginfo" element={<BookInfo />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/travel" element={<Travel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
