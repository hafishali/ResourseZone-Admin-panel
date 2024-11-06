import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import '../css/Header.css';
import logo from '../assets/resourse Zone.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  // Handle opening the menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
const navigate=useNavigate()
  // Handle closing the menu
  const handleClose = () => {
    setAnchorEl(null);
    navigate('/')
  };
  const handleLogout=()=>{
    localStorage.removeItem('resourceZone_token')
    navigate('/')
  }
    
  return (
    <Navbar expand="lg" bg="light" variant="light" className="header px-3">
      <Container fluid>
        {/* Logo Section */}
        <Navbar.Brand  className="d-flex align-items-center logo-container">
          <Link to={'/Dashboard'}> <img
            src={logo}
            alt="Logo"
            height="40"
            className="logo"
          /></Link>
         
        </Navbar.Brand>
        {/* Toggle button for smaller screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Collapsible menu */}
        <Navbar.Collapse id="basic-navbar-nav" >
          {/* Navigation Links */}
          <Nav className="ms-auto align-items-center me-3">
           
            <Nav.Link className="nav-link-custom">
            <Link to={'/users'} style={{textDecoration:"none",color:"black"}}>Users</Link> </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
        <AccountCircleIcon
        sx={{
          color: 'black',
          fontSize: '30px',
          cursor: 'pointer'
        }}
        onClick={handleClick}
      />
      
      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={() => {
          handleClose();
          
          console.log("Login clicked");
        }}>  Login</MenuItem>
        
        <MenuItem onClick={() => {
          handleLogout();
          // Handle logout action here
          console.log("Logout clicked");
        }}>Logout</MenuItem>
      </Menu>
      </Container>
    </Navbar>
  );
};
export default Header;