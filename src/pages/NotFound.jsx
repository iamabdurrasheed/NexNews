import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  return (
    <div style={{ paddingTop: '80px', minHeight: '80vh' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} className="text-center">
            <div className="error-container">
              <div style={{ fontSize: '6rem', marginBottom: '20px' }}>
                📰❌
              </div>
              <h1 className="display-1 fw-bold text-primary">404</h1>
              <h2 className="mb-4">Page Not Found</h2>
              <p className="lead text-muted mb-4">
                Sorry, we couldn't find the page you're looking for.
                The page <code>{location.pathname}</code> doesn't exist or may have been moved.
              </p>
              
              <div className="mb-4">
                <h5>What you can do:</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    🏠 <Link to="/" className="text-decoration-none">Go back to the homepage</Link>
                  </li>
                  <li className="mb-2">
                    🔍 <Link to="/?search=breaking" className="text-decoration-none">Search for breaking news</Link>
                  </li>
                  <li className="mb-2">
                    💻 <Link to="/category/technology" className="text-decoration-none">Browse technology news</Link>
                  </li>
                  <li className="mb-2">
                    ⚽ <Link to="/category/sports" className="text-decoration-none">Check out sports updates</Link>
                  </li>
                </ul>
              </div>

              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Button as={Link} to="/" variant="primary" size="lg">
                  🏠 Back to Home
                </Button>
                <Button 
                  variant="outline-secondary" 
                  size="lg"
                  onClick={() => window.history.back()}
                >
                  ← Go Back
                </Button>
              </div>

              <div className="mt-5">
                <small className="text-muted">
                  If you think this is an error, please report it through our feedback form.
                </small>
              </div>
            </div>
          </Col>
        </Row>
        
        {/* Quick Links */}
        <Row className="mt-5">
          <Col>
            <div className="text-center">
              <h4 className="mb-4">Popular Categories</h4>
              <div className="d-flex gap-2 justify-content-center flex-wrap">
                <Button as={Link} to="/category/technology" variant="outline-primary" size="sm">
                  💻 Technology
                </Button>
                <Button as={Link} to="/category/sports" variant="outline-primary" size="sm">
                  ⚽ Sports
                </Button>
                <Button as={Link} to="/category/business" variant="outline-primary" size="sm">
                  💼 Business
                </Button>
                <Button as={Link} to="/category/health" variant="outline-primary" size="sm">
                  🏥 Health
                </Button>
                <Button as={Link} to="/category/entertainment" variant="outline-primary" size="sm">
                  🎬 Entertainment
                </Button>
                <Button as={Link} to="/category/science" variant="outline-primary" size="sm">
                  🔬 Science
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
