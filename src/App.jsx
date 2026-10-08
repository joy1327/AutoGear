import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingMobileBar from './components/FloatingMobileBar';
import ScrollToTopButton from './components/ScrollToTopButton';
import Toast from './components/Toast';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import AccessoriesPage from './pages/AccessoriesPage';
import Categories from './pages/Categories';
import WhyUsPage from './pages/WhyUsPage';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';

// Scroll to top helper on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const elem = document.querySelector(hash);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <ShopProvider>
      <Router>
        <ScrollToTop />
        <div className="site-wrapper">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/accessories" element={<AccessoriesPage />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/why-choose-us" element={<WhyUsPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          {/* Floating Mobile Action Bar */}
          <FloatingMobileBar />
          {/* Floating Scroll to Top Arrow Button */}
          <ScrollToTopButton />
          {/* Global User Feedback Toast */}
          <Toast />
        </div>
      </Router>
    </ShopProvider>
  );
}

export default App;
