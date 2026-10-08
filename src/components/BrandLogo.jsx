import React from 'react';

/**
 * BrandLogo - Custom professional automotive emblem and typography lockup
 * for SAINI CAR WORLD.
 * Designed to work seamlessly on dark and light backgrounds, at any scale.
 */
const BrandLogo = ({ variant = 'default', size = 'normal', showTagline = true }) => {
  const isLight = variant === 'light'; // Light text on dark bg

  const iconSizes = {
    small: { w: 34, h: 34 },
    normal: { w: 42, h: 42 },
    large: { w: 52, h: 52 }
  };

  const { w, h } = iconSizes[size] || iconSizes.normal;

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', userSelect: 'none' }}>
      {/* Automotive Shield Emblem SVG */}
      <svg
        width={w}
        height={h}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, filter: 'drop-shadow(0 2px 8px rgba(230, 57, 70, 0.35))' }}
      >
        <defs>
          <linearGradient id="shieldGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E2328" />
            <stop offset="60%" stopColor="#121518" />
            <stop offset="100%" stopColor="#0B0D0E" />
          </linearGradient>
          <linearGradient id="redAccent" x1="10" y1="20" x2="90" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF4D5A" />
            <stop offset="100%" stopColor="#D90429" />
          </linearGradient>
          <linearGradient id="silverChrome" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
        </defs>

        {/* Outer Shield Border */}
        <path
          d="M50 4L88 18V50C88 73 72 91 50 97C28 91 12 73 12 50V18L50 4Z"
          fill="url(#shieldGrad)"
          stroke="url(#silverChrome)"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Red Dynamic Racing Slashes / Wing */}
        <path
          d="M50 14L80 25V46C80 63 67 78 50 83V14Z"
          fill="url(#redAccent)"
          opacity="0.88"
        />

        {/* Stylized Aerodynamic Car Silhouette */}
        <path
          d="M24 54C26 44 32 38 42 36L54 36C64 38 72 44 76 54C78 57 75 60 71 60H29C25 60 22 57 24 54Z"
          fill="url(#silverChrome)"
        />
        {/* Windshield cutout */}
        <path
          d="M36 49C38 42 42 40 48 39H52C58 40 62 42 64 49H36Z"
          fill="#121518"
        />

        {/* Precision Wheel Spokes / Center Emblem */}
        <circle cx="34" cy="59" r="6" fill="#121518" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="66" cy="59" r="6" fill="#121518" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="34" cy="59" r="2.5" fill="url(#redAccent)" />
        <circle cx="66" cy="59" r="2.5" fill="url(#redAccent)" />

        {/* Speed Line Accent */}
        <path
          d="M18 69L82 69"
          stroke="url(#redAccent)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* Typography Lockup */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: size === 'small' ? '1.25rem' : size === 'large' ? '1.85rem' : '1.5rem',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              color: isLight ? '#FFFFFF' : '#111111'
            }}
          >
            SAINI
          </span>
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: size === 'small' ? '1.25rem' : size === 'large' ? '1.85rem' : '1.5rem',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              color: '#E63946'
            }}
          >
            CAR WORLD
          </span>
        </div>

        {showTagline && (
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: size === 'small' ? '0.62rem' : '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: isLight ? '#9CA3AF' : '#64748B',
              marginTop: '4px'
            }}
          >
            Service • Repairs • Accessories • Anand
          </span>
        )}
      </div>
    </div>
  );
};

export default BrandLogo;
