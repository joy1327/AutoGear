import React, { useState } from 'react';
import { categories, categoryTabs } from '../data/categories';
import CategoryCard from '../components/CategoryCard';
import PageBanner from '../components/PageBanner';
import CallToActionBanner from '../components/CallToActionBanner';
import { Layers, Search } from 'lucide-react';

const Categories = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = categories.filter((cat) => {
    // Tab filter
    if (activeTab !== 'all') {
      const matchGroup = Array.isArray(cat.group) ? cat.group.includes(activeTab) : cat.group === activeTab;
      if (!matchGroup) return false;
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = cat.name.toLowerCase().includes(q);
      const matchDesc = cat.description ? cat.description.toLowerCase().includes(q) : false;
      if (!matchName && !matchDesc) return false;
    }

    return true;
  });

  return (
    <div className="categories-page">
      {/* Standardized Page Banner */}
      <PageBanner 
        tag="Complete Inventory"
        tagIcon={Layers}
        title="All Accessories & Parts Categories"
        subtitle="Explore our comprehensive catalog of 38+ automotive categories with genuine stock available at our Anand workshop."
        breadcrumbs={[{ label: 'Categories' }]}
        showActions={true}
      />

      {/* Catalog Grid Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          {/* Search & Filter Toolbar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
            {/* Quick Filter Tabs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {categoryTabs.map((tab) => {
                const count = tab.id === 'all' 
                  ? categories.length 
                  : categories.filter((c) => Array.isArray(c.group) ? c.group.includes(tab.id) : c.group === tab.id).length;

                if (count === 0 && tab.id !== 'all') return null;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    className={`btn btn-sm ${activeTab === tab.id ? 'btn-primary' : 'btn-outline-dark'}`}
                    onClick={() => setActiveTab(tab.id)}
                    style={{ borderRadius: '20px', padding: '6px 16px', fontSize: '0.86rem' }}
                  >
                    {tab.name} ({count})
                  </button>
                );
              })}
            </div>

            {/* Instant Search Bar */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
              <Search size={16} color="var(--color-text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-control"
                style={{ paddingLeft: '36px', height: '40px', fontSize: '0.88rem', borderRadius: '20px' }}
              />
            </div>
          </div>

          {filteredCategories.length === 0 ? (
            <div className="empty-state">
              <Layers size={48} className="empty-state-icon" />
              <h3 className="empty-state-title">No Categories Found</h3>
              <p className="empty-state-desc">
                No accessories categories match "{searchQuery}". Try a different keyword or reset filters.
              </p>
              <button 
                type="button" 
                onClick={() => { setSearchQuery(''); setActiveTab('all'); }} 
                className="btn btn-primary"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="category-grid">
              {filteredCategories.map((cat) => (
                <CategoryCard key={cat.id} category={cat} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Standardized Bottom Inquiries Banner */}
      <CallToActionBanner 
        tag="Parts & Fitment Assistance"
        title="Can't Find What You Are Looking For?"
        subtitle="Call our Anand store to check real-time stock availability, custom order parts, or get expert advice on vehicle compatibility."
      />
    </div>
  );
};

export default Categories;
