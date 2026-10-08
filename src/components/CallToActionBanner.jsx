import React from 'react';
import { Phone, Navigation, Clock, ShieldCheck } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

const CallToActionBanner = ({
  tag = "Direct Workshop Assistance",
  title = "Ready to Schedule Your Car Service or Upgrade?",
  subtitle = "Have questions about accessories fitment or servicing? Call our Anand team directly or visit our center.",
  primaryActionText = `Call: ${businessInfo.phone}`,
  secondaryActionText = "Get Directions"
}) => {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-banner-card">
          <div className="cta-banner-content">
            <span className="cta-banner-tag">
              <ShieldCheck size={14} /> {tag}
            </span>
            <h2 className="cta-banner-title">{title}</h2>
            <p className="cta-banner-desc">{subtitle}</p>
            
            <div className="cta-banner-meta">
              <div className="cta-meta-item">
                <Clock size={15} />
                <span>{businessInfo.hours}</span>
              </div>
              <div className="cta-meta-item">
                <Navigation size={15} />
                <span>{businessInfo.landmark}, Anand</span>
              </div>
            </div>
          </div>

          <div className="cta-banner-actions">
            <a 
              href={`tel:${businessInfo.phoneRaw}`} 
              className="btn btn-call btn-lg cta-btn"
            >
              <Phone size={18} /> {primaryActionText}
            </a>
            <a 
              href={businessInfo.googleMapsUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-primary btn-lg cta-btn"
            >
              <Navigation size={18} /> {secondaryActionText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBanner;
