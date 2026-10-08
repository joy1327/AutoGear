import React from 'react';
import { categories } from '../data/categories';
import { businessInfo } from '../data/businessInfo';
import { Layers, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div style={{ backgroundColor: 'var(--color-bg-light)', padding: '60px 0 90px 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Layers size={14} /> Full Automotive Catalog
          </span>
          <h1 className="section-title">All Categories & Offerings</h1>
          <p className="section-description">
            Browse our full lineup of car accessories, electrical fittings, replacement parts, and car care products at Saini Car World, Anand.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((cat) => (
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
    </div>
  );
};

export default Categories;
