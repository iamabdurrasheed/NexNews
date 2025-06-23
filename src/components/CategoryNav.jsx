import React from 'react';
import { Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const CategoryNav = () => {
  const location = useLocation();
    const categories = [
    { name: 'All', path: '/', icon: 'fas fa-globe' },
    { name: 'Technology', path: '/category/technology', icon: 'fas fa-microchip' },
    { name: 'Sports', path: '/category/sports', icon: 'fas fa-running' },
    { name: 'Business', path: '/category/business', icon: 'fas fa-chart-line' },
    { name: 'Health', path: '/category/health', icon: 'fas fa-heartbeat' },
    { name: 'Entertainment', path: '/category/entertainment', icon: 'fas fa-film' },
    { name: 'Science', path: '/category/science', icon: 'fas fa-atom' }
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' && !location.search.includes('search=');
    }
    return location.pathname === path;
  };

  return (
    <div className="category-nav">
      <Container>
        <Nav className="justify-content-center flex-wrap">
          {categories.map((category) => (
            <Nav.Link
              key={category.name}
              as={Link}
              to={category.path}
              className={`nav-link ${isActive(category.path) ? 'active' : ''}`}
            >
              <i className={`${category.icon} me-2`}></i>
              {category.name}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </div>
  );
};

export default CategoryNav;
