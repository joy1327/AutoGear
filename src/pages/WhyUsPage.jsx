import React from 'react';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import { businessInfo } from '../data/businessInfo';
import { ShieldCheck, Phone, Navigation } from 'lucide-react';

const WhyUsPage = () => {
  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      <div style={{ background: 'linear-gradient(135deg, #111111 0%, #1a2026 100%)', color: '#FFFFFF', padding: '60px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span className="section-tag" style={{ backgroundColor: 'rgba(230, 57, 70, 0.2)', color: '#FFA5AD' }}>
            <ShieldCheck size={14} /> Local Excellence in Anand
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '14px', color: '#FFFFFF' }}>
            Why Choose Saini Car World?
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', lineHeight: 1.6 }}>
            Building long-term customer trust with multi-service automotive solutions, genuine components, and experienced technical diagnostics.
          </p>
        </div>
      </div>

      <WhyChooseUsSection />

      {/* Workshop Location Banner */}
      <div style={{ backgroundColor: '#1F2428', color: '#FFFFFF', padding: '50px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '680px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '12px', color: '#FFFFFF' }}>
            Visit Our Workshop in Anand
          </h2>
          <p style={{ color: '#D1D5DB', marginBottom: '28px', fontSize: '1.05rem' }}>
            {businessInfo.address}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a 
              href={`tel:${businessInfo.phoneRaw}`} 
              className="btn btn-call btn-lg"
            >
              <Phone size={18} /> Call: {businessInfo.phone}
            </a>
            <a 
              href={businessInfo.googleMapsUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-primary btn-lg"
            >
              <Navigation size={18} /> Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsPage;
