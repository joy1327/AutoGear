import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { categories } from '../data/categories';
import ProductCard from '../components/ProductCard';
import { Filter, SlidersHorizontal, Search, ArrowUpDown } from 'lucide-react';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const filterParam = searchParams.get('filter') || 'all';
  const searchQueryParam = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [sortBy, setSortBy] = useState('featured');
  const [priceMax, setPriceMax] = useState(15000);
  const [localSearch, setLocalSearch] = useState(searchQueryParam);

  useEffect(() => {
    if (categoryParam) setSelectedCategory(categoryParam);
    if (searchQueryParam) setLocalSearch(searchQueryParam);
  }, [categoryParam, searchQueryParam]);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category filter
        if (selectedCategory !== 'all' && product.category !== selectedCategory) {
          return false;
        }

        // URL filter badges
        if (filterParam === 'bestseller' && !product.isBestSeller) return false;
        if (filterParam === 'trending' && !product.isTrending) return false;
        if (filterParam === 'offers' && product.discount < 40) return false;

        // Search query filter
        if (localSearch.trim()) {
          const q = localSearch.toLowerCase();
          const matchName = product.name.toLowerCase().includes(q);
          const matchDesc = product.shortDescription.toLowerCase().includes(q);
          const matchCat = product.categoryName.toLowerCase().includes(q);
          if (!matchName && !matchDesc && !matchCat) return false;
        }

        // Price filter
        if (product.price > priceMax) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // featured default
      });
  }, [selectedCategory, filterParam, localSearch, priceMax, sortBy]);

  return (
    <div className="section-padding" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ marginBottom: '36px' }}>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '8px' }}>
            Automotive Accessories Catalog
          </h1>
          <p style={{ color: 'var(--color-text-muted)' }}>
            Showing {filteredProducts.length} high-grade performance accessories and parts
          </p>
        </div>

        {/* Filter & Search Bar Toolbar */}
        <div 
          style={{ 
            background: '#FFFFFF', 
            borderRadius: '12px', 
            padding: '20px', 
            border: '1px solid var(--color-border)', 
            marginBottom: '32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px'
          }}
        >
          {/* Category Dropdown and Quick Filter Tabs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                if (e.target.value === 'all') {
                  setSearchParams({});
                } else {
                  setSearchParams({ category: e.target.value });
                }
              }}
              style={{
                padding: '8px 14px',
                borderRadius: '8px',
                border: '1px solid var(--color-border)',
                fontFamily: 'inherit',
                fontSize: '0.9rem',
                background: '#FFFFFF',
                cursor: 'pointer',
                fontWeight: 600,
                color: 'var(--color-primary)'
              }}
            >
              <option value="all">All Categories ({categories.length})</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.slug}>
                  {cat.name}
                </option>
              ))}
            </select>

            <button
              type="button"
              className={`btn btn-sm ${selectedCategory === 'all' ? 'btn-secondary' : 'btn-outline-dark'}`}
              onClick={() => {
                setSelectedCategory('all');
                setSearchParams({});
              }}
            >
              All
            </button>
          </div>

          {/* Sort & Search Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative' }}>
              <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
              <input
                type="text"
                placeholder="Search catalog..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                style={{
                  padding: '8px 14px 8px 36px',
                  borderRadius: '8px',
                  border: '1px solid var(--color-border)',
                  fontSize: '0.9rem',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ArrowUpDown size={16} color="#666" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid var(--color-border)',
                  fontFamily: 'inherit',
                  fontSize: '0.9rem',
                  background: '#FFFFFF',
                  cursor: 'pointer'
                }}
              >
                <option value="featured">Sort by: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div 
            style={{ 
              textAlign: 'center', 
              padding: '80px 20px', 
              background: '#FFFFFF', 
              borderRadius: '16px',
              border: '1px dashed var(--color-border)' 
            }}
          >
            <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>No matching accessories found</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px' }}>
              Try adjusting your search criteria or clear your category filter.
            </p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setSelectedCategory('all');
                setLocalSearch('');
                setSearchParams({});
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
