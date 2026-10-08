import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { categories, categoryTabs } from '../data/categories';
import { businessInfo } from '../data/businessInfo';
import ProductCard from '../components/ProductCard';
import PageBanner from '../components/PageBanner';
import CallToActionBanner from '../components/CallToActionBanner';
import { 
  Search, 
  SlidersHorizontal, 
  ArrowUpDown, 
  X, 
  Check, 
  LayoutGrid, 
  List, 
  RotateCcw, 
  Phone, 
  ShieldCheck, 
  Wrench, 
  Sparkles, 
  Tag, 
  Filter,
  CheckCircle2,
  PackageSearch
} from 'lucide-react';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // URL Parameter parsing
  const categoryParam = searchParams.get('category') || 'all';
  const groupParam = searchParams.get('group') || 'all';
  const filterParam = searchParams.get('filter') || 'all';
  const searchQueryParam = searchParams.get('search') || '';

  // Local Filter States
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedGroup, setSelectedGroup] = useState(groupParam);
  const [selectedBadge, setSelectedBadge] = useState(filterParam);
  const [searchQuery, setSearchQuery] = useState(searchQueryParam);
  const [sortBy, setSortBy] = useState('featured');
  const [priceMax, setPriceMax] = useState(15000);
  const [minRating, setMinRating] = useState(0);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [sidebarSearch, setSidebarSearch] = useState('');

  // Synchronize state when URL query params change
  useEffect(() => {
    if (categoryParam) setSelectedCategory(categoryParam);
    if (groupParam) setSelectedGroup(groupParam);
    if (filterParam) setSelectedBadge(filterParam);
    if (searchQueryParam) setSearchQuery(searchQueryParam);
  }, [categoryParam, groupParam, filterParam, searchQueryParam]);

  // Lookup active category metadata
  const activeCategoryMeta = useMemo(() => {
    if (selectedCategory === 'all') return null;
    return categories.find(
      (c) => c.slug === selectedCategory || 
             c.id === selectedCategory ||
             (selectedCategory === 'seat-covers' && c.slug === 'car-seat-covers') ||
             (selectedCategory === 'car-seat-covers' && c.slug === 'seat-covers')
    );
  }, [selectedCategory]);

  // Update query params helper
  const updateQueryParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (!value || value === 'all' || value === '') {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next);
  };

  const handleCategorySelect = (slug) => {
    setSelectedCategory(slug);
    updateQueryParam('category', slug);
  };

  const handleGroupSelect = (groupId) => {
    setSelectedGroup(groupId);
    setSelectedCategory('all');
    const next = new URLSearchParams(searchParams);
    if (groupId === 'all') {
      next.delete('group');
    } else {
      next.set('group', groupId);
    }
    next.delete('category');
    setSearchParams(next);
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedGroup('all');
    setSelectedBadge('all');
    setSearchQuery('');
    setPriceMax(15000);
    setMinRating(0);
    setSortBy('featured');
    setSearchParams({});
    setIsMobileDrawerOpen(false);
  };

  // Filter products list
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category filter (flexible synonym check)
        if (selectedCategory !== 'all') {
          const matchCat = 
            product.category === selectedCategory || 
            product.categorySlug === selectedCategory ||
            (selectedCategory === 'seat-covers' && product.category === 'car-seat-covers') ||
            (selectedCategory === 'car-seat-covers' && product.category === 'seat-covers');
          if (!matchCat) return false;
        }

        // Group filter (interior, exterior, lighting, etc.)
        if (selectedGroup !== 'all') {
          if (Array.isArray(product.group)) {
            if (!product.group.includes(selectedGroup)) return false;
          } else if (product.group !== selectedGroup) {
            return false;
          }
        }

        // Special Badge/Filter badges
        if (selectedBadge === 'bestseller' && !product.isBestSeller) return false;
        if (selectedBadge === 'trending' && !product.isTrending) return false;
        if (selectedBadge === 'offers' && product.discount < 30) return false;

        // Search text matching (name, description, category, compatibility)
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchName = product.name?.toLowerCase().includes(q);
          const matchDesc = product.shortDescription?.toLowerCase().includes(q);
          const matchCat = product.categoryName?.toLowerCase().includes(q);
          const matchCompat = product.compatibility?.toLowerCase().includes(q);
          if (!matchName && !matchDesc && !matchCat && !matchCompat) return false;
        }

        // Price slider filter
        if (product.price > priceMax) return false;

        // Min rating filter
        if (minRating > 0 && product.rating < minRating) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'discount') return b.discount - a.discount;
        return 0; // 'featured' retains natural curated order
      });
  }, [selectedCategory, selectedGroup, selectedBadge, searchQuery, priceMax, minRating, sortBy]);

  // Filtered categories for sidebar list based on sidebar search and active group
  const visibleCategories = useMemo(() => {
    return categories.filter((cat) => {
      // Group filter
      if (selectedGroup !== 'all') {
        const matchGroup = Array.isArray(cat.group) ? cat.group.includes(selectedGroup) : cat.group === selectedGroup;
        if (!matchGroup) return false;
      }
      // Sidebar search text
      if (sidebarSearch.trim()) {
        return cat.name.toLowerCase().includes(sidebarSearch.toLowerCase().trim());
      }
      return true;
    });
  }, [selectedGroup, sidebarSearch]);

  // Counts of active applied filters
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (selectedCategory !== 'all') count++;
    if (selectedGroup !== 'all') count++;
    if (selectedBadge !== 'all') count++;
    if (searchQuery.trim()) count++;
    if (priceMax < 15000) count++;
    if (minRating > 0) count++;
    return count;
  }, [selectedCategory, selectedGroup, selectedBadge, searchQuery, priceMax, minRating]);

  // Banner details
  const bannerTitle = activeCategoryMeta 
    ? `${activeCategoryMeta.name}` 
    : (selectedGroup !== 'all' ? `${selectedGroup.toUpperCase()} Upgrades & Parts` : 'Automotive Accessories & Parts Catalog');

  const bannerSubtitle = activeCategoryMeta 
    ? `Showing ${filteredProducts.length} verified products for ${activeCategoryMeta.name}. Genuine stock & professional installation available at Anand.`
    : `Showing ${filteredProducts.length} verified accessories, styling upgrades, and genuine spares in stock at Anand, Gujarat.`;

  const breadcrumbs = [
    { label: 'Accessories', path: '/accessories' },
    activeCategoryMeta ? { label: activeCategoryMeta.name } : { label: 'Catalog' }
  ];

  return (
    <div className="products-page">
      {/* Standardized Header Banner */}
      <PageBanner 
        tag={activeCategoryMeta ? "Genuine Stock" : "Verified Automotive Parts"}
        title={bannerTitle}
        subtitle={bannerSubtitle}
        breadcrumbs={breadcrumbs}
        showActions={true}
      />

      {/* Main Catalog Container */}
      <section className="catalog-section">
        <div className="container">

          {/* Quick Group Filter Tabs Bar */}
          <div className="catalog-group-nav-wrapper">
            <div className="catalog-group-nav" role="tablist" aria-label="Filter by accessory section">
              {categoryTabs.map((tab) => {
                const count = tab.id === 'all' 
                  ? products.length 
                  : products.filter((p) => Array.isArray(p.group) ? p.group.includes(tab.id) : p.group === tab.id).length;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={selectedGroup === tab.id}
                    className={`group-nav-pill ${selectedGroup === tab.id ? 'active' : ''}`}
                    onClick={() => handleGroupSelect(tab.id)}
                  >
                    <span>{tab.name}</span>
                    <span className="pill-count">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Catalog Layout: Sidebar + Main Content Grid */}
          <div className="catalog-layout">
            
            {/* Desktop Left Filter Sidebar */}
            <aside className="catalog-sidebar" aria-label="Catalog Filters">
              <div className="sidebar-filter-panel">
                <div className="sidebar-header">
                  <div className="sidebar-title-wrap">
                    <Filter size={18} className="sidebar-icon" />
                    <h3>Filters</h3>
                    {activeFiltersCount > 0 && (
                      <span className="active-count-badge">{activeFiltersCount}</span>
                    )}
                  </div>
                  {activeFiltersCount > 0 && (
                    <button 
                      type="button" 
                      onClick={handleResetFilters}
                      className="sidebar-reset-btn"
                      title="Reset all filters"
                    >
                      <RotateCcw size={13} /> Reset
                    </button>
                  )}
                </div>

                {/* Section 1: Categories Selector */}
                <div className="filter-group">
                  <div className="filter-group-header">
                    <h4>Categories ({visibleCategories.length})</h4>
                  </div>
                  
                  {/* Category Search in Sidebar */}
                  <div className="sidebar-search-box">
                    <Search size={14} />
                    <input
                      type="text"
                      placeholder="Find category..."
                      value={sidebarSearch}
                      onChange={(e) => setSidebarSearch(e.target.value)}
                    />
                    {sidebarSearch && (
                      <button type="button" onClick={() => setSidebarSearch('')} aria-label="Clear category search">
                        <X size={13} />
                      </button>
                    )}
                  </div>

                  <div className="category-filter-list">
                    <button
                      type="button"
                      className={`cat-filter-item ${selectedCategory === 'all' ? 'active' : ''}`}
                      onClick={() => handleCategorySelect('all')}
                    >
                      <span>All Categories</span>
                      <span className="item-count">{products.length}</span>
                    </button>

                    {visibleCategories.map((cat) => {
                      const count = products.filter(
                        (p) => p.category === cat.slug || p.categorySlug === cat.slug
                      ).length;

                      const isSelected = selectedCategory === cat.slug || selectedCategory === cat.id;

                      return (
                        <button
                          key={cat.id}
                          type="button"
                          className={`cat-filter-item ${isSelected ? 'active' : ''}`}
                          onClick={() => handleCategorySelect(cat.slug)}
                        >
                          <span className="cat-name-truncate">{cat.name}</span>
                          <span className="item-count">{count}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Section 2: Price Filter */}
                <div className="filter-group">
                  <div className="filter-group-header">
                    <h4>Price Range</h4>
                    <span className="filter-val-label">Up to ₹{priceMax.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="price-slider-wrap">
                    <input
                      type="range"
                      min="500"
                      max="15000"
                      step="250"
                      value={priceMax}
                      onChange={(e) => setPriceMax(Number(e.target.value))}
                      className="price-slider"
                      aria-label="Filter products by maximum price"
                    />
                    <div className="price-range-labels">
                      <span>₹500</span>
                      <span>₹7,500</span>
                      <span>₹15,000+</span>
                    </div>
                  </div>
                </div>

                {/* Section 3: Customer Rating */}
                <div className="filter-group">
                  <div className="filter-group-header">
                    <h4>Customer Rating</h4>
                  </div>
                  <div className="rating-filter-options">
                    <button
                      type="button"
                      className={`rating-pill ${minRating === 0 ? 'active' : ''}`}
                      onClick={() => setMinRating(0)}
                    >
                      All Ratings
                    </button>
                    <button
                      type="button"
                      className={`rating-pill ${minRating === 4.5 ? 'active' : ''}`}
                      onClick={() => setMinRating(4.5)}
                    >
                      ★ 4.5 & Above
                    </button>
                    <button
                      type="button"
                      className={`rating-pill ${minRating === 4.8 ? 'active' : ''}`}
                      onClick={() => setMinRating(4.8)}
                    >
                      ★ 4.8 & Above
                    </button>
                  </div>
                </div>

                {/* Section 4: Special Badges */}
                <div className="filter-group">
                  <div className="filter-group-header">
                    <h4>Special Collections</h4>
                  </div>
                  <div className="badge-filter-options">
                    <button
                      type="button"
                      className={`badge-pill ${selectedBadge === 'all' ? 'active' : ''}`}
                      onClick={() => { setSelectedBadge('all'); updateQueryParam('filter', 'all'); }}
                    >
                      All Items
                    </button>
                    <button
                      type="button"
                      className={`badge-pill ${selectedBadge === 'bestseller' ? 'active' : ''}`}
                      onClick={() => { setSelectedBadge('bestseller'); updateQueryParam('filter', 'bestseller'); }}
                    >
                      🔥 Bestsellers
                    </button>
                    <button
                      type="button"
                      className={`badge-pill ${selectedBadge === 'trending' ? 'active' : ''}`}
                      onClick={() => { setSelectedBadge('trending'); updateQueryParam('filter', 'trending'); }}
                    >
                      ⚡ Trending Deals
                    </button>
                    <button
                      type="button"
                      className={`badge-pill ${selectedBadge === 'offers' ? 'active' : ''}`}
                      onClick={() => { setSelectedBadge('offers'); updateQueryParam('filter', 'offers'); }}
                    >
                      🏷️ High Discounts
                    </button>
                  </div>
                </div>

                {/* Workshop Guarantee Box */}
                <div className="sidebar-perk-box">
                  <div className="perk-item">
                    <ShieldCheck size={18} className="perk-icon" />
                    <div>
                      <strong>100% Fitment Verified</strong>
                      <p>Guaranteed compatibility for Indian car models</p>
                    </div>
                  </div>
                  <div className="perk-item">
                    <Wrench size={18} className="perk-icon" />
                    <div>
                      <strong>Expert In-Store Fitting</strong>
                      <p>Full installation service at Anand workshop</p>
                    </div>
                  </div>
                  <div className="perk-item">
                    <Phone size={18} className="perk-icon" />
                    <div>
                      <strong>Direct Phone Help</strong>
                      <p>Instant answers on stock & part availability</p>
                    </div>
                  </div>
                </div>

              </div>
            </aside>

            {/* Right Main Product Listing Area */}
            <main className="catalog-main">
              
              {/* Top Controls Toolbar */}
              <div className="catalog-toolbar">
                <div className="toolbar-top-row">
                  {/* Results Count & Current Context */}
                  <div className="toolbar-count">
                    <span className="results-bold">{filteredProducts.length}</span>
                    <span className="results-label">
                      {filteredProducts.length === 1 ? 'Product Available' : 'Products Available'}
                    </span>
                    {activeCategoryMeta && (
                      <span className="category-crumb-badge">in {activeCategoryMeta.name}</span>
                    )}
                  </div>

                  {/* Active Filter Chips */}
                  <div className="active-chips-wrap">
                    {selectedCategory !== 'all' && (
                      <span className="filter-chip">
                        <span>Category: {activeCategoryMeta ? activeCategoryMeta.name : selectedCategory}</span>
                        <button type="button" onClick={() => handleCategorySelect('all')} aria-label="Remove category filter">
                          <X size={12} />
                        </button>
                      </span>
                    )}

                    {selectedGroup !== 'all' && (
                      <span className="filter-chip">
                        <span>Section: {selectedGroup}</span>
                        <button type="button" onClick={() => handleGroupSelect('all')} aria-label="Remove section filter">
                          <X size={12} />
                        </button>
                      </span>
                    )}

                    {searchQuery.trim() && (
                      <span className="filter-chip">
                        <span>"{searchQuery}"</span>
                        <button type="button" onClick={() => setSearchQuery('')} aria-label="Clear search text">
                          <X size={12} />
                        </button>
                      </span>
                    )}

                    {priceMax < 15000 && (
                      <span className="filter-chip">
                        <span>≤ ₹{priceMax.toLocaleString('en-IN')}</span>
                        <button type="button" onClick={() => setPriceMax(15000)} aria-label="Clear price filter">
                          <X size={12} />
                        </button>
                      </span>
                    )}

                    {minRating > 0 && (
                      <span className="filter-chip">
                        <span>≥ ★{minRating}</span>
                        <button type="button" onClick={() => setMinRating(0)} aria-label="Clear rating filter">
                          <X size={12} />
                        </button>
                      </span>
                    )}

                    {activeFiltersCount > 0 && (
                      <button 
                        type="button" 
                        onClick={handleResetFilters}
                        className="clear-all-chips-btn"
                      >
                        Clear All
                      </button>
                    )}
                  </div>
                </div>

                <div className="toolbar-bottom-row">
                  {/* Search Bar */}
                  <div className="catalog-search-field">
                    <Search size={16} className="search-icon" />
                    <input
                      type="text"
                      placeholder="Search accessories, parts, models..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      aria-label="Search catalog"
                    />
                    {searchQuery && (
                      <button 
                        type="button" 
                        onClick={() => setSearchQuery('')}
                        className="clear-search-btn"
                        aria-label="Clear search"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>

                  <div className="toolbar-right-actions">
                    {/* Mobile Drawer Trigger Button */}
                    <button
                      type="button"
                      className={`mobile-filter-trigger-btn ${activeFiltersCount > 0 ? 'active' : ''}`}
                      onClick={() => setIsMobileDrawerOpen(true)}
                      aria-label="Open filter options"
                    >
                      <SlidersHorizontal size={16} />
                      <span>Filters</span>
                      {activeFiltersCount > 0 && (
                        <span className="mobile-filter-badge">{activeFiltersCount}</span>
                      )}
                    </button>

                    {/* Sort Dropdown */}
                    <div className="catalog-sort-wrapper">
                      <ArrowUpDown size={15} className="sort-icon" />
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="catalog-sort-select"
                        aria-label="Sort products"
                      >
                        <option value="featured">Sort: Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Highest Rated</option>
                        <option value="discount">Biggest Discount</option>
                      </select>
                    </div>

                    {/* View Mode Toggle (Grid / List) */}
                    <div className="view-mode-toggle" role="group" aria-label="Grid or List view">
                      <button
                        type="button"
                        className={`view-mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
                        onClick={() => setViewMode('grid')}
                        title="Grid View"
                        aria-label="Grid View"
                      >
                        <LayoutGrid size={16} />
                      </button>
                      <button
                        type="button"
                        className={`view-mode-btn ${viewMode === 'list' ? 'active' : ''}`}
                        onClick={() => setViewMode('list')}
                        title="List View"
                        aria-label="List View"
                      >
                        <List size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Grid / List Display */}
              {filteredProducts.length > 0 ? (
                <div className={`catalog-products-container ${viewMode === 'list' ? 'product-list-view' : 'product-grid-view'}`}>
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} viewMode={viewMode} />
                  ))}
                </div>
              ) : (
                /* Enhanced Friendly Empty State */
                <div className="catalog-empty-state">
                  <div className="empty-state-icon-wrap">
                    <PackageSearch size={44} strokeWidth={1.5} />
                  </div>
                  <h3 className="empty-state-title">No Matching Accessories Found</h3>
                  <p className="empty-state-desc">
                    {searchQuery 
                      ? `We couldn't find items matching "${searchQuery}". Try broadening your search or resetting filters.`
                      : 'We currently do not have matching products for this specific combination of filters.'
                    }
                  </p>
                  
                  <div className="empty-state-actions">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleResetFilters}
                    >
                      <RotateCcw size={16} /> Reset All Filters
                    </button>
                    <a
                      href={`tel:${businessInfo.phoneRaw}`}
                      className="btn btn-outline-dark"
                    >
                      <Phone size={16} /> Call Workshop for Availability
                    </a>
                  </div>

                  {/* Popular Categories Shortcut */}
                  <div className="empty-popular-cats">
                    <span className="popular-cats-title">Or browse popular categories:</span>
                    <div className="popular-cats-pills">
                      {categories.slice(0, 6).map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          className="popular-cat-chip"
                          onClick={() => handleCategorySelect(cat.slug)}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </main>
          </div>

        </div>
      </section>

      {/* Mobile Filter Slide-over Drawer */}
      {isMobileDrawerOpen && (
        <>
          <div 
            className="mobile-filter-backdrop" 
            onClick={() => setIsMobileDrawerOpen(false)}
            aria-hidden="true"
          />
          <div className="mobile-filter-drawer" role="dialog" aria-label="Mobile Filter Options">
            <div className="mobile-drawer-header">
              <div className="mobile-drawer-title">
                <SlidersHorizontal size={18} />
                <h3>Filter Products</h3>
                {activeFiltersCount > 0 && (
                  <span className="active-count-badge">{activeFiltersCount}</span>
                )}
              </div>
              <button 
                type="button" 
                onClick={() => setIsMobileDrawerOpen(false)}
                className="drawer-close-btn"
                aria-label="Close filters"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mobile-drawer-body">
              {/* Category Filter */}
              <div className="mobile-filter-section">
                <h4>Category</h4>
                <div className="mobile-cat-chips-scroll">
                  <button
                    type="button"
                    className={`mobile-cat-pill ${selectedCategory === 'all' ? 'active' : ''}`}
                    onClick={() => handleCategorySelect('all')}
                  >
                    All Categories ({products.length})
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      className={`mobile-cat-pill ${selectedCategory === cat.slug ? 'active' : ''}`}
                      onClick={() => handleCategorySelect(cat.slug)}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mobile-filter-section">
                <div className="section-label-split">
                  <h4>Max Price</h4>
                  <span>₹{priceMax.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="15000"
                  step="250"
                  value={priceMax}
                  onChange={(e) => setPriceMax(Number(e.target.value))}
                  className="price-slider"
                />
              </div>

              {/* Rating Filter */}
              <div className="mobile-filter-section">
                <h4>Customer Rating</h4>
                <div className="rating-filter-options">
                  <button
                    type="button"
                    className={`rating-pill ${minRating === 0 ? 'active' : ''}`}
                    onClick={() => setMinRating(0)}
                  >
                    All
                  </button>
                  <button
                    type="button"
                    className={`rating-pill ${minRating === 4.5 ? 'active' : ''}`}
                    onClick={() => setMinRating(4.5)}
                  >
                    ★ 4.5+
                  </button>
                  <button
                    type="button"
                    className={`rating-pill ${minRating === 4.8 ? 'active' : ''}`}
                    onClick={() => setMinRating(4.8)}
                  >
                    ★ 4.8+
                  </button>
                </div>
              </div>
            </div>

            <div className="mobile-drawer-footer">
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={handleResetFilters}
              >
                Reset All
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setIsMobileDrawerOpen(false)}
              >
                Apply ({filteredProducts.length} Items)
              </button>
            </div>
          </div>
        </>
      )}

      {/* Unified Bottom Fitment Help & Inquiries Banner */}
      <CallToActionBanner 
        tag="Availability & Fitment Check"
        title="Need Advice on Accessory Compatibility?"
        subtitle="Call our team with your car model name or visit our Anand workshop to inspect materials and finish in person."
      />
    </div>
  );
};

export default Products;
