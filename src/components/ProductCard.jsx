import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star, Eye } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const isWishlisted = isInWishlist(product.id);

  return (
    <div className="product-card">
      <div className="product-thumb-wrap">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-thumb"
            loading="lazy" 
          />
        </Link>

        {/* Badges */}
        <div className="product-badges">
          {product.badge && (
            <span className="badge badge-accent">{product.badge}</span>
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
          title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
          aria-label="Wishlist"
        >
          <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="product-body">
        <span className="product-category-tag">{product.categoryName}</span>
        
        <h3 className="product-title">
          <Link to={`/product/${product.id}`} title={product.name}>
            {product.name}
          </Link>
        </h3>

        <p className="product-desc-short">{product.shortDescription}</p>

        {/* Rating */}
        <div className="product-rating-row">
          <div className="product-rating-badge">
            <Star size={12} fill="#FFFFFF" />
            <span>{product.rating}</span>
          </div>
          <span className="product-reviews-count">({product.reviewsCount} reviews)</span>
        </div>

        {/* Price Row */}
        <div className="product-price-row">
          <span className="current-price">₹{product.price.toLocaleString('en-IN')}</span>
          {product.originalPrice && (
            <>
              <span className="original-price">₹{product.originalPrice.toLocaleString('en-IN')}</span>
              <span className="discount-tag">{product.discount}% OFF</span>
            </>
          )}
        </div>

        {/* Action Button */}
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
};

export default ProductCard;
