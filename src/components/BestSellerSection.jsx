import React from 'react';
import { Link } from 'react-router-dom';
import { getBestSellers } from '../data/products';
import { Flame, Star, ShoppingBag, Heart, ShieldCheck } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const BestSellerSection = () => {
  const bestSellers = getBestSellers().slice(0, 4);
  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  return (
    <section className="section-padding bestsellers-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag" style={{ backgroundColor: 'rgba(230, 57, 70, 0.15)', color: '#E63946' }}>
            <Flame size={14} /> Most Loved By Drivers
          </span>
          <h2 className="section-title">Best Sellers</h2>
          <p className="section-description">
            Our most frequently purchased accessories backed by thousands of verified driver reviews.
          </p>
        </div>

        <div className="product-grid">
          {bestSellers.map((product, index) => {
            const isWishlisted = isInWishlist(product.id);
            return (
              <div key={product.id} className="bestseller-card">
                {/* Visual Rank Badge */}
                <div className="bestseller-rank">
                  #{index + 1} BESTSELLER
                </div>

                <div className="product-thumb-wrap">
                  <Link to={`/product/${product.id}`}>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="product-thumb" 
                      loading="lazy"
                    />
                  </Link>

                  <button 
                    type="button" 
                    className={`product-wishlist-btn ${isWishlisted ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist(product);
                    }}
                    title="Add to Wishlist"
                    aria-label="Wishlist"
                  >
                    <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
                  </button>
                </div>

                <div className="product-body">
                  <span className="product-category-tag">{product.categoryName}</span>
                  
                  <h3 className="product-title">
                    <Link to={`/product/${product.id}`}>
                      {product.name}
                    </Link>
                  </h3>

                  <div className="product-rating-row">
                    <div className="product-rating-badge">
                      <Star size={12} fill="#FFFFFF" />
                      <span>{product.rating}</span>
                    </div>
                    <span className="product-reviews-count">({product.reviewsCount} sales verified)</span>
                  </div>

                  <div className="product-price-row">
                    <span className="current-price">₹{product.price.toLocaleString('en-IN')}</span>
                    {product.originalPrice && (
                      <>
                        <span className="original-price">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                        <span className="discount-tag">{product.discount}% OFF</span>
                      </>
                    )}
                  </div>

                  <button 
                    type="button" 
                    className="btn btn-primary product-action-btn"
                    onClick={() => addToCart(product, 1)}
                  >
                    <ShoppingBag size={16} /> Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BestSellerSection;
