import React, { useState } from 'react';
import { Row, Col, Container, Modal, Button, Spinner, Alert } from 'react-bootstrap';
import NewsCard from './NewsCard.jsx';

const NewsList = ({ news, loading, error, onRefresh }) => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (article) => {
    setSelectedArticle(article);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedArticle(null);
  };

  const handleReadMore = () => {
    if (selectedArticle?.url) {
      window.open(selectedArticle.url, '_blank', 'noopener,noreferrer');
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <Container>
        <div className="loading-container">
          <div className="text-center">
            <Spinner animation="border" variant="primary" className="mb-3" />
            <p>Loading news...</p>
          </div>
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <div className="error-container">
          <div className="error-icon">⚠️</div>
          <h4>Oops! Something went wrong</h4>
          <p>{error}</p>
          {onRefresh && (
            <Button variant="primary" onClick={onRefresh}>
              Try Again
            </Button>
          )}
        </div>
      </Container>
    );
  }

  if (!news || news.length === 0) {
    return (
      <Container>
        <div className="error-container">
          <div className="error-icon">📰</div>
          <h4>No news found</h4>
          <p>Try adjusting your search terms or category.</p>
          {onRefresh && (
            <Button variant="primary" onClick={onRefresh}>
              Refresh
            </Button>
          )}
        </div>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Row>
          {news.map((article, index) => (
            <Col key={`${article.url}-${index}`} xs={12} sm={6} lg={4} className="mb-4">
              <NewsCard article={article} onClick={handleCardClick} />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Article Modal */}
      <Modal 
        show={showModal} 
        onHide={handleCloseModal} 
        size="lg" 
        centered
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-truncate">
            {selectedArticle?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedArticle?.urlToImage && (
            <img
              src={selectedArticle.urlToImage}
              alt={selectedArticle.title}
              className="modal-img"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          )}
          
          <div className="mb-3">
            <strong className="text-primary">
              {selectedArticle?.source?.name || 'Unknown Source'}
            </strong>
            {selectedArticle?.author && (
              <span className="text-muted ms-2">
                • By {selectedArticle.author}
              </span>
            )}
            <div className="text-muted small">
              {selectedArticle?.publishedAt && formatDate(selectedArticle.publishedAt)}
            </div>
          </div>

          {selectedArticle?.description && (
            <p className="lead">{selectedArticle.description}</p>
          )}

          {selectedArticle?.content && (
            <div>
              <h6>Content:</h6>
              <p>{selectedArticle.content}</p>
            </div>
          )}

          {!selectedArticle?.content && !selectedArticle?.description && (
            <Alert variant="info">
              <p>Click "Read Full Article" to view the complete story on the original website.</p>
            </Alert>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          {selectedArticle?.url && (
            <Button variant="primary" onClick={handleReadMore}>
              Read Full Article
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewsList;
