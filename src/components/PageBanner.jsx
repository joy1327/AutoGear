import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Phone, Navigation } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

const PageBanner = ({ 
  title, 
  subtitle, 
  tag, 
  tagIcon: TagIcon, 
  breadcrumbs = [],
  showActions = false 
}) => {
  return (
    <section className="page-banner">
      <div className="container">
        {/* Breadcrumbs Navigation */}
        <nav className="page-banner-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight size={14} className="breadcrumb-separator" />
              {crumb.path ? (
                <Link to={crumb.path} className="breadcrumb-link">
                  {crumb.label}
                </Link>
              ) : (
                <span className="breadcrumb-current">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Content Box */}
        <div className="page-banner-content">
          {tag && (
            <div className="page-banner-tag">
              {TagIcon && <TagIcon size={14} />}
              <span>{tag}</span>
            </div>
          )}

          <h1 className="page-banner-title">{title}</h1>

          {subtitle && (
            <p className="page-banner-subtitle">{subtitle}</p>
          )}

          {showActions && (
            <div className="page-banner-actions">
              <a 
                href={`tel:${businessInfo.phoneRaw}`} 
                className="btn btn-call btn-sm"
              >
                <Phone size={15} /> Call: {businessInfo.phone}
              </a>
              <a 
                href={businessInfo.googleMapsUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-outline btn-sm"
              >
                <Navigation size={15} /> Workshop Directions
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
