import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { accessoriesBanners } from '../data/accessoriesBanners';

const AccessoriesBannerSlider = ({ banners = accessoriesBanners }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);
  const timerRef = useRef(null);

  const totalSlides = banners.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Automatic slideshow (4.5s per slide), pauses on hover
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, nextSlide, totalSlides, currentIndex]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartXRef.current - touchEndXRef.current;
    const threshold = 45; // Minimum drag distance in px
    if (diff > threshold) {
      nextSlide();
    } else if (diff < -threshold) {
      prevSlide();
    }
  };

  const scrollToCatalog = (e, link) => {
    if (link && link.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(link);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  if (!banners || banners.length === 0) return null;

  return (
    <div className="accessories-banner-wrapper">
      <div className="container">
        <div 
          className="accessories-slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-label="Car Accessories Highlights Carousel"
        >
          {/* Slides Container */}
          <div className="accessories-slides-track">
            {banners.map((banner, index) => {
              const isActive = index === currentIndex;
              return (
                <div 
                  key={banner.id || index}
                  className={`accessories-slide ${isActive ? 'active' : ''}`}
                  aria-hidden={!isActive}
                >
                  {/* Banner Image */}
                  <img 
                    src={banner.image}
                    alt={banner.alt || banner.title}
                    className="accessories-banner-img"
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/images/interior-accessories.jpg';
                    }}
                  />

                  {/* Gradient Overlay for Readability */}
                  <div className="accessories-banner-overlay" />

                  {/* Text Content */}
                  <div className="accessories-banner-content">
                    {banner.tag && (
                      <span className="accessories-banner-tag">
                        <Sparkles size={13} /> {banner.tag}
                      </span>
                    )}
                    <h2 className="accessories-banner-title">{banner.title}</h2>
                    <p className="accessories-banner-desc">{banner.subtitle}</p>
                    {banner.ctaText && (
                      <a 
                        href={banner.ctaLink || '#accessories'} 
                        onClick={(e) => scrollToCatalog(e, banner.ctaLink)}
                        className="btn btn-primary accessories-banner-btn"
                      >
                        {banner.ctaText} <ArrowRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Left Arrow */}
          <button 
            type="button"
            className="accessories-slider-nav prev"
            onClick={prevSlide}
            aria-label="Previous Banner Slide"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button 
            type="button"
            className="accessories-slider-nav next"
            onClick={nextSlide}
            aria-label="Next Banner Slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Pagination Dots */}
          <div className="accessories-slider-dots" role="tablist" aria-label="Slider Pagination">
            {banners.map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                role="tab"
                aria-selected={dotIndex === currentIndex}
                aria-label={`Go to slide ${dotIndex + 1}`}
                className={`accessories-slider-dot ${dotIndex === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(dotIndex)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesBannerSlider;
