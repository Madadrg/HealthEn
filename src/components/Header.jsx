import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './images/logo.png';

export const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo" className="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
