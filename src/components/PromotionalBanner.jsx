import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag } from 'lucide-react';

const PromotionalBanner = () => {
  return (
    <section className="section-padding" style={{ paddingBottom: '40px', paddingTop: '40px' }}>
      <div className="container">
        <div className="promo-banner">
          <div className="promo-content">
            <span className="promo-tag">
              <Tag size={13} style={{ display: 'inline', marginRight: '6px' }} /> Limited Time Flash Deal
            </span>
            <h2 className="promo-heading">
              Premium Accessories. Better Drives.
            </h2>
            <p className="promo-sub">
              Get up to 50% OFF on selected car accessories. Upgrade your lighting, seating comfort, and electronics today.
            </p>
            <Link to="/products?filter=offers" className="btn btn-primary btn-lg">
              Shop Offers <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;
