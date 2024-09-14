import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
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
            <Link to="/diary">Diary</Link> {/* Diary button */}
          </li>
        </ul>
      </nav>
    </header>
  );
};
