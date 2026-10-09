import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingMobileBar from './components/FloatingMobileBar';
import ScrollToTopButton from './components/ScrollToTopButton';
import Toast from './components/Toast';
import WhatsAppWidget from './components/WhatsAppWidget';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import AccessoriesPage from './pages/AccessoriesPage';
import WhyUsPage from './pages/WhyUsPage';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import NotFound from './pages/NotFound';

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

// Global scroll reveal observer for smooth entrance animations
const ScrollRevealObserver = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll(
        '.reveal-on-scroll, .section-header, .feature-card, .category-card, .service-card, .offering-card, .why-us-card, .contact-card, .review-card, .product-card'
      ).forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08
      }
    );

    const observeElements = () => {
      const targets = document.querySelectorAll(
        '.reveal-on-scroll, .section-header, .feature-card, .category-card, .service-card, .offering-card, .why-us-card, .contact-card, .review-card, .product-card'
      );
      targets.forEach((target) => {
        if (!target.classList.contains('is-revealed')) {
          observer.observe(target);
        }
      });
    };

    const timer = setTimeout(observeElements, 50);

    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
};

function App() {
  return (
    <ShopProvider>
      <Router>
        <ScrollToTop />
        <ScrollRevealObserver />
        <div className="site-wrapper">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/accessories" element={<AccessoriesPage />} />
              <Route path="/categories" element={<Navigate to="/accessories" replace />} />
              <Route path="/why-choose-us" element={<WhyUsPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          {/* Floating Mobile Action Bar */}
          <FloatingMobileBar />
          {/* Floating WhatsApp Quick Support Widget */}
          <WhatsAppWidget />
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
