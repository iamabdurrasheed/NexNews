import axios from 'axios';
import { mockNewsData, getMockDataByCategory, getMockSearchResults } from './mockData.js';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY || '1dae9253e35f4d12a00d3ba817c73ce3';
const BASE_URL = 'https://newsapi.org/v2';

// CORS proxy for production
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';

// Create axios instance with default config
const api = axios.create({
  timeout: 10000,
});

// Helper function to build URL with proxy
const buildUrl = (endpoint, params) => {
  const url = new URL(endpoint, BASE_URL);
  url.searchParams.append('apiKey', API_KEY);
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.append(key, value);
    }
  });

  // Use CORS proxy for production
  const finalUrl = window.location.hostname === 'localhost' 
    ? url.toString() 
    : `${CORS_PROXY}${encodeURIComponent(url.toString())}`;
  
  return finalUrl;
};

// API functions
export const fetchTopHeadlines = async (category = '', country = 'us') => {
  try {
    const url = buildUrl('/top-headlines', {
      category: category || undefined,
      country,
      pageSize: 20,
    });
    
    const response = await api.get(url);
    
    // Check if response has valid articles
    if (response.data && response.data.articles && response.data.articles.length > 0) {
      return response.data;
    } else {
      console.log('API returned empty results, using mock data');
      return getMockDataByCategory(category);
    }
  } catch (error) {
    console.error('Error fetching top headlines, using mock data:', error);
    // Return mock data as fallback
    return getMockDataByCategory(category);
  }
};

export const searchNews = async (query, sortBy = 'publishedAt') => {
  try {
    const url = buildUrl('/everything', {
      q: query,
      sortBy,
      pageSize: 20,
      language: 'en',
    });
    
    const response = await api.get(url);
    
    // Check if response has valid articles
    if (response.data && response.data.articles && response.data.articles.length > 0) {
      return response.data;
    } else {
      console.log('Search API returned empty results, using mock data');
      return getMockSearchResults(query);
    }
  } catch (error) {
    console.error('Error searching news, using mock data:', error);
    // Return mock search results as fallback
    return getMockSearchResults(query);
  }
};

export const fetchNewsByCategory = async (category) => {
  try {
    const url = buildUrl('/top-headlines', {
      category,
      country: 'us',
      pageSize: 20,
    });
    
    const response = await api.get(url);
    
    // Check if response has valid articles
    if (response.data && response.data.articles && response.data.articles.length > 0) {
      return response.data;
    } else {
      console.log('Category API returned empty results, using mock data');
      return getMockDataByCategory(category);
    }
  } catch (error) {
    console.error('Error fetching news by category, using mock data:', error);
    // Return mock data as fallback
    return getMockDataByCategory(category);
  }
};

export default api;
