import React from 'react';
import { ArrowRight } from 'lucide-react';

const CategoryCard = ({ category }) => {
  return (
    <div 
      className="category-card" 
      title={category.name}
      style={{ cursor: 'pointer' }}
      onClick={(e) => {
        // Navigation temporarily disabled
        e.preventDefault();
      }}
    >
      {/* Dedicated top bar for feature/highlight badge - prevents covering the product image */}
      <div className="category-card-topbar">
        {category.badge ? (
          <span className="category-badge-chip" title={category.badge}>
            {category.badge}
          </span>
        ) : (
          <span className="category-badge-placeholder" aria-hidden="true" />
        )}
      </div>

      {/* Completely unobstructed product image area */}
      <div className="category-img-wrap">
        <img 
          src={category.image} 
          alt={category.name} 
          className="category-img" 
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/images/interior-accessories.jpg';
          }}
        />
      </div>

      <div className="category-info">
        <h3 className="category-name">{category.name}</h3>
        {category.description && (
          <p className="category-desc">{category.description}</p>
        )}
        <span className="category-action-link" style={{ pointerEvents: 'none' }}>
          Explore <ArrowRight size={14} />
        </span>
      </div>
    </div>
  );
};

export default CategoryCard;
