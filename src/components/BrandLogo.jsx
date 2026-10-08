import React from 'react';

/**
 * BrandLogo - Precision Luxury Automotive Emblem & Lockup
 * for SAINI CAR WORLD.
 * 
 * Features:
 * - Aerodynamic Hex-Shield emblem with dual velocity blades (Chrome + Crimson)
 * - Premium geometric typography (Outfit 900)
 * - Flawless contrast on light headers, sticky translucent nav, and dark footers
 * - Scalable from 32px (mobile/favicon) to 54px (desktop banner/footer)
 */
const BrandLogo = ({ variant = 'default', size = 'normal', showTagline = true }) => {
  const isLight = variant === 'light'; // Light text on dark bg

  const iconSizes = {
    small: { w: 32, h: 32, fontSize: '1.2rem', tagSize: '0.58rem' },
    normal: { w: 40, h: 40, fontSize: '1.45rem', tagSize: '0.64rem' },
    large: { w: 52, h: 52, fontSize: '1.85rem', tagSize: '0.74rem' }
  };

  const { w, h, fontSize, tagSize } = iconSizes[size] || iconSizes.normal;

  return (
    <div 
      className="brand-logo-container"
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: size === 'small' ? '9px' : '12px', 
        userSelect: 'none',
        lineHeight: 1
      }}
    >
      {/* Precision Automotive Hex-Shield Emblem */}
      <svg
        width={w}
        height={h}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="brand-emblem-svg"
        style={{ 
          flexShrink: 0,
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), filter 0.25s ease',
          filter: isLight 
            ? 'drop-shadow(0 2px 10px rgba(230, 57, 70, 0.4))' 
            : 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.18))'
        }}
        aria-hidden="true"
      >
        <defs>
          {/* Deep Titanium Shield Base Gradient */}
          <linearGradient id="shieldBg" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E232A" />
            <stop offset="50%" stopColor="#12151B" />
            <stop offset="100%" stopColor="#0A0C0E" />
          </linearGradient>

          {/* Platinum / Chrome Upper Wing Gradient */}
          <linearGradient id="platinumWing" x1="20" y1="20" x2="80" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>

          {/* Racing Crimson Lower Velocity Blade */}
          <linearGradient id="crimsonBlade" x1="25" y1="45" x2="85" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF4D5A" />
            <stop offset="60%" stopColor="#E63946" />
            <stop offset="100%" stopColor="#B3121F" />
          </linearGradient>

          {/* Precision Rim Chamfer */}
          <linearGradient id="rimSheen" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.45)" />
            <stop offset="50%" stopColor="rgba(230, 57, 70, 0.65)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.15)" />
          </linearGradient>
        </defs>

        {/* 1. Aerodynamic Hex-Shield Hull */}
        <path 
          d="M50 5.5L88 22.5C91.5 24 93.5 27.5 93.5 31.2V64C93.5 78.5 74.5 90.8 50 96C25.5 90.8 6.5 78.5 6.5 64V31.2C6.5 27.5 8.5 24 12 22.5L50 5.5Z" 
          fill="url(#shieldBg)" 
          stroke="url(#rimSheen)" 
          strokeWidth="2.5" 
          strokeLinejoin="round"
        />

        {/* 2. Inner Refined Chamfer Line */}
        <path 
          d="M50 11.5L83.5 26.5V62C83.5 73.5 68.5 84.5 50 89C31.5 84.5 16.5 73.5 16.5 62V26.5L50 11.5Z" 
          stroke="rgba(255, 255, 255, 0.09)" 
          strokeWidth="1.5" 
          fill="none" 
        />

        {/* 3. Upper Chrome Wing ('S' Top Arc) */}
        <path 
          d="M32 38C32 29 40.5 23 54.5 23C69.5 23 78 29 78 29L71 37.5C71 37.5 64 32.2 54.5 32.2C45.5 32.2 41.5 35 41.5 38.5C41.5 42 46 44 54 46.5L62.5 49C65 49.8 67 50.8 68.5 52L58 57.5L50 53.5C38.5 49.5 32 45 32 38Z" 
          fill="url(#platinumWing)" 
        />

        {/* 4. Lower Crimson Velocity Blade ('S' Bottom Arc) */}
        <path 
          d="M68 62C68 71 59.5 77 45.5 77C30.5 77 22 71 22 71L29 62.5C29 62.5 36 67.8 45.5 67.8C54.5 67.8 58.5 65 58.5 61.5C58.5 58 54 56 46 53.5L37.5 51C35 50.2 33 49.2 31.5 48L42 42.5L50 46.5C61.5 50.5 68 55 68 62Z" 
          fill="url(#crimsonBlade)" 
        />

        {/* 5. Center Precision Apex Spark */}
        <circle cx="50" cy="50" r="2.8" fill="#FFFFFF" />
      </svg>

      {/* Typography Lockup */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: fontSize,
              fontWeight: 900,
              letterSpacing: '-0.025em',
              color: isLight ? '#FFFFFF' : '#0E1114',
              transition: 'color 0.2s ease'
            }}
          >
            SAINI
          </span>
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: fontSize,
              fontWeight: 900,
              letterSpacing: '-0.025em',
              color: '#E63946',
              transition: 'color 0.2s ease'
            }}
          >
            CAR WORLD
          </span>
        </div>

        {showTagline && (
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: tagSize,
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: isLight ? '#94A3B8' : '#64748B',
              marginTop: '3px',
              transition: 'color 0.2s ease'
            }}
          >
            Service • Accessories • Anand
          </span>
        )}
      </div>
    </div>
  );
};

export default BrandLogo;
