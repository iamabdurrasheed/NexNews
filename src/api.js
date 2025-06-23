import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY || '1dae9253e35f4d12a00d3ba817c73ce3';
const BASE_URL = 'https://newsapi.org/v2';

// Create axios instance with default config
const api = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY,
  },
});

// API functions
export const fetchTopHeadlines = async (category = '', country = 'us') => {
  try {
    const response = await api.get('/top-headlines', {
      params: {
        category: category || undefined,
        country,
        pageSize: 20,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching top headlines:', error);
    throw error;
  }
};

export const searchNews = async (query, sortBy = 'publishedAt') => {
  try {
    const response = await api.get('/everything', {
      params: {
        q: query,
        sortBy,
        pageSize: 20,
        language: 'en',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching news:', error);
    throw error;
  }
};

export const fetchNewsByCategory = async (category) => {
  try {
    const response = await api.get('/top-headlines', {
      params: {
        category,
        country: 'us',
        pageSize: 20,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching news by category:', error);
    throw error;
  }
};

export default api;
