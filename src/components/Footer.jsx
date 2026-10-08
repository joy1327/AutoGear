import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  ArrowRight 
} from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import BrandLogo from './BrandLogo';
import { handleCallNowClick } from '../utils/navigation';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onCallNowClick = (e) => {
    handleCallNowClick(e, navigate, location);
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <Link to="/" style={{ display: 'inline-block', marginBottom: '16px' }}>
              <BrandLogo variant="light" size="normal" showTagline={true} />
            </Link>

            <p className="footer-desc">
              Car service, repairs, maintenance and accessories in Anand, Gujarat. Complete automotive care under one roof.
            </p>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '16px' }}>
              <a 
                href={`tel:${businessInfo.phoneRaw}`} 
                className="btn btn-call btn-sm"
              >
                <Phone size={15} /> Call: {businessInfo.phone}
              </a>
              <a 
                href={businessInfo.googleMapsUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-outline btn-sm"
              >
                <Navigation size={15} /> Get Directions
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Car Services</Link></li>
              <li><Link to="/accessories">Car Accessories</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Workshop Services */}
          <div>
            <h4 className="footer-col-title">Workshop Services</h4>
            <ul className="footer-links-list">
              <li><Link to="/services">Regular Car Services</Link></li>
              <li><Link to="/services">Mechanical Repairs</Link></li>
              <li><Link to="/services">Denting & Painting</Link></li>
              <li><Link to="/services">AC Repair & Service</Link></li>
              <li><Link to="/services">Car Wash & Detailing</Link></li>
              <li><Link to="/services">Tyre & Wheel Services</Link></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="footer-col-title">Workshop Details</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.88rem', color: '#9CA3AF' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="#E63946" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{businessInfo.address}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={18} color="#E63946" style={{ flexShrink: 0 }} />
                <a href={`tel:${businessInfo.phoneRaw}`} style={{ color: '#FFFFFF', fontWeight: 700 }}>
                  {businessInfo.phone}
                </a>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <Clock size={18} color="#E63946" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p><strong>Monday – Saturday:</strong> 9:30 AM – 7:00 PM</p>
                  <p style={{ color: '#EF4444' }}><strong>Sunday:</strong> Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2026 Saini Car World. All Rights Reserved. Anand, Gujarat 388001.</p>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <span>Car Care • Repairs • Maintenance • Accessories</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
