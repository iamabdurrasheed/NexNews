import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import NewsList from '../components/NewsList.jsx';
import CategoryNav from '../components/CategoryNav.jsx';
import { useFetchNews } from '../hooks/useFetchNews.jsx';

const CategoryPage = () => {
  const { category } = useParams();
  const { news, loading, error, refetch } = useFetchNews('category', '', category);

  const categoryInfo = {
    technology: {
      title: '💻 Technology News',
      description: 'Latest updates from the world of technology, software, and innovation',
      icon: '💻'
    },
    sports: {
      title: '⚽ Sports News',
      description: 'Breaking news, scores, and highlights from the sports world',
      icon: '⚽'
    },
    business: {
      title: '💼 Business News',
      description: 'Market updates, corporate news, and economic insights',
      icon: '💼'
    },
    health: {
      title: '🏥 Health News',
      description: 'Medical breakthroughs, health tips, and wellness information',
      icon: '🏥'
    },
    entertainment: {
      title: '🎬 Entertainment News',
      description: 'Celebrity news, movie releases, and entertainment industry updates',
      icon: '🎬'
    },
    science: {
      title: '🔬 Science News',
      description: 'Scientific discoveries, research findings, and space exploration',
      icon: '🔬'
    }
  };

  const currentCategory = categoryInfo[category] || {
    title: `${category?.charAt(0).toUpperCase() + category?.slice(1)} News`,
    description: `Latest news from the ${category} category`,
    icon: '📰'
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      <CategoryNav />
      
      <Container className="my-4">
        {/* Breadcrumb Navigation */}
        <Row className="mb-3">
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>
                {category?.charAt(0).toUpperCase() + category?.slice(1)}
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>

        {/* Category Header */}
        <Row className="mb-5">
          <Col>
            <div className="text-center">
              <h1 className="display-4 mb-3">
                {currentCategory.title}
              </h1>
              <p className="lead text-muted">
                {currentCategory.description}
              </p>
              <div className="mt-3">
                <span className="badge bg-primary fs-6">
                  {category?.toUpperCase()}
                </span>
              </div>
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

        {/* Category Stats */}
        {!loading && !error && news.length > 0 && (
          <Row className="mt-5">
            <Col className="text-center">
              <div className="border-top pt-4">
                <p className="text-muted">
                  Showing {news.length} {category} articles
                </p>
                <small className="text-muted">
                  Updated every few minutes • Powered by NewsAPI
                </small>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default CategoryPage;
