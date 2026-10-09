import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Sparkles, MapPin, ArrowLeft, Search } from 'lucide-react';
import SEO from '../components/SEO';
import { businessInfo } from '../data/businessInfo';

const NotFound = () => {
  return (
    <div className="not-found-page" style={{ padding: '80px 20px', textAlign: 'center', minHeight: '65vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {/* noindex to prevent indexing 404 pages */}
      <SEO 
        title="404 - Page Not Found" 
        description="The page you are looking for does not exist on Saini Car World."
        noindex={true}
      />

      <div className="container" style={{ maxWidth: '640px' }}>
        <div style={{ display: 'inline-block', padding: '8px 18px', background: 'rgba(230, 57, 70, 0.1)', color: 'var(--color-accent)', borderRadius: '20px', fontWeight: 800, fontSize: '0.9rem', marginBottom: '16px' }}>
          ERROR 404
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '16px', color: 'var(--color-primary)' }}>
          Page Not Found
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '32px' }}>
          We could not find the page you were looking for. It might have been moved, renamed, or is temporarily unavailable. Explore our core automotive workshop services and genuine accessories below:
        </p>

        {/* Helpful navigation recovery buttons */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '36px' }}>
          <Link to="/" className="btn btn-primary">
            <ArrowLeft size={16} /> Return to Home
          </Link>
          <Link to="/services" className="btn btn-outline-dark">
            <Wrench size={16} /> Car Services
          </Link>
          <Link to="/accessories" className="btn btn-outline-dark">
            <Sparkles size={16} /> Accessories & Spares
          </Link>
          <Link to="/contact" className="btn btn-outline-dark">
            <MapPin size={16} /> Contact Workshop
          </Link>
        </div>

        <div style={{ padding: '16px', background: 'var(--color-bg-light)', borderRadius: '12px', border: '1px solid var(--color-border)', fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
          Need immediate assistance? Call us directly at <a href={`tel:${businessInfo.phoneRaw}`} style={{ color: 'var(--color-accent)', fontWeight: 700 }}>{businessInfo.phone}</a>.
        </div>
      </div>
    </div>
  );
};

export default NotFound;
