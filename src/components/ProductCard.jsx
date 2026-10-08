import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star, Check, Phone } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { businessInfo } from '../data/businessInfo';

const ProductCard = ({ product, viewMode = 'grid' }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const isWishlisted = isInWishlist(product.id);

  return (
    <div className={`product-card ${viewMode === 'list' ? 'product-card-list' : ''}`}>
      <div className="product-thumb-wrap">
        <Link to={`/products/${product.id}`} className="product-thumb-link" aria-label={`View ${product.name}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-thumb"
            loading="lazy" 
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/images/interior-accessories.jpg';
            }}
          />
        </Link>

        {/* Badges */}
        <div className="product-badges">
          {product.badge && (
            <span className="product-badge-pill">{product.badge}</span>
          )}
          {product.discount > 0 && (
            <span className="product-discount-pill">{product.discount}% OFF</span>
          )}
        </div>

        {/* Wishlist Button */}
        <button 
          type="button" 
          className={`product-wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          title={isWishlisted ? "Remove from Wishlist" : "Save to Wishlist"}
          aria-label="Wishlist"
        >
          <Heart size={17} fill={isWishlisted ? "#E63946" : "none"} color={isWishlisted ? "#E63946" : "currentColor"} />
        </button>
      </div>

      <div className="product-body">
        <div className="product-meta-row">
          <span className="product-category-tag">{product.categoryName}</span>
          {product.compatibility && (
            <span className="product-compat-tag" title={product.compatibility}>
              <Check size={11} strokeWidth={3} /> Verified Fit
            </span>
          )}
        </div>
        
        <h3 className="product-title">
          <Link to={`/products/${product.id}`} title={product.name}>
            {product.name}
          </Link>
        </h3>

        <p className="product-desc-short">{product.shortDescription}</p>

        {/* Rating */}
        <div className="product-rating-row">
          <div className="product-rating-badge">
            <Star size={12} fill="#FFB703" color="#FFB703" />
            <span>{product.rating}</span>
          </div>
          <span className="product-reviews-count">({product.reviewsCount} reviews)</span>
        </div>

        {/* Price Row */}
        <div className="product-price-row">
          <span className="current-price">₹{product.price.toLocaleString('en-IN')}</span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="original-price">₹{product.originalPrice.toLocaleString('en-IN')}</span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="product-actions-group">
          <button 
            type="button" 
            className="btn btn-primary product-action-btn"
            onClick={() => addToCart(product, 1)}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag size={15} /> Add to Cart
          </button>
          
          <a
            href={`tel:${businessInfo.phoneRaw}`}
            className="btn btn-outline-dark product-inquire-btn"
            title="Call workshop for fitment or stock inquiry"
            aria-label="Call workshop"
          >
            <Phone size={14} /> Call Store
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
