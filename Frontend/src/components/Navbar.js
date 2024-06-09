// src/components/Navbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Events</a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Concerts</a></li>
          <li><a className="dropdown-item" href="#">Festivals</a></li>
          <li><a className="dropdown-item" href="#">Tours</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Profile</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  );
};

export default Navbar;
