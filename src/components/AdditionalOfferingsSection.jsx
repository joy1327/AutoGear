import React from 'react';
import { additionalOfferings } from '../data/additionalOfferings';
import { businessInfo } from '../data/businessInfo';
import { Layers, Phone } from 'lucide-react';

const AdditionalOfferingsSection = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Layers size={14} /> Critical Systems & Replacements
          </span>
          <h2 className="section-title">Specialized Parts & Mechanical Work</h2>
          <p className="section-description">
            Need urgent battery replacement, clutch servicing, radiator flushes, or suspension overhauls? Our workshop is equipped to assist you.
          </p>
        </div>

        <div className="offerings-grid">
          {additionalOfferings.map((item) => (
            <div key={item.id} className="offering-card">
              <img 
                src={item.image} 
                alt={item.title} 
                className="offering-thumb"
                loading="lazy" 
              />
              <div className="offering-body">
                <span className="offering-cat">{item.category}</span>
                <h3 className="offering-title">{item.title}</h3>
                <p className="offering-desc">{item.description}</p>
                
                <a 
                  href={`tel:${businessInfo.phoneRaw}`} 
                  className="btn btn-outline-dark btn-sm"
                  style={{ width: '100%' }}
                >
                  <Phone size={14} /> {item.action}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalOfferingsSection;
