import React from 'react';
import { 
  Award, 
  BadgePercent, 
  Truck, 
  RotateCcw, 
  Lock, 
  Headphones, 
  CheckCircle 
} from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Every part is strictly tested for precision OEM tolerances, heat endurance, and finish."
  },
  {
    icon: BadgePercent,
    title: "Best Prices",
    description: "Direct manufacturing relationships ensure you get premium luxury car gear at honest direct prices."
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Lightning-fast dispatch with air express shipping across all pin codes in India."
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "Hassle-free 7-day doorstep replacement and return guarantee if fitment isn't 100% perfect."
  },
  {
    icon: Lock,
    title: "Secure Shopping",
    description: "End-to-end 256-bit encrypted checkout supporting UPI, Cards, NetBanking and COD."
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Dedicated automotive gear specialists available 7 days a week for compatibility advice."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <CheckCircle size={14} /> The AutoGear Advantage
          </span>
          <h2 className="section-title">Why Choose AutoGear?</h2>
          <p className="section-description">
            We are car enthusiasts building accessories that meet the highest automotive engineering standards.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="benefit-card">
                <div className="benefit-icon-wrap">
                  <IconComponent size={28} />
                </div>
                <div className="benefit-content">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
