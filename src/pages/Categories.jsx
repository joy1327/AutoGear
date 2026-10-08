import React from 'react';
import { categories } from '../data/categories';
import CategoryCard from '../components/CategoryCard';
import { Layers } from 'lucide-react';

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
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
