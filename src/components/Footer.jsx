import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">      <Container>
        <Row>
          <Col md={6} className="mb-4">
            <h5><i className="fas fa-newspaper me-2"></i>NexNews</h5>
            <p>
              Stay informed with the latest news from around the world. 
              NexNews brings you breaking news, technology updates, 
              sports highlights, and more.
            </p>
            <div className="social-icons">
              <a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" title="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" title="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </Col>
          
          <Col md={6} className="mb-4">
            <h5>About NexNews</h5>
            <p>
              NexNews is a modern news aggregation platform that provides 
              real-time news updates from trusted sources worldwide. Built with 
              React.js and powered by NewsAPI.
            </p>
            <p className="mb-0">
              <strong>Features:</strong>
            </p>
            <ul className="footer-links">
              <li><i className="fas fa-bolt me-2"></i>Real-time news updates</li>
              <li><i className="fas fa-layer-group me-2"></i>Category-based browsing</li>
              <li><i className="fas fa-search me-2"></i>Advanced search functionality</li>
              <li><i className="fas fa-mobile-alt me-2"></i>Responsive design</li>
              <li><i className="fas fa-adjust me-2"></i>Dark/Light theme toggle</li>
            </ul>
          </Col>
        </Row>
        
        <hr style={{ backgroundColor: 'rgba(255,255,255,0.2)', margin: '30px 0 20px' }} />
        
        <Row>
          <Col md={6}>
            <p className="mb-0">
              &copy; {currentYear} NexNews. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="mb-0">
              Built with <i className="fas fa-heart text-danger"></i> using React.js & Bootstrap
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
