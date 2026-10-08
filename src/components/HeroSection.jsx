import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Navigation, Wrench, Shield, MapPin, Clock, ArrowRight } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { handleCallNowClick } from '../utils/navigation';

const HeroSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onCallNowClick = (e) => {
    handleCallNowClick(e, navigate, location);
  };

  const scrollToServices = (e) => {
    e.preventDefault();
    const elem = document.getElementById('services');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/services');
    }
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-location-chip">
            <MapPin size={14} /> Municipal Shopping Center • Anand, Gujarat
          </div>

          <h1 className="hero-headline">
            Complete Car Care & <span>Accessories</span> Under One Roof
          </h1>

          <p className="hero-subheading">
            Professional car servicing, repairs, maintenance and automotive accessories in Anand, Gujarat.
          </p>

          <div className="hero-buttons">
            {/* Primary CTA */}
            <a 
              href="#services" 
              onClick={scrollToServices}
              className="btn btn-primary btn-lg"
            >
              <Wrench size={18} /> Explore Services
            </a>

            {/* Secondary CTA */}
            <button 
              type="button" 
              onClick={onCallNowClick}
              className="btn btn-outline btn-lg"
            >
              Contact Us <ArrowRight size={18} />
            </button>

            {/* Additional Quick Action: Call Now */}
            <button 
              type="button" 
              onClick={onCallNowClick}
              className="btn btn-call btn-lg"
            >
              <Phone size={18} /> Call Now
            </button>
          </div>

          <div className="hero-meta-bar">
            <div className="hero-meta-item">
              <MapPin size={16} />
              <span>{businessInfo.address}</span>
            </div>
            <div className="hero-meta-item">
              <Clock size={16} />
              <span>{businessInfo.hours}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
