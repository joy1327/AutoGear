import React from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { products } from '../data/products';
import { Heart, Trash2, ShoppingBag, ArrowRight, ChevronRight } from 'lucide-react';

const Wishlist = () => {
  const { wishlist, toggleWishlist, addToCart } = useShop();

  const wishlistedProducts = products.filter(p => wishlist.includes(p.id));

  if (wishlistedProducts.length === 0) {
    return (
      <div className="section-padding" style={{ backgroundColor: '#F8F9FA', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '580px', background: '#FFFFFF', padding: '60px 30px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
          <Heart size={64} color="#D1D5DB" style={{ margin: '0 auto 20px auto' }} />
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '10px' }}>Your Wishlist is Empty</h2>
          <p style={{ color: '#6B7280', marginBottom: '28px' }}>
            Save your favorite car gadgets, LED lamps, and interior fittings here to keep track of them.
          </p>
          <Link to="/products" className="btn btn-primary btn-lg">
            Explore Accessories <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#F8F9FA', padding: '40px 0 80px 0' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#666', marginBottom: '24px' }}>
          <Link to="/" style={{ color: '#333' }}>Home</Link>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>My Saved Wishlist ({wishlistedProducts.length})</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '4px' }}>
              Saved Wishlist
            </h1>
            <p style={{ color: '#6B7280' }}>
              {wishlistedProducts.length} items saved for your vehicle upgrades
            </p>
          </div>
        </div>

        <div className="product-grid">
          {wishlistedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-thumb-wrap">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.name} className="product-thumb" />
                </Link>

                <button 
                  type="button" 
                  className="product-wishlist-btn active"
                  onClick={() => toggleWishlist(product)}
                  title="Remove from Wishlist"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="product-body">
                <span className="product-category-tag">{product.categoryName}</span>
                
                <h3 className="product-title">
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h3>

                <p className="product-desc-short">{product.shortDescription}</p>

                <div className="product-price-row">
                  <span className="current-price">₹{product.price.toLocaleString('en-IN')}</span>
                  {product.originalPrice && (
                    <span className="original-price">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                  )}
                </div>

                <button 
                  type="button" 
                  className="btn btn-primary product-action-btn"
                  onClick={() => {
                    addToCart(product, 1);
                    toggleWishlist(product);
                  }}
                >
                  <ShoppingBag size={16} /> Move to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
