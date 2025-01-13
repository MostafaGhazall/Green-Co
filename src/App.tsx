import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageWrapper from './components/PageWrapper';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Partners from './pages/Partners';
import Portfolio from './pages/Portfolio';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ProductDetails from './components/ProductDetails';
import CategoryPage from './categories/CategoryPage'; // A dynamic category component

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/categories/:category" element={<CategoryPage />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </PageWrapper>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
