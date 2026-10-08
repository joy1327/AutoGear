import React from 'react';
import { 
  ShieldCheck, 
  Wrench, 
  Sparkles, 
  MapPin, 
  Layers, 
  Users 
} from 'lucide-react';

const trustCards = [
  {
    icon: Layers,
    title: "Complete Car Care",
    description: "From routine periodic oil servicing and tune-ups to major engine and mechanical overhauls."
  },
  {
    icon: Sparkles,
    title: "Quality Accessories",
    description: "A wide range of tested car accessories, custom seat covers, floor mats, and high-beam LEDs."
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    description: "Easy-to-find workshop situated at Municipal Shopping Center, Near Indira Gandhi Statue in Anand."
  },
  {
    icon: Wrench,
    title: "Multiple Services Under One Roof",
    description: "Servicing, mechanical repair, AC recharge, denting, painting, washing, tyres, and accessories in one stop."
  },
  {
    icon: Users,
    title: "Experienced Technicians",
    description: "Skilled automotive mechanics equipped with modern diagnostics and specialized tools for various car models."
  },
  {
    icon: ShieldCheck,
    title: "Customer-Focused Service",
    description: "Clear communication, transparent service estimates, and honest advice tailored to your vehicle's needs."
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding" id="why-us" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <ShieldCheck size={14} /> Trust & Dependability
          </span>
          <h2 className="section-title">Why Choose Saini Car World?</h2>
          <p className="section-description">
            We focus on honest customer communication, skilled mechanical repairs, and genuine automotive accessories for car owners in Anand and surrounding areas.
          </p>
        </div>

        <div className="why-grid">
          {trustCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div key={index} className="why-card">
                <div className="why-icon-wrap">
                  <IconComponent size={24} />
                </div>
                <div className="why-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
