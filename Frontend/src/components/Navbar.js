import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomNavbar.css';

const CustomNavbar = () => {
  return (
    <Navbar className="navbar-custom" expand="lg">
      <Navbar.Brand as={Link} to="/">EventMe</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Events" id="basic-nav-dropdown" className="nav-dropdown">
            <LinkContainer to="/events/concerts">
              <NavDropdown.Item>Concerts</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/events/festivals">
              <NavDropdown.Item>Festivals</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/events/tours">
              <NavDropdown.Item>Tours</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <LinkContainer to="/profile">
            <Nav.Link>Profile</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/my-tickets">
            <Nav.Link>My Tickets</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link>Sign In/Sign Up</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;







