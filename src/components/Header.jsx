import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';
import SearchBar from './SearchBar.jsx';

const Header = ({ onSearch }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Navbar bg={isDarkMode ? 'dark' : 'light'} variant={isDarkMode ? 'dark' : 'light'} expand="lg" fixed="top" className="navbar">
      <Container fluid>        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <i className="fas fa-newspaper me-2"></i> NexNews
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/category/technology">Technology</Nav.Link>
            <Nav.Link as={Link} to="/category/sports">Sports</Nav.Link>
            <Nav.Link as={Link} to="/category/business">Business</Nav.Link>
            <Nav.Link as={Link} to="/category/health">Health</Nav.Link>
            <Nav.Link as={Link} to="/category/entertainment">Entertainment</Nav.Link>
          </Nav>
          
          <div className="d-flex align-items-center">
            <SearchBar onSearch={onSearch} />
            <Button
              variant="outline-secondary"
              onClick={toggleTheme}
              className="theme-toggle ms-3"
              title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {isDarkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
