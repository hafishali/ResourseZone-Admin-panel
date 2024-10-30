import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import '../css/Header.css';
import logo from '../assets/resourse Zone.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Header = () => {
    
  return (
    <Navbar expand="lg" bg="light" variant="light" className="header px-3">
      <Container fluid>
        {/* Logo Section */}
        <Navbar.Brand href="#home" className="d-flex align-items-center logo-container">
          <img
            src={logo}
            alt="Logo"
            height="40"
            className="logo"
          />
        </Navbar.Brand>
        {/* Toggle button for smaller screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Collapsible menu */}
        <Navbar.Collapse id="basic-navbar-nav" >
          {/* Navigation Links */}
          {/* <Nav className="ms-auto align-items-center">
            <Nav.Link href="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-link-custom">About Us</Nav.Link>
            <Nav.Link href="#services" className="nav-link-custom">Our Services</Nav.Link>
           
            <NavDropdown
              title={<span className="nav-link-custom">Resources</span>}
              id="resources-dropdown"
              className="no-dropdown-icon"
              menuVariant="light"
            >
              <NavDropdown.Item href="/hrm">HRM Consultancy</NavDropdown.Item>
              <NavDropdown.Item href="#consultancy">CAD PRO</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/career" className="nav-link-custom">Career</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">Contact Us</Nav.Link>
          </Nav> */}
          {/* Custom button */}
          
        </Navbar.Collapse>
        <AccountCircleIcon sx={{
          color: "black",
          fontSize: "30px",
        }} />
      </Container>
    </Navbar>
  );
};
export default Header;