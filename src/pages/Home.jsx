import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSearchParams, useLocation } from 'react-router-dom';
import NewsList from '../components/NewsList.jsx';
import CategoryNav from '../components/CategoryNav.jsx';

import { useFetchNews } from '../hooks/useFetchNews.jsx';

const Home = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const searchQuery = searchParams.get('search');
  const [currentSearch, setCurrentSearch] = useState(searchQuery || '');

  // Determine fetch type and parameters
  const fetchType = searchQuery ? 'search' : 'headlines';
  const { news, loading, error, refetch } = useFetchNews(fetchType, searchQuery || '');

  useEffect(() => {
    setCurrentSearch(searchQuery || '');
  }, [searchQuery]);

  return (
    <div style={{ paddingTop: '80px' }}>
      <CategoryNav />
      
      <Container className="my-4">
        {/* Hero Section */}
        <Row className="mb-5">
          <Col>
            <div className="text-center">
              <h1 className="display-4 mb-3">
                {currentSearch ? `Search Results for "${currentSearch}"` : 'Latest News Headlines'}
              </h1>
              <p className="lead text-muted">
                {currentSearch 
                  ? `Showing news articles matching your search query` 
                  : 'Stay updated with breaking news from around the world'
                }
              </p>
              {error && (
                <div className="mt-3">
                  <Button variant="outline-primary" onClick={refetch}>
                    🔄 Refresh News
                  </Button>
                </div>
              )}
            </div>
          </Col>
        </Row>

        {/* News Grid */}
        <Row>
          <Col>
            <NewsList 
              news={news} 
              loading={loading} 
              error={error} 
              onRefresh={refetch}
            />
          </Col>
        </Row>

        {/* Additional Information */}
        {!loading && !error && news.length > 0 && (
          <Row className="mt-5">
            <Col className="text-center">
              <div className="border-top pt-4">
                <p className="text-muted">
                  Showing {news.length} articles
                  {currentSearch && ` for "${currentSearch}"`}
                </p>
                <small className="text-muted">
                  News data provided by NewsAPI.org • Updated every few minutes
                </small>
              </div>
            </Col>
          </Row>        )}
      </Container>

      {/* Feedback Form */}
      
    </div>
  );
};

export default Home;
