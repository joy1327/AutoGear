import React from 'react';
import { customerReviews } from '../data/reviews';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="section-padding testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <MessageSquareQuote size={14} /> Driver Community
          </span>
          <h2 className="section-title">What Drivers Say About Us</h2>
          <p className="section-description">
            Real feedback from car enthusiasts, daily commuters, and highway tourers across India.
          </p>
        </div>

        <div className="testimonials-grid">
          {customerReviews.map((review) => (
            <div key={review.id} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>

              <h3 className="testimonial-title">"{review.title}"</h3>
              <p className="testimonial-text">{review.text}</p>

              <div className="testimonial-author">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="author-avatar"
                  loading="lazy" 
                />
                <div className="author-info">
                  <h4>
                    {review.name}
                    {review.verified && (
                      <CheckCircle2 size={14} color="#10B981" title="Verified Driver" />
                    )}
                  </h4>
                  <span className="author-vehicle">{review.vehicle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
