import React, { useState } from 'react';
import { categories, categoryTabs } from '../data/categories';
import CategoryCard from './CategoryCard';
import { Shield } from 'lucide-react';

const AccessoriesSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = categories.filter((cat) => {
    if (activeTab === 'all') return true;
    if (Array.isArray(cat.group)) return cat.group.includes(activeTab);
    return cat.group === activeTab;
  });

  return (
    <section className="section-padding" id="accessories" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Shield size={14} /> Genuine Upgrades & Replacement Parts
          </span>
          <h2 className="section-title">Car Accessories & Parts Catalog</h2>
          <p className="section-description">
            Explore authentic automotive accessories and mechanical components available in stock at Saini Car World, Anand.
          </p>
        </div>

        {/* Dynamic Category Filter Tabs (Inspired by Carhatke) */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            gap: '10px', 
            marginBottom: '36px' 
          }}
        >
          {categoryTabs.map((tab) => {
            const count = tab.id === 'all' 
              ? categories.length 
              : categories.filter((c) => Array.isArray(c.group) ? c.group.includes(tab.id) : c.group === tab.id).length;

            if (count === 0 && tab.id !== 'all') return null;

            return (
              <button
                key={tab.id}
                type="button"
                className={`btn btn-sm ${activeTab === tab.id ? 'btn-primary' : 'btn-outline-dark'}`}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  transition: 'all 0.2s ease',
                  padding: '8px 18px',
                  borderRadius: '24px',
                  fontSize: '0.88rem'
                }}
              >
                {tab.name} ({count})
              </button>
            );
          })}
        </div>

        {/* Reusable Category Cards Grid */}
        <div className="category-grid">
          {filteredCategories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;
