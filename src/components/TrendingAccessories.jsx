import React from 'react';
import { Link } from 'react-router-dom';
import { getTrendingProducts } from '../data/products';
import { TrendingUp, Star, ShoppingBag, Heart } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const TrendingAccessories = () => {
  const trendingProducts = getTrendingProducts().slice(0, 8);
  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  return (
    <section className="section-padding" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <TrendingUp size={14} /> Rising In Popularity
          </span>
          <h2 className="section-title">Trending Accessories</h2>
          <p className="section-description">
            Discover what fellow car enthusiasts are adding to their garages this season.
          </p>
        </div>

        <div className="product-grid">
          {trendingProducts.map((product) => {
            const isWishlisted = isInWishlist(product.id);
            return (
              <div key={product.id} className="product-card">
                <div className="product-thumb-wrap">
                  <Link to={`/product/${product.id}`}>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="product-thumb" 
                      loading="lazy"
                    />
                  </Link>

                  <span className="badge badge-accent" style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 2 }}>
                    Trending
                  </span>

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
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                  </h3>

                  <div className="product-rating-row">
                    <div className="product-rating-badge">
                      <Star size={12} fill="#FFFFFF" />
                      <span>{product.rating}</span>
                    </div>
                    <span className="product-reviews-count">({product.reviewsCount} reviews)</span>
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
                    className="btn btn-secondary product-action-btn"
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

export default TrendingAccessories;
