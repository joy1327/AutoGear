import React from 'react';
import ProductCard from './ProductCard';
import { getFeaturedProducts } from '../data/products';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductSection = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="section-padding" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} /> Handpicked For You
          </span>
          <h2 className="section-title">Featured Products</h2>
          <p className="section-description">
            Discover our highest-rated automotive upgrades, engineered for durability, exact fitment, and road comfort.
          </p>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link to="/products" className="btn btn-outline-dark btn-lg">
            View All Products ({featuredProducts.length}+) <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
