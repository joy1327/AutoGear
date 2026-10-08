import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Phone, Wrench, Sparkles, MapPin, Clock, ArrowRight, ChevronLeft, ChevronRight, Shield } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { handleCallNowClick } from '../utils/navigation';

const heroSlides = [
  {
    id: 'slide-care',
    image: '/images/workshop-hero.jpg',
    tag: 'ANAND PREMIER CAR WORKSHOP',
    tagIcon: Shield,
    headline: 'Complete Car Care & <span class="hero-highlight">Accessories</span> Under One Roof',
    subheading: 'Professional car servicing, repairs, maintenance and automotive accessories in Anand, Gujarat.',
    primaryBtn: { text: 'Explore Services', href: '#services', type: 'service' },
    secondaryBtn: { text: 'Car Accessories', href: '#accessories', type: 'accessories' }
  },
  {
    id: 'slide-interior',
    image: '/images/banners/banner-interior.jpg',
    tag: 'PREMIUM CABIN COMFORT',
    tagIcon: Sparkles,
    headline: 'Luxury Car Interior & <span class="hero-highlight">Custom Styling</span>',
    subheading: 'Custom leatherette seat covers, 7D all-weather floor mats, ambient cabin lighting & Android touchscreens.',
    primaryBtn: { text: 'Explore Accessories', href: '#accessories', type: 'accessories' },
    secondaryBtn: { text: 'Explore Services', href: '#services', type: 'service' }
  },
  {
    id: 'slide-exterior',
    image: '/images/banners/banner-exterior.jpg',
    tag: 'AERODYNAMIC & SPORT KITS',
    tagIcon: Sparkles,
    headline: 'Sport Exterior Kits & <span class="hero-highlight">Genuine Spares</span>',
    subheading: 'High-grade rear bumper diffusers, smoked LED taillights, honeycomb front grilles & authentic car parts.',
    primaryBtn: { text: 'View Catalog', href: '#accessories', type: 'accessories' },
    secondaryBtn: { text: 'Explore Services', href: '#services', type: 'service' }
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);
  const timerRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const totalSlides = heroSlides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Autoplay slideshow every 4.5s (pauses on mouse hover)
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide, currentSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
  };

  const onCallNowClick = (e) => {
    handleCallNowClick(e, navigate, location);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate(href === '#accessories' ? '/accessories' : '/services');
    }
  };

  const currentData = heroSlides[currentSlide];
  const TagIconComponent = currentData.tagIcon || Sparkles;

  return (
    <section 
      className="hero-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Automotive Highlights Carousel"
    >
      {/* 3 Smooth-Fading Background Slides */}
      <div className="hero-bg-slider" aria-hidden="true">
        {heroSlides.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div 
              key={slide.id} 
              className={`hero-bg-slide ${isActive ? 'active' : ''}`}
            >
              <img 
                src={slide.image} 
                alt={slide.tag} 
                className="hero-bg-img"
                loading={idx === 0 ? "eager" : "lazy"}
              />
              <div className="hero-bg-overlay" />
            </div>
          );
        })}
      </div>

      {/* Hero Content Container */}
      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div className="hero-content">
          <div className="hero-tag-badge">
            <TagIconComponent size={14} />
            <span>{currentData.tag}</span>
          </div>

          <h1 
            className="hero-headline"
            dangerouslySetInnerHTML={{ __html: currentData.headline }}
          />

          <p className="hero-subheading">
            {currentData.subheading}
          </p>

          <div className="hero-buttons">
            {/* Primary Action */}
            <a 
              href={currentData.primaryBtn.href} 
              onClick={(e) => handleNavClick(e, currentData.primaryBtn.href)}
              className="btn btn-primary btn-lg"
            >
              {currentData.primaryBtn.type === 'service' ? <Wrench size={18} /> : <Sparkles size={18} />}
              <span>{currentData.primaryBtn.text}</span>
            </a>

            {/* Secondary Action */}
            <a 
              href={currentData.secondaryBtn.href} 
              onClick={(e) => handleNavClick(e, currentData.secondaryBtn.href)}
              className="btn btn-outline btn-lg"
            >
              <span>{currentData.secondaryBtn.text}</span>
              <ArrowRight size={18} />
            </a>

            {/* Guaranteed Call Now Action */}
            <button 
              type="button" 
              onClick={onCallNowClick}
              className="btn btn-call btn-lg"
            >
              <Phone size={18} /> Call Now
            </button>
          </div>

          <div className="hero-meta-bar">
            <div className="hero-meta-item">
              <MapPin size={16} />
              <span>{businessInfo.address}</span>
            </div>
            <div className="hero-meta-item">
              <Clock size={16} />
              <span>{businessInfo.hours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Left Slider Navigation Arrow */}
      <button 
        type="button" 
        onClick={prevSlide}
        className="hero-slider-nav prev"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={26} />
      </button>

      {/* Right Slider Navigation Arrow */}
      <button 
        type="button" 
        onClick={nextSlide}
        className="hero-slider-nav next"
        aria-label="Next Slide"
      >
        <ChevronRight size={26} />
      </button>

      {/* Pagination Indicators / Dots */}
      <div className="hero-slider-dots" role="tablist" aria-label="Hero Carousel Dots">
        {heroSlides.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={idx === currentSlide}
            aria-label={`Go to hero slide ${idx + 1}`}
            className={`hero-slider-dot ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
