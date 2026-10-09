import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  ChevronRight,
  Navigation
} from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import BrandLogo from './BrandLogo';
import { handleCallNowClick } from '../utils/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onCallNowClick = (e) => {
    handleCallNowClick(e, navigate, location);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Business Notification Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-item">
            <MapPin size={14} />
            <span>{businessInfo.landmark}, Anand, Gujarat</span>
          </div>
          <div className="top-bar-item">
            <Clock size={14} />
            <span>{businessInfo.hours}</span>
          </div>
          <div className="top-bar-item">
            <a href={`tel:${businessInfo.phoneRaw}`} className="top-bar-link">
              <Phone size={14} />
              <span>Call: <strong>{businessInfo.phone}</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`navbar-sticky ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-main">
            {/* Logo */}
            <Link to="/" className="brand-link" aria-label="Saini Car World Home">
              <div className="desktop-logo-wrap">
                <BrandLogo size="normal" showTagline={true} />
              </div>
              <div className="mobile-logo-wrap">
                <BrandLogo size="small" showTagline={false} />
              </div>
            </Link>

            {/* Desktop Navigation Links (Centered / Right Aligned) */}
            <nav className="desktop-nav" aria-label="Main Navigation">
              <ul className="nav-links">
                <li>
                  <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/accessories" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    Accessories
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/why-choose-us" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    Why Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>

            {/* Desktop & Mobile Actions */}
            <div className="nav-actions">
              {/* Desktop Call Now Button (Scrolls to Contact Section) */}
              <button 
                type="button"
                onClick={onCallNowClick}
                className="desktop-call-now-btn"
                title="View contact information & phone"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </button>

              {/* Mobile Direct Phone Dialer Button */}
              <a 
                href={`tel:${businessInfo.phoneRaw}`} 
                className="mobile-header-call-btn"
                title={`Call ${businessInfo.phone}`}
                aria-label="Direct Phone Call"
              >
                <Phone size={17} />
                <span>Call</span>
              </a>

              {/* Mobile Hamburger Toggle */}
              <button 
                type="button" 
                className="hamburger-btn" 
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="mobile-drawer-overlay" 
            onClick={() => setIsMobileMenuOpen(false)} 
            aria-hidden="true"
          />
          <div className="mobile-drawer" role="dialog" aria-label="Mobile Navigation">
            <div className="mobile-drawer-header">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                <BrandLogo size="small" showTagline={false} />
              </Link>
              <button 
                type="button" 
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
                className="drawer-close-btn"
              >
                <X size={22} />
              </button>
            </div>

            <ul className="mobile-nav-list">
              <li>
                <Link to="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  <span>Home</span>
                  <ChevronRight size={16} />
                </Link>
              </li>
              <li>
                <Link to="/about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  <span>About</span>
                  <ChevronRight size={16} />
                </Link>
              </li>
              <li>
                <Link to="/services" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  <span>Services</span>
                  <ChevronRight size={16} />
                </Link>
              </li>
              <li>
                <Link to="/accessories" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  <span>Accessories</span>
                  <ChevronRight size={16} />
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  <span>Why Choose Us</span>
                  <ChevronRight size={16} />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  <span>Contact</span>
                  <ChevronRight size={16} />
                </Link>
              </li>
            </ul>

            <div className="mobile-drawer-footer nav-drawer-footer">
              <button 
                type="button"
                onClick={onCallNowClick}
                className="btn btn-call mobile-cta-btn"
              >
                <Phone size={17} /> Call Now
              </button>
              <a 
                href={businessInfo.googleMapsUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-outline-dark mobile-cta-btn"
              >
                <Navigation size={16} /> Get Directions
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
