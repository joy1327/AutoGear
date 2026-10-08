import React from 'react';
import { Phone, Navigation, MessageSquare, MapPin } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { useNavigate, useLocation } from 'react-router-dom';
import { handleCallNowClick } from '../utils/navigation';

const FloatingMobileBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="floating-mobile-bar" aria-label="Quick mobile actions">
      <div className="floating-mobile-grid">
        {/* Button 1: Call Phone Dialer */}
        <a 
          href={`tel:${businessInfo.phoneRaw}`} 
          className="floating-action-btn btn-phone"
          aria-label={`Call ${businessInfo.phone}`}
        >
          <Phone size={18} />
          <span>Call Now</span>
        </a>

        {/* Button 2: Directions in Google Maps */}
        <a 
          href={businessInfo.googleMapsUrl} 
          target="_blank" 
          rel="noreferrer" 
          className="floating-action-btn btn-directions"
          aria-label="Get directions to workshop"
        >
          <Navigation size={18} />
          <span>Directions</span>
        </a>

        {/* Button 3: Scroll to Contact Section */}
        <button
          type="button"
          onClick={(e) => handleCallNowClick(e, navigate, location)}
          className="floating-action-btn btn-contact"
          aria-label="View Contact and Hours"
        >
          <MapPin size={18} />
          <span>Contact</span>
        </button>
      </div>
    </div>
  );
};

export default FloatingMobileBar;
