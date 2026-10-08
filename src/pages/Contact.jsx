import React from 'react';
import ContactSection from '../components/ContactSection';
import { businessInfo } from '../data/businessInfo';
import { MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      <div style={{ background: 'linear-gradient(135deg, #111111 0%, #1a2026 100%)', color: '#FFFFFF', padding: '60px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span className="section-tag" style={{ backgroundColor: 'rgba(230, 57, 70, 0.2)', color: '#FFA5AD' }}>
            <MapPin size={14} /> Workshop & Store Location
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '14px', color: '#FFFFFF' }}>
            Contact Saini Car World
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', lineHeight: 1.6 }}>
            Located at Municipal Shopping Center, Near Indira Gandhi Statue, Lambhavel Road, Anand, Gujarat. Call us or visit our center during working hours.
          </p>
        </div>
      </div>

      <ContactSection />
    </div>
  );
};

export default Contact;
