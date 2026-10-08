import React from 'react';
import { Phone, Navigation, Wrench, MapPin } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { useNavigate, useLocation } from 'react-router-dom';
import { handleCallNowClick } from '../utils/navigation';

const QuickActionBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToServices = (e) => {
    e.preventDefault();
    const elem = document.getElementById('services');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/services');
    }
  };

  const onContactClick = (e) => {
    handleCallNowClick(e, navigate, location);
  };

  return (
    <div className="quick-action-bar-wrapper">
      <div className="container">
        <div className="quick-action-grid">
          {/* Action 1: Call Us Phone Link */}
          <a 
            href={`tel:${businessInfo.phoneRaw}`} 
            className="quick-action-item action-call"
            title={`Call Saini Car World at ${businessInfo.phone}`}
          >
            <div className="action-icon-wrap">
              <Phone size={20} />
            </div>
            <div className="action-text-wrap">
              <span className="action-label">Call Us</span>
              <strong className="action-val">{businessInfo.phone}</strong>
            </div>
          </a>

          {/* Action 2: Get Directions */}
          <a 
            href={businessInfo.googleMapsUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="quick-action-item action-directions"
            title="Open Google Maps Directions"
          >
            <div className="action-icon-wrap">
              <Navigation size={20} />
            </div>
            <div className="action-text-wrap">
              <span className="action-label">Get Directions</span>
              <strong className="action-val">Lambhavel Rd, Anand</strong>
            </div>
          </a>

          {/* Action 3: Our Services */}
          <a 
            href="#services" 
            onClick={scrollToServices} 
            className="quick-action-item action-services"
            title="Browse all 6 car workshop services"
          >
            <div className="action-icon-wrap">
              <Wrench size={20} />
            </div>
            <div className="action-text-wrap">
              <span className="action-label">Our Services</span>
              <strong className="action-val">6 Core Solutions</strong>
            </div>
          </a>

          {/* Action 4: Contact Us */}
          <button 
            type="button" 
            onClick={onContactClick} 
            className="quick-action-item action-contact"
            title="View contact information & map"
          >
            <div className="action-icon-wrap">
              <MapPin size={20} />
            </div>
            <div className="action-text-wrap">
              <span className="action-label">Contact Us</span>
              <strong className="action-val">Visit / Inquire</strong>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickActionBar;
