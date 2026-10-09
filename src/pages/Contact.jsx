import React from 'react';
import SEO from '../components/SEO';
import ContactSection from '../components/ContactSection';
import PageBanner from '../components/PageBanner';
import { MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-page">
      <SEO 
        title="Contact Saini Car World | Workshop Location & Phone in Anand"
        description="Visit Saini Car World at Municipal Shopping Center, Near Indira Gandhi Statue, Lambhavel Road, Anand, Gujarat. Call +91 95375 21273 for bookings."
        keywords="Contact Saini Car World, Car workshop address Anand, Saini Car World phone number, Car service Anand directions"
        canonicalUrl="https://sainicarworld.com/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Saini Car World",
          "url": "https://sainicarworld.com/contact",
          "mainEntity": {
            "@type": "AutoRepair",
            "name": "Saini Car World",
            "telephone": "+919537521273",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Shop No. 5 & 6, Municipal Shopping Center, Near Indira Gandhi Statue, Lambhavel Road, Ganesh Colony",
              "addressLocality": "Anand",
              "addressRegion": "Gujarat",
              "postalCode": "388001",
              "addressCountry": "IN"
            }
          }
        }}
      />
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
