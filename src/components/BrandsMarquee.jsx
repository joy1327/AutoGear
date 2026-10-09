import React from 'react';
import { ShieldCheck } from 'lucide-react';

const carBrands = [
  { name: 'Maruti Suzuki', tag: 'Swift • Brezza • Baleno • Grand Vitara' },
  { name: 'Hyundai', tag: 'Creta • i20 • Venue • Verna' },
  { name: 'Tata Motors', tag: 'Nexon • Harrier • Punch • Tiago' },
  { name: 'Mahindra', tag: 'Thar • Scorpio-N • XUV700 • Bolero' },
  { name: 'Toyota', tag: 'Innova • Fortuner • Urban Cruiser • Glanza' },
  { name: 'Kia', tag: 'Seltos • Sonet • Carens • Carnival' },
  { name: 'Honda', tag: 'City • Amaze • Elevate • WR-V' },
  { name: 'Volkswagen', tag: 'Virtus • Taigun • Polo • Vento' },
  { name: 'Skoda', tag: 'Slavia • Kushaq • Octavia • Rapid' },
  { name: 'MG Motors', tag: 'Hector • Astor • ZS EV' }
];

const BrandsMarquee = () => {
  return (
    <div className="brands-marquee-section" aria-label="Car Brands Serviced">
      <div className="container">
        <div className="brands-marquee-header">
          <div className="brands-header-badge">
            <ShieldCheck size={14} /> Multi-Brand Workshop
          </div>
          <span className="brands-header-text">
            Specialized servicing, authentic OEM diagnostics & custom styling for all major Indian car brands
          </span>
        </div>

        <div className="brands-slider-track-wrap">
          <div className="brands-slider-track">
            {/* Render 2 sets for seamless infinite loop */}
            {[...carBrands, ...carBrands].map((brand, index) => (
              <div key={index} className="brand-chip-item">
                <div className="brand-chip-logo-wrap">
                  <span className="brand-chip-name">{brand.name}</span>
                </div>
                <span className="brand-chip-models">{brand.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsMarquee;
