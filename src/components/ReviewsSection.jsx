import React from 'react';
import { Star, ShieldCheck, CheckCircle2, Quote, MapPin } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

const reviewsData = [
  {
    name: "Rajesh Patel",
    city: "Anand, Gujarat",
    car: "Hyundai Creta",
    rating: 5,
    service: "Periodic Service & AC Gas Refill",
    date: "2 weeks ago",
    content: "Got my Creta serviced at Saini Car World. Engine response became noticeably smoother and AC cooling is chilling even in hot Gujarat afternoons. Completely transparent work, genuine oil used, and reasonable rates compared to showroom dealers."
  },
  {
    name: "Dr. Ketan Shah",
    city: "Vallabh Vidyanagar",
    car: "Honda City",
    rating: 5,
    service: "Denting & Spray Booth Painting",
    date: "1 month ago",
    content: "Someone scratched my front bumper and left fender. Saini Car World's computerized color match was 100% exact. Not a single paint mismatch or dust bubble. High-grade spray booth finish right here in Anand."
  },
  {
    name: "Ankit Sharma",
    city: "Ganesh Colony, Anand",
    car: "Tata Nexon",
    rating: 5,
    service: "Custom Seat Covers & 7D Mats",
    date: "3 weeks ago",
    content: "Installed custom diamond-stitched leatherette seat covers and 7D all-weather mats here. Fitting is OEM snug without any loose folds. The cabin now looks like a luxury trim. Best accessories collection in town!"
  },
  {
    name: "Hardik Desai",
    city: "Karamsad",
    car: "Maruti Suzuki Swift",
    rating: 5,
    service: "Brake Overhaul & 3D Wheel Alignment",
    date: "2 months ago",
    content: "Had brake vibration at highway speeds. The mechanics evaluated the discs and performed computerized 3D laser alignment. Car drives laser-straight and braking is rock solid now. Honest diagnostic team."
  },
  {
    name: "Priya Dave",
    city: "Anand",
    car: "Kia Seltos",
    rating: 5,
    service: "Snow Foam Wash & Interior Detailing",
    date: "Recent",
    content: "Best car wash in Anand! Underbody chassis wash and thick snow foam completely removed highway mud. Interior deep vacuuming was spotless, even under the mats. Fast, polite and professional."
  }
];

const ReviewsSection = () => {
  return (
    <section className="reviews-section section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Header with Google Rating Badge */}
        <div className="reviews-header-layout">
          <div>
            <span className="section-tag">
              <ShieldCheck size={14} /> Verified Customer Feedback
            </span>
            <h2 className="section-title text-left" style={{ marginBottom: '8px' }}>
              Trusted by Drivers Across Anand & Gujarat
            </h2>
            <p className="section-description text-left" style={{ margin: 0 }}>
              Genuine testimonials from car owners in Anand, Vidyanagar, and Karamsad who trust our workshop for servicing and upgrades.
            </p>
          </div>

          {/* Google Score Pill Card */}
          <div className="google-score-card">
            <div className="google-icon-wrapper">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.04 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <strong style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--color-primary)' }}>4.8</strong>
                <div style={{ display: 'flex', gap: '2px', color: '#F59E0B' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" />
                  ))}
                </div>
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                Based on 250+ Verified Google Ratings
              </span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-cards-grid">
          {reviewsData.map((review, idx) => (
            <div key={idx} className="review-card">
              <div className="review-card-top">
                <div className="review-user-info">
                  <div className="review-avatar">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="review-user-name">{review.name}</h4>
                    <span className="review-user-location">
                      <MapPin size={11} style={{ display: 'inline', marginRight: '3px' }} />
                      {review.city} • <strong style={{ color: 'var(--color-primary)' }}>{review.car}</strong>
                    </span>
                  </div>
                </div>
                <div className="review-stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
              </div>

              <div className="review-service-tag">
                <CheckCircle2 size={13} color="var(--color-success)" />
                <span>{review.service}</span>
              </div>

              <p className="review-content">
                "{review.content}"
              </p>

              <div className="review-card-bottom">
                <span className="review-verified-badge">
                  <ShieldCheck size={13} /> Verified Local Customer
                </span>
                <span className="review-date">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
