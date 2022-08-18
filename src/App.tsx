/* eslint-disable object-curly-newline */
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Slide1 from '../assets/slide1.jpg';

import Home from './pages/Home';
import Course from './pages/Course';
import About from './pages/About';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  return (
    <div
      className={`w-full min-h-screen flex flex-col bg-scroll bg-cover bg-repeat-x ${
        {
          '/': 'bg-white',
          '/course': 'bg-blue',
          '/about': 'bg-red',
        }[location.pathname]
      }`}
      style={{
        backgroundImage: location.pathname === '/' ? `url(${Slide1})` : '',
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default AppWrapper;
