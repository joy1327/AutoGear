import React from 'react';
import ContactSection from '../components/ContactSection';
import PageBanner from '../components/PageBanner';
import { MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Standardized Page Banner */}
      <PageBanner 
        tag="Workshop & Store Location"
        tagIcon={MapPin}
        title="Contact Saini Car World"
        subtitle="Located at Shop No. 5 & 6, Municipal Shopping Center, Near Indira Gandhi Statue, Lambhavel Road, Anand, Gujarat. Call us or visit our center during working hours."
        breadcrumbs={[{ label: 'Contact Us' }]}
        showActions={true}
      />

      <ContactSection />
    </div>
  );
};

export default Contact;
