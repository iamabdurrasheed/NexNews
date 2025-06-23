import React from 'react';
import { Alert } from 'react-bootstrap';

const DemoNotice = ({ show = true }) => {
  if (!show) return null;

  return (
    <Alert variant="info" className="mb-4 demo-notice">
      <div className="d-flex align-items-center">
        <i className="fas fa-info-circle me-2"></i>
        <div>
          <strong>Demo Mode:</strong> This app is displaying sample news data. 
          In production, it would connect to live news APIs.
        </div>
      </div>
    </Alert>
  );
};

export default DemoNotice;
