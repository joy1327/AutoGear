import React, { useState } from 'react';
import { businessInfo } from '../data/businessInfo';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Navigation, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check 
} from 'lucide-react';

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: '',
    serviceType: 'Regular Car Services',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const copyAddress = () => {
    navigator.clipboard?.writeText(businessInfo.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section-padding" id="contact" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <MapPin size={14} /> Visit or Contact
          </span>
          <h2 className="section-title">Get in Touch with Saini Car World</h2>
          <p className="section-description">
            Call us directly for immediate service assistance, quotes, or visit our workshop in Anand, Gujarat.
          </p>
        </div>

        <div className="contact-layout">
          {/* Business Info & CTAs */}
          <div className="contact-card-info" id="contact-phone-card">
            <div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '6px', color: 'var(--color-primary)' }}>
                {businessInfo.name}
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.94rem' }}>
                Complete Automotive Workshop & Car Accessories Center
              </p>
            </div>

            {/* Address */}
            <div className="contact-detail-row">
              <div className="contact-detail-icon">
                <MapPin size={22} />
              </div>
              <div className="contact-detail-content" style={{ flex: 1 }}>
                <h4>Workshop Address</h4>
                <p style={{ fontWeight: 500, color: 'var(--color-text)' }}>
                  {businessInfo.address}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '6px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: 700 }}>
                    Landmark: {businessInfo.landmark}
                  </span>
                  <button 
                    type="button" 
                    onClick={copyAddress}
                    className="copy-address-btn"
                    title="Copy full address"
                  >
                    {copied ? <Check size={12} color="#10B981" /> : <Copy size={12} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-detail-row">
              <div className="contact-detail-icon">
                <Phone size={22} />
              </div>
              <div className="contact-detail-content">
                <h4>Phone Number</h4>
                <a 
                  href={`tel:${businessInfo.phoneRaw}`} 
                  className="contact-phone-link"
                  title="Click to call +91 95375 21273"
                >
                  {businessInfo.phone}
                </a>
                <p style={{ fontSize: '0.82rem', color: '#10B981', fontWeight: 600, marginTop: '2px' }}>
                  ● Tap to call directly on mobile
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="contact-detail-row">
              <div className="contact-detail-icon">
                <Clock size={22} />
              </div>
              <div className="contact-detail-content">
                <h4>Business Hours</h4>
                <p><strong>Monday – Saturday:</strong> 9:30 AM – 7:00 PM</p>
                <p style={{ color: '#EF4444', fontWeight: 600 }}><strong>Sunday:</strong> Closed</p>
              </div>
            </div>

            {/* Prominent Action Buttons: Call Now | Get Directions | Contact Us */}
            <div className="contact-cta-bar">
              <a 
                href={`tel:${businessInfo.phoneRaw}`} 
                className="btn btn-call btn-lg"
                style={{ flex: 1, minWidth: '150px' }}
              >
                <Phone size={18} /> Call +91 95375 21273
              </a>

              <a 
                href={businessInfo.googleMapsNavigationUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-primary btn-lg"
                style={{ flex: 1, minWidth: '150px' }}
                title="Start Turn-by-Turn GPS Navigation"
              >
                <Navigation size={18} /> Start GPS Directions
              </a>
            </div>

            {/* Service Callback / Inquiry Form */}
            <div style={{ marginTop: '16px', paddingTop: '24px', borderTop: '1px solid var(--color-border)' }}>
              <div style={{ marginBottom: '14px' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '4px' }}>
                  Request a Service Callback
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                  Enter your contact details and vehicle model. Our Anand technicians will call you back promptly.
                </p>
              </div>

              {submitted ? (
                <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '20px', borderRadius: '12px', color: '#065F46', display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <CheckCircle2 size={24} color="#10B981" style={{ flexShrink: 0 }} />
                  <div>
                    <strong style={{ fontSize: '1rem', display: 'block', marginBottom: '2px' }}>Callback Request Received!</strong>
                    <p style={{ fontSize: '0.88rem', margin: 0 }}>
                      Thank you, {formData.name || 'valued customer'}. Our service advisor will call you at {formData.phone} during working hours.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div className="form-row">
                    <div className="form-group" style={{ margin: 0 }}>
                      <input
                        type="text"
                        required
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group" style={{ margin: 0 }}>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group" style={{ margin: 0 }}>
                      <input
                        type="text"
                        placeholder="Car Model (e.g. Swift, Creta)"
                        value={formData.carModel}
                        onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group" style={{ margin: 0 }}>
                      <select
                        value={formData.serviceType}
                        name="serviceType"
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="form-select"
                      >
                        <option value="Regular Car Services">Regular Car Services</option>
                        <option value="Mechanical Repairs">Mechanical Repairs</option>
                        <option value="Denting & Painting">Denting & Painting</option>
                        <option value="AC Repair & Service">AC Repair & Service</option>
                        <option value="Car Wash">Car Wash</option>
                        <option value="Tyre & Wheel Services">Tyre & Wheel Services</option>
                        <option value="Car Accessories">Car Accessories</option>
                        <option value="Batteries / Clutch / Radiator">Batteries / Clutch / Radiator</option>
                      </select>
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    style={{ alignSelf: 'flex-start', marginTop: '6px' }}
                  >
                    <Send size={16} /> Send Callback Request
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Map Column */}
          <div>
            <div className="map-container">
              <iframe
                title="Saini Car World Workshop Location Anand"
                src={businessInfo.embedMapUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: 'var(--color-text-muted)', flexWrap: 'wrap', gap: '8px' }}>
              <span>Near Indira Gandhi Statue, Lambhavel Road, Anand</span>
              <a 
                href={businessInfo.googleMapsUrl} 
                target="_blank" 
                rel="noreferrer" 
                style={{ color: 'var(--color-accent)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                Open in Google Maps <Navigation size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
