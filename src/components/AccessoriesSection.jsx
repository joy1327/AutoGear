import React, { useState } from 'react';
import { categories } from '../data/categories';
import { businessInfo } from '../data/businessInfo';
import { Shield, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccessoriesSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = categories.filter((cat) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'accessories') return cat.type === 'accessories';
    if (activeTab === 'parts') return cat.type === 'parts';
    if (activeTab === 'audio') return cat.type === 'audio-electronics';
    if (activeTab === 'care') return cat.type === 'care';
    return true;
  });

  return (
    <section className="section-padding" id="accessories" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Shield size={14} /> Genuine Upgrades & Replacement Parts
          </span>
          <h2 className="section-title">Car Accessories & Parts Range</h2>
          <p className="section-description">
            Explore authentic automotive accessories and mechanical components available in stock at Saini Car World, Anand.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '36px' }}>
          <button
            type="button"
            className={`btn btn-sm ${activeTab === 'all' ? 'btn-primary' : 'btn-outline-dark'}`}
            onClick={() => setActiveTab('all')}
          >
            All Categories ({categories.length})
          </button>
          <button
            type="button"
            className={`btn btn-sm ${activeTab === 'accessories' ? 'btn-primary' : 'btn-outline-dark'}`}
            onClick={() => setActiveTab('accessories')}
          >
            Interior & Exterior Accessories
          </button>
          <button
            type="button"
            className={`btn btn-sm ${activeTab === 'parts' ? 'btn-primary' : 'btn-outline-dark'}`}
            onClick={() => setActiveTab('parts')}
          >
            Mechanical & Electrical Parts
          </button>
          <button
            type="button"
            className={`btn btn-sm ${activeTab === 'audio' ? 'btn-primary' : 'btn-outline-dark'}`}
            onClick={() => setActiveTab('audio')}
          >
            Audio & Stereo Systems
          </button>
          <button
            type="button"
            className={`btn btn-sm ${activeTab === 'care' ? 'btn-primary' : 'btn-outline-dark'}`}
            onClick={() => setActiveTab('care')}
          >
            Car Care & Detailing
          </button>
        </div>

        {/* Category Cards Grid */}
        <div className="category-grid">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="category-card">
              <div className="category-img-wrap">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="category-img"
                  loading="lazy" 
                />
                <span className="category-badge-chip">{cat.badge}</span>
              </div>

              <div className="category-info">
                <h3 className="category-name">{cat.name}</h3>
                <p className="category-desc">{cat.description}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '10px', borderTop: '1px solid #F1F5F9' }}>
                  <a 
                    href={`tel:${businessInfo.phoneRaw}`} 
                    style={{ fontSize: '0.85rem', fontWeight: 700, color: '#10B981', display: 'flex', alignItems: 'center', gap: '4px' }}
                    title={`Inquire about ${cat.name}`}
                  >
                    <Phone size={14} /> Inquire
                  </a>
                  <Link 
                    to="/contact" 
                    className="category-action-link"
                  >
                    Details <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;
