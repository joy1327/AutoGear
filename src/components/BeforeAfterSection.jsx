import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Wrench, Eye } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

const transformations = [
  {
    id: 'dent-paint',
    title: 'Computerized Denting & Spray Booth Painting',
    subtitle: 'Accident damage restored to factory showroom condition',
    beforeDesc: 'Deep fender indentation, fractured clear coat, and scraped front bumper panel.',
    afterDesc: 'Paintless dent pulling, computerized OEM color shade match, and dust-free spray booth baking.',
    tag: 'Precision Bodywork',
    stats: '100% Color Match Guaranteed'
  },
  {
    id: 'interior-styling',
    title: 'Custom Luxury Interior Makeover',
    subtitle: 'Upgrading base model cabins to top-tier comfort',
    beforeDesc: 'Faded factory fabric upholstery, stained flooring, and worn steering surface.',
    afterDesc: 'Handcrafted diamond-stitched Napa leatherette seat covers, 7D molded floor liners, and ambient lighting.',
    tag: 'Cabin Transformation',
    stats: 'Tailored OEM Fitment'
  },
  {
    id: 'detailing-polish',
    title: 'Multi-Stage Paint Correction & Ceramic Foam Detailing',
    subtitle: 'Reviving oxidized, swirl-marked paint to deep liquid gloss',
    beforeDesc: 'Swirl marks from hard water, sun oxidation, road tar, and dull exterior reflection.',
    afterDesc: 'High-pressure underbody snow foam wash, clay bar decontamination, dual-action swirl removal, and hydrophobic paint sealant.',
    tag: 'Deep Restoration',
    stats: 'Hydrophobic High Gloss'
  }
];

const BeforeAfterSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = transformations[activeTab];

  return (
    <section className="before-after-section section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} /> Workshop Craftsmanship
          </span>
          <h2 className="section-title">See The Transformation: Before & After</h2>
          <p className="section-description">
            Real automotive restoration, paint booth precision, and luxury accessory customization performed by our technicians in Anand.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="transformation-tabs-wrapper">
          {transformations.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              className={`transformation-tab-btn ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              <Wrench size={16} />
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Comparison Showcase Card */}
        <div className="transformation-card">
          <div className="transformation-card-header">
            <div>
              <span className="transformation-badge">{current.tag}</span>
              <h3 className="transformation-title">{current.title}</h3>
              <p className="transformation-subtitle">{current.subtitle}</p>
            </div>
            <div className="transformation-stat-pill">
              <ShieldCheck size={16} color="var(--color-success)" />
              <span>{current.stats}</span>
            </div>
          </div>

          <div className="transformation-comparison-grid">
            {/* Before Column */}
            <div className="comparison-box before-box">
              <div className="comparison-tag before-tag">
                <span>BEFORE</span> Condition
              </div>
              <div className="comparison-icon-art before-art">
                <span className="art-label">Original Vehicle Condition</span>
              </div>
              <div className="comparison-details">
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#991B1B', marginBottom: '6px' }}>
                  Identified Problem
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#4B5563', lineHeight: 1.6 }}>
                  {current.beforeDesc}
                </p>
              </div>
            </div>

            {/* Transition Indicator */}
            <div className="comparison-arrow-divider">
              <div className="arrow-circle">
                <ArrowRight size={20} />
              </div>
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '6px' }}>
                Workshop Treatment
              </span>
            </div>

            {/* After Column */}
            <div className="comparison-box after-box">
              <div className="comparison-tag after-tag">
                <span>AFTER</span> Result
              </div>
              <div className="comparison-icon-art after-art">
                <span className="art-label">Saini Car World Standard</span>
              </div>
              <div className="comparison-details">
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#065F46', marginBottom: '6px' }}>
                  Work Delivered
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#374151', lineHeight: 1.6 }}>
                  {current.afterDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Guarantee Footer */}
          <div className="transformation-card-footer">
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <CheckCircle2 size={16} color="var(--color-success)" />
              <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                Every car undergoes strict quality inspection before customer handover in Anand.
              </span>
            </div>
            <a 
              href={`https://wa.me/${businessInfo.whatsappNumber}?text=Hi%20Saini%20Car%20World%2C%20I%20want%20to%20get%20a%20quote%20for%20${encodeURIComponent(current.title)}`}
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-call btn-sm"
            >
              Get Free Photo Estimate on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
