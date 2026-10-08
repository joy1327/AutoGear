import React from 'react';
import { businessInfo } from '../data/businessInfo';
import PageBanner from '../components/PageBanner';
import CallToActionBanner from '../components/CallToActionBanner';
import { Wrench, ShieldCheck, HeartHandshake, CheckCircle2, Navigation, Phone, Award, Users, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page">
      {/* Standardized Page Banner */}
      <PageBanner 
        tag="Trusted Anand Workshop"
        tagIcon={ShieldCheck}
        title="About Saini Car World"
        subtitle="Reliable car servicing, mechanical repairs, denting & painting, and premium automotive accessories under one roof in Anand, Gujarat."
        breadcrumbs={[{ label: 'About Us' }]}
        showActions={true}
      />

      {/* Overview Section */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="about-layout-grid">
            <div className="about-content-col">
              <span className="section-tag">
                <ShieldCheck size={14} /> Who We Are
              </span>
              <h2 className="section-title text-left" style={{ marginBottom: '18px' }}>
                Your Trusted Automotive Partner in Anand
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '16px', fontSize: '1.02rem' }}>
                At <strong>Saini Car World</strong>, we provide a complete spectrum of automotive services, periodic maintenance, mechanical repairs, precision bodywork, and genuine car accessories. Rather than visiting different shops across town for servicing, electrical fittings, denting, tyres, and interior accessories, our workshop brings every solution together under one roof.
              </p>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '28px', fontSize: '0.98rem' }}>
                Conveniently located at Municipal Shopping Center, Near Indira Gandhi Statue on Lambhavel Road, we cater to car owners across Anand, Vidyanagar, Karamsad, and surrounding regions with honest diagnostic evaluation and skilled mechanical workmanship.
              </p>

              {/* Trust Metric Badges */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '32px' }}>
                <div style={{ background: 'var(--color-bg-light)', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', textAlign: 'center' }}>
                  <Award size={22} color="var(--color-accent)" style={{ margin: '0 auto 6px auto' }} />
                  <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--color-primary)' }}>100%</strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>Genuine Parts</span>
                </div>
                <div style={{ background: 'var(--color-bg-light)', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', textAlign: 'center' }}>
                  <Users size={22} color="var(--color-accent)" style={{ margin: '0 auto 6px auto' }} />
                  <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--color-primary)' }}>Thousands</strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>Happy Drivers</span>
                </div>
                <div style={{ background: 'var(--color-bg-light)', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', textAlign: 'center' }}>
                  <Clock size={22} color="var(--color-accent)" style={{ margin: '0 auto 6px auto' }} />
                  <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--color-primary)' }}>6 Days/Wk</strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>9:30AM - 7PM</span>
                </div>
              </div>

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

            <div className="about-visual-col">
              <div className="about-image-card">
                <img 
                  src="/images/workshop-hero.jpg" 
                  alt="Saini Car World Service Workshop Anand" 
                  className="about-main-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Principles */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <ShieldCheck size={14} /> Our Approach
            </span>
            <h2 className="section-title">What Sets Saini Car World Apart</h2>
            <p className="section-description">
              Our business is built on approachable service, practical solutions, and quality automotive care you can trust.
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
      </section>

      {/* Unified Bottom Inquiries Banner */}
      <CallToActionBanner 
        tag="Visit Saini Car World"
        title="Looking for Honest Automotive Guidance in Anand?"
        subtitle="Drive to our center near Indira Gandhi Statue, Lambhavel Road or call our technical team directly for friendly service."
      />
    </div>
  );
};

export default About;
