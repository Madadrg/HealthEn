import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Login } from './Login';
import { Register } from './Register';
import { CalorieCalculator } from './CalorieCalculator';

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Set CalorieCalculator as the default route */}
        <Route path="/" element={<CalorieCalculator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};
