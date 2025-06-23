import { useState, useEffect } from 'react';
import { fetchTopHeadlines, fetchNewsByCategory, searchNews } from '../api.js';

export const useFetchNews = (type = 'headlines', query = '', category = '') => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        let response;
        
        switch (type) {
          case 'search':
            if (query.trim()) {
              response = await searchNews(query);
            } else {
              response = await fetchTopHeadlines();
            }
            break;
          case 'category':
            response = await fetchNewsByCategory(category);
            break;
          default:
            response = await fetchTopHeadlines(category);
        }
        
        setNews(response.articles || []);
      } catch (err) {
        setError(err.message || 'Failed to fetch news');
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type, query, category]);

  const refetch = () => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        let response;
        
        switch (type) {
          case 'search':
            if (query.trim()) {
              response = await searchNews(query);
            } else {
              response = await fetchTopHeadlines();
            }
            break;
          case 'category':
            response = await fetchNewsByCategory(category);
            break;
          default:
            response = await fetchTopHeadlines(category);
        }
        
        setNews(response.articles || []);
      } catch (err) {
        setError(err.message || 'Failed to fetch news');
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  };

  return { news, loading, error, refetch };
};
