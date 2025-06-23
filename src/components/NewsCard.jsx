import React from 'react';
import { Card } from 'react-bootstrap';

const NewsCard = ({ article, onClick }) => {
  const {
    title,
    description,
    urlToImage,
    source,
    publishedAt,
    author
  } = article;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleCardClick = () => {
    if (onClick) {
      onClick(article);
    }
  };

  return (
    <Card className="news-card fade-in" onClick={handleCardClick}>
      {urlToImage && (
        <Card.Img
          variant="top"
          src={urlToImage}
          alt={title}
          className="news-card-img"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      )}
      <Card.Body className="news-card-body">
        <Card.Title className="news-card-title">
          {title}
        </Card.Title>
        {description && (
          <Card.Text className="news-card-description">
            {description}
          </Card.Text>
        )}        <div className="news-card-meta">
          <div>
            <span className="news-source">
              <i className="fas fa-newspaper me-1"></i>
              {source?.name || 'Unknown Source'}
            </span>
            {author && (
              <div className="text-muted small">
                <i className="fas fa-user me-1"></i>
                By {author}
              </div>
            )}
          </div>
          <div className="text-muted small text-end">
            <i className="fas fa-clock me-1"></i>
            {formatDate(publishedAt)}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
