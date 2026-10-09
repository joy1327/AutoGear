import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://sainicarworld.com';
const DEFAULT_IMAGE = `${BASE_URL}/images/workshop-hero.jpg`;

/**
 * Production-ready SEO Component
 * Automatically manages document title, meta tags, canonical links, 
 * Open Graph, Twitter Cards, and JSON-LD structured data for SPAs.
 */
const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
  structuredData = null
}) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Dynamic Document Title
    const fullTitle = title 
      ? (title.includes('Saini Car World') ? title : `${title} | Saini Car World Anand`)
      : 'Saini Car World | Complete Car Care & Accessories in Anand, Gujarat';
    document.title = fullTitle;

    // Helper to create or update meta tags
    const setMetaTag = (attrName, attrValue, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to create or update link tags
    const setLinkTag = (rel, href) => {
      if (!href) return;
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Canonical URL
    const activeCanonical = canonicalUrl || `${BASE_URL}${location.pathname}`;
    setLinkTag('canonical', activeCanonical);

    // 3. Meta Description & Keywords
    const activeDesc = description || 
      'Saini Car World in Anand, Gujarat provides complete car servicing, mechanical repairs, denting & painting, AC service, car wash, tyres, and car accessories under one roof.';
    setMetaTag('name', 'description', activeDesc);

    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    // 4. Robots Directives
    const robotsDirective = noindex 
      ? 'noindex, nofollow' 
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    setMetaTag('name', 'robots', robotsDirective);

    // 5. Open Graph Metadata
    setMetaTag('property', 'og:site_name', 'Saini Car World');
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:url', activeCanonical);
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', activeDesc);
    setMetaTag('property', 'og:image', image.startsWith('http') ? image : `${BASE_URL}${image}`);
    setMetaTag('property', 'og:locale', 'en_IN');

    // 6. Twitter Card Metadata
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', activeDesc);
    setMetaTag('name', 'twitter:image', image.startsWith('http') ? image : `${BASE_URL}${image}`);

    // 7. Dynamic JSON-LD Structured Data
    const scriptId = 'dynamic-page-schema';
    let scriptElem = document.getElementById(scriptId);

    if (structuredData) {
      if (!scriptElem) {
        scriptElem = document.createElement('script');
        scriptElem.id = scriptId;
        scriptElem.type = 'application/ld+json';
        document.head.appendChild(scriptElem);
      }
      scriptElem.textContent = JSON.stringify(structuredData);
    } else if (scriptElem) {
      scriptElem.remove();
    }

    // Cleanup when component unmounts (optional reset)
    return () => {
      // Keep canonical and title intact until next page overrides
    };
  }, [title, description, keywords, canonicalUrl, image, type, noindex, structuredData, location.pathname]);

  return null;
};

export default SEO;
