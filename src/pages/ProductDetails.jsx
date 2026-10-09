import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getProductById, products } from '../data/products';
import { useShop } from '../context/ShopContext';
import { 
  Star, 
  ShoppingBag, 
  Heart, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  Check, 
  ChevronRight,
  Share2,
  Cpu
} from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(id) || products[0];
  const [quantity, setQuantity] = useState(1);
  const { addToCart, toggleWishlist, isInWishlist, showToast } = useShop();

  const isWishlisted = isInWishlist(product.id);
  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.group === product.group))
    .slice(0, 4);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast('Product link copied to clipboard!', 'info');
  };

  return (
    <div style={{ backgroundColor: '#F8F9FA', padding: '40px 0 80px 0' }}>
      <SEO 
        title={`${product.name} | Saini Car World Anand`}
        description={product.shortDescription || `Buy genuine ${product.name} with warranty and fitment in Anand, Gujarat at Saini Car World.`}
        keywords={`${product.name}, ${product.categoryName}, Car accessories Anand, Buy car parts Gujarat`}
        canonicalUrl={`https://sainicarworld.com/products/${product.id}`}
        image={product.image}
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sainicarworld.com/" },
                { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://sainicarworld.com/products" },
                { "@type": "ListItem", "position": 3, "name": product.categoryName, "item": `https://sainicarworld.com/products?category=${product.category}` },
                { "@type": "ListItem", "position": 4, "name": product.name, "item": `https://sainicarworld.com/products/${product.id}` }
              ]
            },
            {
              "@type": "Product",
              "name": product.name,
              "image": product.image.startsWith('http') ? product.image : `https://sainicarworld.com${product.image}`,
              "description": product.shortDescription,
              "sku": product.id,
              "brand": {
                "@type": "Brand",
                "name": "Saini Car World"
              },
              "offers": {
                "@type": "Offer",
                "url": `https://sainicarworld.com/products/${product.id}`,
                "priceCurrency": "INR",
                "price": product.price,
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "AutoPartsStore",
                  "name": "Saini Car World"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": product.rating,
                "reviewCount": product.reviewsCount || 10
              }
            }
          ]
        }}
      />
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#666', marginBottom: '28px' }}>
          <Link to="/" style={{ color: '#333' }}>Home</Link>
          <ChevronRight size={14} />
          <Link to="/products" style={{ color: '#333' }}>Shop</Link>
          <ChevronRight size={14} />
          <Link to={`/products?category=${product.category}`} style={{ color: '#333' }}>{product.categoryName}</Link>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>{product.name}</span>
        </div>

        {/* Main Product Layout */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1.15fr', 
            gap: '48px', 
            background: '#FFFFFF', 
            borderRadius: '20px', 
            padding: '36px',
            border: '1px solid var(--color-border)',
            marginBottom: '60px'
          }}
          className="product-details-grid"
        >
          {/* Left Column: Image */}
          <div>
            <div 
              style={{ 
                borderRadius: '16px', 
                overflow: 'hidden', 
                background: '#F1F1F1', 
                position: 'relative',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <img 
                src={product.image} 
                alt={product.name} 
                style={{ width: '100%', height: '480px', objectFit: 'cover' }} 
              />
              {product.badge && (
                <span className="badge badge-accent" style={{ position: 'absolute', top: '16px', left: '16px' }}>
                  {product.badge}
                </span>
              )}
            </div>

            {/* Quick Guarantees Under Image */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '20px' }}>
              <div style={{ background: '#F8F9FA', padding: '12px', borderRadius: '10px', textAlign: 'center', fontSize: '0.8rem' }}>
                <Truck size={20} color="var(--color-accent)" style={{ margin: '0 auto 6px auto' }} />
                <strong>Free Shipping</strong>
                <p style={{ color: '#777', fontSize: '0.72rem' }}>All India Dispatch</p>
              </div>
              <div style={{ background: '#F8F9FA', padding: '12px', borderRadius: '10px', textAlign: 'center', fontSize: '0.8rem' }}>
                <ShieldCheck size={20} color="var(--color-accent)" style={{ margin: '0 auto 6px auto' }} />
                <strong>100% Genuine</strong>
                <p style={{ color: '#777', fontSize: '0.72rem' }}>OEM Compatibility</p>
              </div>
              <div style={{ background: '#F8F9FA', padding: '12px', borderRadius: '10px', textAlign: 'center', fontSize: '0.8rem' }}>
                <RotateCcw size={20} color="var(--color-accent)" style={{ margin: '0 auto 6px auto' }} />
                <strong>7-Day Returns</strong>
                <p style={{ color: '#777', fontSize: '0.72rem' }}>Hassle-Free Doorstep</p>
              </div>
            </div>
          </div>

          {/* Right Column: Product Info & Actions */}
          <div>
            <div style={{ display: 'inline-block', background: 'rgba(230, 57, 70, 0.1)', color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '4px 10px', borderRadius: '4px', marginBottom: '12px' }}>
              {product.categoryName}
            </div>

            <h1 style={{ fontSize: '2.1rem', fontWeight: 800, marginBottom: '14px', lineHeight: 1.25 }}>
              {product.name}
            </h1>

            {/* Rating & Reviews */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div className="product-rating-badge" style={{ padding: '4px 10px', fontSize: '0.85rem' }}>
                <Star size={14} fill="#FFFFFF" />
                <span>{product.rating}</span>
              </div>
              <span style={{ color: '#666', fontSize: '0.9rem' }}>
                {product.reviewsCount} Customer Reviews & Ratings
              </span>
              <span style={{ color: '#10B981', fontWeight: 600, fontSize: '0.85rem' }}>
                ● In Stock & Ready to Ship
              </span>
            </div>

            {/* Price section */}
            <div style={{ background: '#F9FAFB', padding: '18px 24px', borderRadius: '12px', marginBottom: '24px', border: '1px solid #E5E7EB' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px' }}>
                <span style={{ fontSize: '2.2rem', fontWeight: 900, fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <>
                    <span style={{ fontSize: '1.2rem', textDecoration: 'line-through', color: '#9CA3AF' }}>
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-accent)' }}>
                      Save {product.discount}% OFF
                    </span>
                  </>
                )}
              </div>
              <p style={{ color: '#6B7280', fontSize: '0.82rem', marginTop: '4px' }}>
                Inclusive of all taxes & standard warranty coverage
              </p>
            </div>

            {/* Short Description */}
            <p style={{ fontSize: '1rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '24px' }}>
              {product.shortDescription}
            </p>

            {/* Compatibility info */}
            {product.compatibility && (
              <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', padding: '14px 18px', borderRadius: '10px', marginBottom: '24px' }}>
                <strong style={{ color: '#1E40AF', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Cpu size={16} /> Vehicle Compatibility:
                </strong>
                <p style={{ color: '#1E3A8A', fontSize: '0.85rem', marginTop: '4px' }}>
                  {product.compatibility}
                </p>
              </div>
            )}

            {/* Key Features Bullet List */}
            {product.features && (
              <div style={{ marginBottom: '28px' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Product Highlights
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {product.features.map((feat, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#374151' }}>
                      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '50%', background: '#DCFCE7', color: '#16A34A', flexShrink: 0 }}>
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Row: Quantity + Add to Cart + Wishlist */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              {/* Quantity Counter */}
              <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid var(--color-border)', borderRadius: '8px', overflow: 'hidden' }}>
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ width: '40px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F3F4F6', fontSize: '1.2rem', fontWeight: 600 }}
                >
                  -
                </button>
                <span style={{ width: '48px', textAlign: 'center', fontWeight: 700, fontSize: '1rem' }}>
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ width: '40px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F3F4F6', fontSize: '1.2rem', fontWeight: 600 }}
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                type="button"
                className="btn btn-primary btn-lg"
                style={{ flex: 1, minWidth: '180px' }}
                onClick={() => addToCart(product, quantity)}
              >
                <ShoppingBag size={20} /> Add to Cart
              </button>

              {/* Wishlist Button */}
              <button
                type="button"
                className={`action-btn ${isWishlisted ? 'active' : ''}`}
                style={{ width: '48px', height: '48px' }}
                onClick={() => toggleWishlist(product)}
                title="Wishlist"
              >
                <Heart size={22} fill={isWishlisted ? "currentColor" : "none"} />
              </button>

              {/* Share Button */}
              <button
                type="button"
                className="action-btn"
                style={{ width: '48px', height: '48px' }}
                onClick={handleShare}
                title="Share link"
              >
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px' }}>
              Frequently Bought Together
            </h2>
            <div className="product-grid">
              {relatedProducts.map(rel => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .product-details-grid {
            grid-template-columns: 1fr !important;
            padding: 20px !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductDetails;
