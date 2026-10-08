import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/products?category=${category.slug}`} className="category-card">
      <div className="category-img-wrap">
        <img 
          src={category.image} 
          alt={category.name} 
          className="category-img" 
          loading="lazy"
        />
        {category.badge && (
          <span className="category-badge-chip">{category.badge}</span>
        )}
      </div>
      <div className="category-info">
        <h3 className="category-name">{category.name}</h3>
        <p className="category-desc">{category.description}</p>
        <span className="category-action-link">
          Explore <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;
