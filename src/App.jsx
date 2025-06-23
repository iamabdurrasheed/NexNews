import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import NotFound from './pages/NotFound.jsx';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import custom styles
import './assets/styles.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App d-flex flex-column min-vh-100">
          <Header />
          
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
