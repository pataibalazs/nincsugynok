import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutPage from './components/AboutPage'; // The component for the About page
import HomePage from './components/HomePage';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      {/* More routes can be added here */}
    </Routes>
  </Router>
);

export default App;