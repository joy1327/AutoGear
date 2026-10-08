import React from 'react';
import { services } from '../data/services';
import { businessInfo } from '../data/businessInfo';
import { 
  Wrench, 
  Settings, 
  Sparkles, 
  Snowflake, 
  Droplets, 
  Disc, 
  CheckCircle2, 
  Phone, 
  ArrowRight 
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { handleCallNowClick } from '../utils/navigation';

const serviceIcons = {
  'regular-car-services': Settings,
  'mechanical-repairs': Wrench,
  'denting-and-painting': Sparkles,
  'ac-repair-and-service': Snowflake,
  'car-wash': Droplets,
  'tyre-and-wheel-services': Disc
};

const ServicesSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onContactServiceClick = (serviceTitle) => {
    handleCallNowClick(null, navigate, location);
    // Optionally pre-select service in callback form if on page
    const selectElem = document.querySelector('select[name="serviceType"]');
    if (selectElem) {
      selectElem.value = serviceTitle;
    }
  };

  return (
    <section className="section-padding" id="services" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Wrench size={14} /> Comprehensive Workshop Care
          </span>
          <h2 className="section-title">Our Car Services in Anand</h2>
          <p className="section-description">
            Complete mechanical, bodywork, maintenance, and detailing solutions performed with precision tools and experienced craftsmanship.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = serviceIcons[service.id] || Wrench;
            return (
              <div key={service.id} className="service-card">
                <div className="service-thumb-wrap">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="service-thumb"
                    loading="lazy" 
                  />
                  <span className="service-highlight-chip">
                    {service.highlight}
                  </span>
                </div>

                <div className="service-body">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <div className="service-icon-badge">
                      <IconComponent size={20} />
                    </div>
                    <h3 className="service-title" style={{ margin: 0 }}>{service.title}</h3>
                  </div>

                  <p className="service-desc">{service.shortDescription}</p>

                  <ul className="service-features-list">
                    {service.features.map((item, idx) => (
                      <li key={idx} className="service-feature-item">
                        <CheckCircle2 size={15} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="service-actions">
                    <button 
                      type="button" 
                      onClick={() => onContactServiceClick(service.title)}
                      className="btn btn-primary btn-sm"
                      style={{ flex: 1 }}
                    >
                      Inquire / Book
                    </button>
                    <a 
                      href={`tel:${businessInfo.phoneRaw}`} 
                      className="btn btn-call btn-sm"
                      title={`Call for ${service.title}`}
                    >
                      <Phone size={15} /> Call
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
