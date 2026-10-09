import React, { useRef, useState, useEffect, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Wrench, 
  Sparkles, 
  MessageCircle, 
  Play, 
  Pause,
  CheckCircle2,
  Cpu,
  Layers,
  PhoneCall
} from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export const brandsData = [
  {
    id: 'maruti-suzuki',
    name: 'Maruti Suzuki',
    popularModels: ['Swift', 'Brezza', 'Baleno', 'Grand Vitara', 'Ertiga', 'Fronx', 'Dzire'],
    badge: 'Popular in Anand',
    category: 'Full Workshop & Genuine Spares',
    accentColor: '#DC2626',
    specialty: 'Engine overhaul, periodic maintenance, OEM replacement spares'
  },
  {
    id: 'hyundai',
    name: 'Hyundai',
    popularModels: ['Creta', 'Venue', 'i20', 'Verna', 'Alcazar', 'Exter', 'Aura'],
    badge: 'High Demand',
    category: 'Computer Diagnostics & AC Care',
    accentColor: '#0284C7',
    specialty: 'OBD scanning, dual-zone AC service, suspension tuning'
  },
  {
    id: 'tata-motors',
    name: 'Tata Motors',
    popularModels: ['Nexon', 'Punch', 'Harrier', 'Safari', 'Altroz', 'Tiago', 'Curvv'],
    badge: '5-Star Safety Cars',
    category: 'Suspension, Brakes & Detailing',
    accentColor: '#2563EB',
    specialty: 'Heavy chassis care, brake disc service, high-grade interior'
  },
  {
    id: 'mahindra',
    name: 'Mahindra',
    popularModels: ['Thar', 'Scorpio-N', 'XUV700', 'Bolero', 'XUV 3XO', 'Scorpio Classic'],
    badge: 'SUV Specialists',
    category: 'Heavy-Duty Care & 4x4 Styling',
    accentColor: '#B91C1C',
    specialty: '4x4 drivetrain service, heavy offroad armor, suspension upgrades'
  },
  {
    id: 'toyota',
    name: 'Toyota',
    popularModels: ['Innova Crysta', 'Fortuner', 'Hyryder', 'Glanza', 'Rumion', 'Hycross'],
    badge: 'Reliability Kings',
    category: 'Periodic Overhaul & Genuine Oil',
    accentColor: '#E11D48',
    specialty: 'Long-life synthetic oil servicing, clutch overhaul, genuine parts'
  },
  {
    id: 'kia',
    name: 'Kia',
    popularModels: ['Seltos', 'Sonet', 'Carens', 'Carnival', 'EV6'],
    badge: 'Premium Cabin',
    category: 'Electronics & Detailing',
    accentColor: '#0F172A',
    specialty: 'Advanced electronic diagnosis, custom seat covers, LED setups'
  },
  {
    id: 'honda',
    name: 'Honda',
    popularModels: ['City', 'Amaze', 'Elevate', 'WR-V', 'Jazz', 'Civic'],
    badge: 'i-VTEC Precision',
    category: 'Engine Tuning & Brake Overhaul',
    accentColor: '#DC2626',
    specialty: 'i-VTEC precision tuning, throttle cleaning, ABS brake overhaul'
  },
  {
    id: 'volkswagen',
    name: 'Volkswagen',
    popularModels: ['Virtus', 'Taigun', 'Polo', 'Vento', 'Tiguan'],
    badge: 'German Engineering',
    category: 'TSI Diagnostics & Precision Parts',
    accentColor: '#0284C7',
    specialty: 'TSI turbo care, DSG transmission diagnostics, genuine filters'
  },
  {
    id: 'skoda',
    name: 'Skoda',
    popularModels: ['Slavia', 'Kushaq', 'Octavia', 'Rapid', 'Kodiaq', 'Superb'],
    badge: 'European Standards',
    category: 'OEM Mechanical & Bodywork',
    accentColor: '#059669',
    specialty: 'European standard mechanical repair, denting-painting, spares'
  },
  {
    id: 'mg-motors',
    name: 'MG Motors',
    popularModels: ['Hector', 'Astor', 'ZS EV', 'Comet', 'Gloster'],
    badge: 'Smart Mobility',
    category: 'Infotainment & Electrical Fitment',
    accentColor: '#DC2626',
    specialty: 'Electrical loom checks, touchscreen upgrades, ambient lighting'
  },
  {
    id: 'renault',
    name: 'Renault',
    popularModels: ['Kiger', 'Triber', 'Kwid', 'Duster'],
    badge: 'Compact Utility',
    category: 'Clutch, Gearbox & Periodic Care',
    accentColor: '#D97706',
    specialty: 'Clutch plate service, suspension bushing, affordable upkeep'
  },
  {
    id: 'nissan',
    name: 'Nissan',
    popularModels: ['Magnite', 'Kicks', 'X-Trail', 'Sunny'],
    badge: 'Turbo Performance',
    category: 'Routine Maintenance & Spares',
    accentColor: '#475569',
    specialty: 'CVT fluid changes, turbo checkup, genuine brake replacement'
  }
];

// Dedicated SVG brand logos with precision vector emblems
const BrandLogo = ({ brandId }) => {
  switch (brandId) {
    case 'maruti-suzuki':
      return (
        <svg viewBox="0 0 44 44" className="brand-svg-icon" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#FEF2F2" />
          <path d="M12 14h14l-8 7h8l-12 9h14" fill="none" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'hyundai':
      return (
        <svg viewBox="0 0 44 44" className="brand-svg-icon" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#F0F9FF" />
          <ellipse cx="22" cy="22" rx="14" ry="10" fill="none" stroke="#0284C7" strokeWidth="2.2" />
          <path d="M17 17v10M27 17v10M17 22h10" fill="none" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'tata-motors':
      return (
        <svg viewBox="0 0 44 44" className="brand-svg-icon" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#EFF6FF" />
          <circle cx="22" cy="22" r="13" fill="none" stroke="#2563EB" strokeWidth="2.2" />
          <path d="M14 17h16M22 17v11" fill="none" stroke="#2563EB" strokeWidth="2.8" strokeLinecap="round" />
        </svg>
      );
    case 'mahindra':
      return (
        <svg viewBox="0 0 44 44" className="brand-svg-icon" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#FEF2F2" />
          <path d="M14 28L19.5 15L22 21L24.5 15L30 28" fill="none" stroke="#B91C1C" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'toyota':
      return (
        <svg viewBox="0 0 44 44" className="brand-svg-icon" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#FFF1F2" />
          <ellipse cx="22" cy="22" rx="14" ry="9" fill="none" stroke="#E11D48" strokeWidth="2" />
          <ellipse cx="22" cy="20" rx="8" ry="5" fill="none" stroke="#E11D48" strokeWidth="2" />
          <ellipse cx="22" cy="23" rx="4" ry="7.5" fill="none" stroke="#E11D48" strokeWidth="2" />
        </svg>
      );
    case 'kia':
      return (
        <svg viewBox="0 0 44 44" className="brand-svg-icon" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#0F172A" />
          <text x="22" y="27" fill="#FFFFFF" fontSize="11.5" fontWeight="900" textAnchor="middle" letterSpacing="1.5" fontFamily="system-ui, sans-serif">KIA</text>
        </svg>
      );
    case 'honda':
      return (
        <svg viewBox="0 0 44 44" className="brand-svg-icon" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#FEF2F2" />
          <rect x="12" y="13" width="20" height="18" rx="4" fill="none" stroke="#DC2626" strokeWidth="2.2" />
          <path d="M16 16v12M28 16v12M16 22h12" fill="none" stroke="#DC2626" strokeWidth="2.6" strokeLinecap="round" />
        </svg>
      );
    case 'volkswagen':
      return (
        <svg viewBox="0 0 44 44" className="brand-svg-icon" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#F0F9FF" />
          <circle cx="22" cy="22" r="13" fill="none" stroke="#0284C7" strokeWidth="2.2" />
          <path d="M15 17l4 10l3-5.5l3 5.5l4-10" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'skoda':
      return (
        <svg viewBox="0 0 44 44" className="brand-svg-icon" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#ECFDF5" />
          <circle cx="22" cy="22" r="13" fill="none" stroke="#059669" strokeWidth="2.2" />
          <path d="M17 22l5-5l5 5M22 17v10" fill="none" stroke="#059669" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'mg-motors':
      return (
        <svg viewBox="0 0 44 44" className="brand-svg-icon" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#FEF2F2" />
          <polygon points="16,12 28,12 34,18 34,26 28,32 16,32 10,26 10,18" fill="none" stroke="#DC2626" strokeWidth="2.2" />
          <text x="22" y="26" fill="#DC2626" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif">MG</text>
        </svg>
      );
    case 'renault':
      return (
        <svg viewBox="0 0 44 44" className="brand-svg-icon" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#FFFBEB" />
          <polygon points="22,12 30,22 22,32 14,22" fill="none" stroke="#D97706" strokeWidth="2.8" strokeLinejoin="round" />
        </svg>
      );
    case 'nissan':
      return (
        <svg viewBox="0 0 44 44" className="brand-svg-icon" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#F8FAFC" />
          <circle cx="22" cy="22" r="12" fill="none" stroke="#475569" strokeWidth="2.2" />
          <rect x="11" y="19" width="22" height="6" fill="#FFFFFF" stroke="#475569" strokeWidth="1.6" rx="2" />
          <text x="22" y="24" fill="#334155" fontSize="5.5" fontWeight="900" textAnchor="middle" letterSpacing="0.4" fontFamily="system-ui, sans-serif">NISSAN</text>
        </svg>
      );
    default:
      return null;
  }
};

const CarBrandsSlider = () => {
  const trackRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const isInteractingRef = useRef(false);
  const interactionTimeoutRef = useRef(null);

  // Triple set ensures seamless infinite scrolling without visual gaps on ultra-wide screens
  const extendedBrands = [...brandsData, ...brandsData, ...brandsData];

  // Set initial scroll offset so user can immediately scroll both backward & forward seamlessly
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const timer = setTimeout(() => {
      if (track) {
        const oneThird = track.scrollWidth / 3;
        if (track.scrollLeft < 50) {
          track.scrollLeft = oneThird;
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Smooth continuous automatic sliding using requestAnimationFrame with delta-time
  useEffect(() => {
    let animationId;
    let lastTimestamp = performance.now();
    const SCROLL_SPEED = 42; // pixels per second (smooth, comfortable reading speed)

    const scrollLoop = (currentTimestamp) => {
      const elapsedSeconds = (currentTimestamp - lastTimestamp) / 1000;
      lastTimestamp = currentTimestamp;

      const track = trackRef.current;
      const isPaused = !isPlaying || isHovered || isInteractingRef.current;

      if (track && !isPaused && elapsedSeconds < 0.2) {
        const deltaPx = SCROLL_SPEED * elapsedSeconds;
        track.scrollLeft += deltaPx;

        const singleSetWidth = track.scrollWidth / 3;
        // Seamless circular wrap
        if (track.scrollLeft >= singleSetWidth * 2) {
          track.scrollLeft -= singleSetWidth;
        } else if (track.scrollLeft <= 0) {
          track.scrollLeft += singleSetWidth;
        }
      }

      animationId = requestAnimationFrame(scrollLoop);
    };

    animationId = requestAnimationFrame(scrollLoop);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isPlaying, isHovered]);

  // Pause briefly after manual interaction so user can view the card
  const pauseTemporarily = useCallback((durationMs = 2800) => {
    isInteractingRef.current = true;
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    interactionTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, durationMs);
  }, []);

  const handlePrev = () => {
    pauseTemporarily(3500);
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    pauseTemporarily(3500);
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const toggleAutoPlay = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <section className="car-brands-slider-section section-padding" id="supported-brands">
      <div className="container">
        {/* Section Header with Refined Modern UI */}
        <div className="brands-slider-header-modern">
          <div className="brands-header-content">
            <span className="section-tag brands-pill-tag">
              <ShieldCheck size={14} className="tag-icon" /> Multi-Brand Workshop & Spares
            </span>
            <h2 className="section-title text-left brands-heading">
              Car Brands We Service & Upgrade
            </h2>
            <p className="section-description text-left brands-subtitle">
              Specialized mechanical repairs, computer diagnostics, genuine replacement parts, and custom styling accessories for all major passenger car brands in Anand & Gujarat.
            </p>
          </div>

          {/* Controls: Play/Pause and Left/Right Navigation */}
          <div className="brands-slider-actions-group">
            <button
              type="button"
              className={`brands-play-toggle-btn ${isPlaying ? 'is-playing' : 'is-paused'}`}
              onClick={toggleAutoPlay}
              aria-label={isPlaying ? 'Pause auto-sliding' : 'Resume auto-sliding'}
              title={isPlaying ? 'Pause continuous sliding' : 'Resume continuous sliding'}
            >
              {isPlaying ? (
                <>
                  <Pause size={14} />
                  <span>Auto-Slide On</span>
                </>
              ) : (
                <>
                  <Play size={14} />
                  <span>Auto-Slide Paused</span>
                </>
              )}
            </button>

            <div className="brands-nav-arrows-wrap">
              <button
                type="button"
                className="brands-nav-circle-btn"
                onClick={handlePrev}
                aria-label="Previous Brand"
                title="Scroll Left"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                className="brands-nav-circle-btn"
                onClick={handleNext}
                aria-label="Next Brand"
                title="Scroll Right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Continuous Smooth Scrolling Container with Subtle Edge Fades */}
        <div 
          className="brands-track-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => {
            setIsHovered(true);
            pauseTemporarily(3000);
          }}
          onTouchEnd={() => {
            setIsHovered(false);
            pauseTemporarily(2500);
          }}
        >
          {/* Edge gradient masks for elegant fade-in/fade-out */}
          <div className="brands-fade-mask brands-fade-left" aria-hidden="true" />
          <div className="brands-fade-mask brands-fade-right" aria-hidden="true" />

          <div 
            className="brands-continuous-scroll-track" 
            ref={trackRef}
            role="region" 
            aria-label="Continuous car brands slider"
          >
            {extendedBrands.map((brand, idx) => {
              const uniqueKey = `${brand.id}-${idx}`;
              return (
                <div key={uniqueKey} className="brand-modern-card">
                  {/* Top Row: Brand SVG Logo + Badge */}
                  <div className="brand-card-header">
                    <div className="brand-logo-badge">
                      <BrandLogo brandId={brand.id} />
                    </div>
                    <span className="brand-pill-badge">{brand.badge}</span>
                  </div>

                  {/* Brand Name & Service Specialty */}
                  <div className="brand-card-meta">
                    <h3 className="brand-title">{brand.name}</h3>
                    <div className="brand-service-tag">
                      <Wrench size={13} className="service-tag-icon" />
                      <span>{brand.category}</span>
                    </div>
                  </div>

                  {/* Popular Models Chips */}
                  <div className="brand-models-area">
                    <span className="models-label">Popular Models:</span>
                    <div className="models-pills-row">
                      {brand.popularModels.map((model, mIdx) => (
                        <span key={mIdx} className="model-pill">
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: WhatsApp Inquiry */}
                  <div className="brand-card-footer">
                    <a
                      href={`https://wa.me/${businessInfo.whatsappNumber}?text=Hi%20Saini%20Car%20World%2C%20I%20would%20like%20to%20inquire%20about%20service%20and%20accessories%20for%20my%20${encodeURIComponent(brand.name)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="brand-inquire-action"
                      title={`Inquire on WhatsApp for ${brand.name}`}
                    >
                      <MessageCircle size={15} />
                      <span>Inquire for {brand.name}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Trust & Helpline Strip */}
        <div className="brands-footer-info-bar">
          <div className="info-bar-left">
            <CheckCircle2 size={16} className="info-icon" />
            <span>
              100% genuine spares & OEM diagnostic equipment for all Indian, Japanese, Korean & European cars.
            </span>
          </div>
          <div className="info-bar-right">
            <span>Own another brand or imported model?</span>
            <a href={`tel:${businessInfo.phoneRaw}`} className="info-call-link">
              <PhoneCall size={14} /> Call {businessInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarBrandsSlider;
