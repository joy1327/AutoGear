import React from 'react';
import { businessInfo } from '../data/businessInfo';
import { Wrench, MapPin, Phone, ShieldCheck, HeartHandshake, CheckCircle2, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      {/* Header Banner */}
      <div style={{ background: 'linear-gradient(135deg, #111111 0%, #1e242b 100%)', color: '#FFFFFF', padding: '64px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="logo-badge" style={{ margin: '0 auto 18px auto', width: '50px', height: '50px' }}>
            <Wrench size={26} />
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '14px', color: '#FFFFFF' }}>
            About Saini Car World
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', lineHeight: 1.6 }}>
            Reliable car servicing, mechanical repairs, denting & painting, and premium automotive accessories under one roof in Anand, Gujarat.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'center' }} className="about-grid">
            <div>
              <span className="section-tag">Who We Are</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '18px' }}>
                Your Trusted Automotive Partner in Anand
              </h2>
              <p style={{ color: '#4B5563', lineHeight: 1.7, marginBottom: '16px' }}>
                At <strong>Saini Car World</strong>, we provide a complete spectrum of automotive services, maintenance, mechanical repairs, bodywork, and genuine car accessories. Rather than visiting different shops for servicing, electrical fittings, denting, tyres, and interior accessories, our workshop brings every solution together under one roof.
              </p>
              <p style={{ color: '#4B5563', lineHeight: 1.7, marginBottom: '24px' }}>
                Conveniently located at Municipal Shopping Center, Near Indira Gandhi Statue on Lambhavel Road, we cater to car owners across Anand, Vidyanagar, Karamsad, and surrounding regions with honest diagnostic evaluation and skilled mechanical workmanship.
              </p>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a 
                  href={`tel:${businessInfo.phoneRaw}`} 
                  className="btn btn-call"
                >
                  <Phone size={16} /> Call: {businessInfo.phone}
                </a>
                <a 
                  href={businessInfo.googleMapsUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-primary"
                >
                  <Navigation size={16} /> Get Directions
                </a>
              </div>
            </div>

            <div>
              <img 
                src="/images/workshop-hero.jpg" 
                alt="Saini Car World Service Workshop" 
                style={{ borderRadius: '16px', boxShadow: 'var(--shadow-xl)', width: '100%', height: '380px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Workshop Principles */}
      <div className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Approach</span>
            <h2 className="section-title">What Sets Us Apart</h2>
            <p className="section-description">
              Our business is built on approachable service, practical solutions, and quality automotive care.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon-wrap"><Wrench size={24} /></div>
              <div className="why-content">
                <h3>One-Stop Automotive Care</h3>
                <p>From engine oil servicing and AC gas refilling to seat cover customization and body panel painting, everything is handled under one roof.</p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon-wrap"><ShieldCheck size={24} /></div>
              <div className="why-content">
                <h3>Authentic Parts & Accessories</h3>
                <p>We supply verified automotive batteries, radiators, clutch sets, LED headlight bulbs, and durable accessories designed for real driving conditions.</p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon-wrap"><HeartHandshake size={24} /></div>
              <div className="why-content">
                <h3>Customer-Centric Advice</h3>
                <p>We provide transparent explanations of required repairs and recommend only the services your vehicle genuinely needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
