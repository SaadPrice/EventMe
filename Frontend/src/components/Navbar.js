// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">EventMe</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Events" id="basic-nav-dropdown">
            <NavDropdown.Item href="/events/concerts">Concerts</NavDropdown.Item>
            <NavDropdown.Item href="/events/festivals">Festivals</NavDropdown.Item>
            <NavDropdown.Item href="/events/tours">Tours</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/my-tickets">My Tickets</Nav.Link>
          <Nav.Link href="/login">Sign In/Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;




