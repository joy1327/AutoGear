import React from 'react';
import AccessoriesSection from '../components/AccessoriesSection';
import AdditionalOfferingsSection from '../components/AdditionalOfferingsSection';
import { businessInfo } from '../data/businessInfo';
import { Shield, Phone, Navigation } from 'lucide-react';

const AccessoriesPage = () => {
  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      <div style={{ background: 'linear-gradient(135deg, #111111 0%, #1a2026 100%)', color: '#FFFFFF', padding: '50px 0 40px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span className="section-tag" style={{ backgroundColor: 'rgba(230, 57, 70, 0.2)', color: '#FFA5AD' }}>
            <Shield size={14} /> Genuine Automotive Stock
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '14px', color: '#FFFFFF' }}>
            Car Accessories & Spare Parts
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', lineHeight: 1.6 }}>
            Upgrade comfort, aesthetics, and performance with authentic seat covers, lighting, mats, batteries, stereo systems, and mechanical components at Saini Car World, Anand.
          </p>
        </div>
      </div>

      <AccessoriesSection />
      <AdditionalOfferingsSection />

      {/* Inquiry Call Banner */}
      <div style={{ backgroundColor: '#1F2428', color: '#FFFFFF', padding: '50px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '680px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '12px', color: '#FFFFFF' }}>
            Looking for a Specific Part or Accessory?
          </h2>
          <p style={{ color: '#D1D5DB', marginBottom: '28px', fontSize: '1.05rem' }}>
            We stock parts for all popular car brands in India. Call our team to verify fitment and availability.
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
              <Navigation size={18} /> Visit Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesPage;
