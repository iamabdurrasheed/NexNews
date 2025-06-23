import React, { useState, useRef } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      if (onSearch) {
        onSearch(searchTerm);
      }
      // Navigate to home with search query
      navigate(`/?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };  return (
    <Form onSubmit={handleSubmit} className="search-container">
      <InputGroup className="search-input-group">
        <Form.Control
          ref={searchInputRef}
          type="text"
          placeholder="Search news..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          className="search-input rounded-start"
          aria-label="Search news"
          style={{
            border: '2px solid #e9ecef',
            borderRight: 'none',
            fontSize: '16px',
            padding: '12px 16px'
          }}
        />
        <Button 
          variant="primary" 
          type="submit"
          className="search-btn rounded-end"
          disabled={!searchTerm.trim()}
          style={{
            border: '2px solid #0d6efd',
            borderLeft: 'none',
            padding: '12px 20px',
            backgroundColor: '#0d6efd',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <i className="fas fa-search"></i>
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
