import React from 'react';
import CategoryCard from './CategoryCard';
import { categories } from '../data/categories';
import { Compass } from 'lucide-react';

const CategorySection = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Compass size={14} /> Curated Collections
          </span>
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-description">
            Explore our comprehensive range of high-performance car upgrades and aesthetic styling essentials.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
