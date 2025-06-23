// Mock news data for fallback when API fails
export const mockNewsData = {
  status: "ok",
  totalResults: 10,
  articles: [
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title: "Breaking: Major Tech Conference Announces Revolutionary AI Breakthrough",
      description: "Tech leaders unveil groundbreaking artificial intelligence technology that promises to transform industries worldwide.",
      url: "https://example.com/tech-news-1",
      urlToImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      publishedAt: new Date().toISOString(),
      content: "Technology companies have announced a major breakthrough in artificial intelligence..."
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "CNN Sports",
      title: "World Cup 2026: Stadium Construction Reaches Major Milestone",
      description: "Construction teams celebrate as key venues for the upcoming World Cup reach completion ahead of schedule.",
      url: "https://example.com/sports-news-1",
      urlToImage: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=500&h=300&fit=crop",
      publishedAt: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
      content: "Stadium construction for the 2026 World Cup has reached a significant milestone..."
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: "Reuters Business",
      title: "Global Markets Show Strong Recovery Following Economic Reforms",
      description: "International markets respond positively to new economic policies, showing signs of sustained growth.",
      url: "https://example.com/business-news-1",
      urlToImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop",
      publishedAt: new Date(Date.now() - 7200000).toISOString(), // 2 hours ago
      content: "Global financial markets have shown remarkable resilience and growth..."
    },
    {
      source: { id: "health-today", name: "Health Today" },
      author: "Dr. Sarah Johnson",
      title: "New Medical Research Reveals Promising Treatment for Rare Diseases",
      description: "Scientists discover innovative therapeutic approach that could help millions of patients worldwide.",
      url: "https://example.com/health-news-1",
      urlToImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      publishedAt: new Date(Date.now() - 10800000).toISOString(), // 3 hours ago
      content: "Medical researchers have made a significant breakthrough in treating rare diseases..."
    },
    {
      source: { id: "entertainment-weekly", name: "Entertainment Weekly" },
      author: "Emma Williams",
      title: "Hollywood's Biggest Stars Unite for Charity Gala Event",
      description: "A-list celebrities gather for an exclusive charity event raising funds for global education initiatives.",
      url: "https://example.com/entertainment-news-1",
      urlToImage: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=300&fit=crop",
      publishedAt: new Date(Date.now() - 14400000).toISOString(), // 4 hours ago
      content: "The entertainment industry came together for a spectacular charity gala..."
    },
    {
      source: { id: "science-daily", name: "Science Daily" },
      author: "Dr. Michael Chen",
      title: "Space Exploration Reaches New Heights with Mars Mission Success",
      description: "International space agency celebrates successful landing of advanced rover on Mars surface.",
      url: "https://example.com/science-news-1",
      urlToImage: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=500&h=300&fit=crop",
      publishedAt: new Date(Date.now() - 18000000).toISOString(), // 5 hours ago
      content: "The latest Mars mission has achieved unprecedented success..."
    },
    {
      source: { id: "tech-crunch", name: "TechCrunch" },
      author: "Alex Thompson",
      title: "Startup Develops Revolutionary Clean Energy Solution",
      description: "Young entrepreneurs create innovative technology that could solve global energy challenges.",
      url: "https://example.com/tech-news-2",
      urlToImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=300&fit=crop",
      publishedAt: new Date(Date.now() - 21600000).toISOString(), // 6 hours ago
      content: "A groundbreaking clean energy startup has developed technology..."
    },
    {
      source: { id: "sports-center", name: "Sports Center" },
      author: "Mike Rodriguez",
      title: "Olympic Training Facilities Open to Public for First Time",
      description: "World-class athletic facilities become accessible to community members and aspiring athletes.",
      url: "https://example.com/sports-news-2",
      urlToImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      publishedAt: new Date(Date.now() - 25200000).toISOString(), // 7 hours ago
      content: "Olympic-grade training facilities have opened their doors to the public..."
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "Jennifer Park",
      title: "Remote Work Trends Reshape Modern Business Landscape",
      description: "Companies adapt to new work models as remote employment becomes the new standard.",
      url: "https://example.com/business-news-2",
      urlToImage: "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=500&h=300&fit=crop",
      publishedAt: new Date(Date.now() - 28800000).toISOString(), // 8 hours ago
      content: "The business world continues to evolve with remote work practices..."
    },
    {
      source: { id: "wellness-mag", name: "Wellness Magazine" },
      author: "Dr. Lisa Zhang",
      title: "Mental Health Awareness Reaches Record High Among Young Adults",
      description: "New survey reveals positive trends in mental health awareness and support-seeking behavior.",
      url: "https://example.com/health-news-2",
      urlToImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      publishedAt: new Date(Date.now() - 32400000).toISOString(), // 9 hours ago
      content: "Mental health awareness has reached unprecedented levels among young adults..."
    }
  ]
};

export const getMockDataByCategory = (category) => {
  if (!category || category === '') {
    return mockNewsData;
  }

  const categoryKeywords = {
    technology: ['tech', 'ai', 'startup', 'innovation'],
    sports: ['sports', 'olympic', 'world cup', 'athletic'],
    business: ['business', 'market', 'economic', 'remote work'],
    health: ['health', 'medical', 'mental health', 'wellness'],
    entertainment: ['entertainment', 'hollywood', 'celebrity'],
    science: ['science', 'space', 'research', 'mars']
  };

  const keywords = categoryKeywords[category] || [];
  
  const filteredArticles = mockNewsData.articles.filter(article => 
    keywords.some(keyword => 
      article.title.toLowerCase().includes(keyword) || 
      article.description.toLowerCase().includes(keyword)
    )
  );

  return {
    ...mockNewsData,
    articles: filteredArticles.length > 0 ? filteredArticles : mockNewsData.articles.slice(0, 3)
  };
};

export const getMockSearchResults = (query) => {
  const searchResults = mockNewsData.articles.filter(article =>
    article.title.toLowerCase().includes(query.toLowerCase()) ||
    article.description.toLowerCase().includes(query.toLowerCase()) ||
    article.content.toLowerCase().includes(query.toLowerCase())
  );

  return {
    ...mockNewsData,
    articles: searchResults.length > 0 ? searchResults : mockNewsData.articles.slice(0, 2)
  };
};
