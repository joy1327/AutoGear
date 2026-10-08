import React from 'react';
import { businessInfo } from '../data/businessInfo';
import { 
  ShieldCheck, 
  Wrench, 
  MapPin, 
  Layers, 
  Sparkles, 
  Phone, 
  Navigation,
  ArrowRight
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { handleCallNowClick } from '../utils/navigation';

const AboutSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onCallNowClick = (e) => {
    handleCallNowClick(e, navigate, location);
  };

  return (
    <section className="section-padding" id="about" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div className="about-layout-grid">
          {/* Content Column */}
          <div className="about-content-col">
            <span className="section-tag">
              <ShieldCheck size={14} /> Trusted Automotive Partner
            </span>

            <h2 className="section-title text-left" style={{ marginBottom: '18px' }}>
              About Saini Car World
            </h2>

            <p style={{ color: '#4B5563', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '16px' }}>
              <strong>Saini Car World</strong> provides complete automotive services, mechanical repairs, periodic maintenance, and premium car accessories under one roof in Anand, Gujarat.
            </p>

            <p style={{ color: '#4B5563', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '28px' }}>
              We understand that visiting separate shops for engine servicing, electrical fittings, denting, AC care, tyres, and car interior styling is time-consuming. At our Anand center, every automotive requirement is handled with dependable craftsmanship and genuine parts.
            </p>

            {/* Trust Highlights Checklist */}
            <div className="about-highlights-grid">
              <div className="about-highlight-item">
                <div className="highlight-icon-wrap"><Layers size={18} /></div>
                <div>
                  <h4>Complete Automotive Solutions</h4>
                  <p>From routine diagnostics to full mechanical repairs and styling upgrades.</p>
                </div>
              </div>

              <div className="about-highlight-item">
                <div className="highlight-icon-wrap"><Wrench size={18} /></div>
                <div>
                  <h4>Professional Service</h4>
                  <p>Systematic inspection, proper tools, and reliable technical execution.</p>
                </div>
              </div>

              <div className="about-highlight-item">
                <div className="highlight-icon-wrap"><Sparkles size={18} /></div>
                <div>
                  <h4>Quality Parts & Accessories</h4>
                  <p>Tested electrical fittings, durable components, and authentic fitments.</p>
                </div>
              </div>

              <div className="about-highlight-item">
                <div className="highlight-icon-wrap"><MapPin size={18} /></div>
                <div>
                  <h4>Convenient Anand Location</h4>
                  <p>Municipal Shopping Center, Near Indira Gandhi Statue, Lambhavel Road.</p>
                </div>
              </div>

              <div className="about-highlight-item">
                <div className="highlight-icon-wrap"><ShieldCheck size={18} /></div>
                <div>
                  <h4>Multiple Services Under One Roof</h4>
                  <p>Servicing, repairs, AC, wash, tyres, and accessories all in one visit.</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '30px' }}>
              <button 
                type="button" 
                onClick={onCallNowClick} 
                className="btn btn-call"
              >
                <Phone size={16} /> Call Now: {businessInfo.phone}
              </button>
              <a 
                href={businessInfo.googleMapsUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-outline-dark"
              >
                <Navigation size={16} /> Get Directions
              </a>
            </div>
          </div>

          {/* Visual Column */}
          <div className="about-visual-col">
            <div className="about-image-card">
              <img 
                src="/images/workshop-hero.jpg" 
                alt="Saini Car World Service Workshop Anand" 
                className="about-main-img"
                loading="lazy" 
              />
              <div className="about-badge-float">
                <MapPin size={18} color="#E63946" />
                <div>
                  <strong>Municipal Shopping Center</strong>
                  <span>Near Indira Gandhi Statue, Anand</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
