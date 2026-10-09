import React from 'react';
import SEO from '../components/SEO';
import ServicesSection from '../components/ServicesSection';
import PageBanner from '../components/PageBanner';
import FAQSection from '../components/FAQSection';
import CallToActionBanner from '../components/CallToActionBanner';
import { Wrench } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <SEO 
        title="Car Services & Mechanical Repairs in Anand | Saini Car World"
        description="Comprehensive car repair, periodic maintenance, denting painting, car AC gas refill, foam wash, and wheel alignment services in Anand, Gujarat at Saini Car World."
        keywords="Car service Anand, Car repair Anand Gujarat, Car AC repair Anand, Car denting painting Anand, Car washing Anand, Wheel alignment Anand"
        canonicalUrl="https://sainicarworld.com/services"
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sainicarworld.com/" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://sainicarworld.com/services" }
              ]
            },
            {
              "@type": "Service",
              "serviceType": "Automotive Repair and Maintenance",
              "provider": {
                "@type": "AutoRepair",
                "name": "Saini Car World",
                "telephone": "+919537521273",
                "address": "Shop No. 5 & 6, Municipal Shopping Center, Near Indira Gandhi Statue, Lambhavel Road, Anand, Gujarat 388001"
              },
              "areaServed": "Anand, Gujarat",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Car Workshop Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Regular Periodic Maintenance" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Engine & Mechanical Repairs" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Denting & Painting" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Car AC Repair & Gas Recharge" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Car Foam Wash & Detailing" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tyre Replacement & 3D Wheel Alignment" } }
                ]
              }
            }
          ]
        }}
      />
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

      {/* Frequently Asked Questions */}
      <FAQSection />

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
