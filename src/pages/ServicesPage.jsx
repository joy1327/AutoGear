import React from 'react';
import ServicesSection from '../components/ServicesSection';
import PageBanner from '../components/PageBanner';
import CallToActionBanner from '../components/CallToActionBanner';
import { Wrench } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* Standardized Page Banner */}
      <PageBanner 
        tag="Full Automotive Workshop"
        tagIcon={Wrench}
        title="Car Services & Repairs in Anand"
        subtitle="Reliable periodic maintenance, mechanical repairs, denting & painting, AC care, washing, and tyre services at Saini Car World."
        breadcrumbs={[{ label: 'Services' }]}
        showActions={true}
      />

      {/* Main Services Grid Section */}
      <ServicesSection />

      {/* Standardized Booking Callout Banner */}
      <CallToActionBanner 
        tag="Direct Workshop Assistance"
        title="Ready to Schedule Your Vehicle Service?"
        subtitle="Call us directly or drive to our workshop near Indira Gandhi Statue, Lambhavel Road, Anand for priority inspection."
      />
    </div>
  );
};

export default ServicesPage;
