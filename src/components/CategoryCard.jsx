import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CategoryCard = ({ category }) => {
  // Temporarily disabled: routing to catalog on Explorer click per request
  // const targetRoute = category.route || `/products?category=${category.slug}`;

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
        {category.badge && (
          <span className="category-badge-chip">{category.badge}</span>
        )}
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
