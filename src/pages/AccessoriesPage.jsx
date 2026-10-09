import React from 'react';
import SEO from '../components/SEO';
import AccessoriesSection from '../components/AccessoriesSection';
import AdditionalOfferingsSection from '../components/AdditionalOfferingsSection';
import PageBanner from '../components/PageBanner';
import CallToActionBanner from '../components/CallToActionBanner';
import { Shield } from 'lucide-react';

const AccessoriesPage = () => {
  return (
    <div className="accessories-page">
      <SEO 
        title="Car Accessories & Genuine Spare Parts Store in Anand | Saini Car World"
        description="Premium car interior styling, exterior aerodynamic kits, LED lighting, seat covers, Android touchscreen audio, and genuine car spares in Anand, Gujarat."
        keywords="Car accessories Anand, Car accessories shop Anand, Car seat covers Anand, Car lights Anand, Android car stereo Anand Gujarat, Saini Car World accessories"
        canonicalUrl="https://sainicarworld.com/accessories"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sainicarworld.com/" },
            { "@type": "ListItem", "position": 2, "name": "Accessories", "item": "https://sainicarworld.com/accessories" }
          ]
        }}
      />
      {/* Standardized Page Banner */}
      <PageBanner 
        tag="Genuine Automotive Stock"
        tagIcon={Shield}
        title="Car Accessories & Spare Parts"
        subtitle="Upgrade comfort, aesthetics, and performance with authentic seat covers, lighting, mats, batteries, stereo systems, and mechanical components at Saini Car World, Anand."
        breadcrumbs={[{ label: 'Accessories' }]}
        showActions={true}
      />

      {/* Main Accessories Section */}
      <AccessoriesSection />

      {/* Additional Critical Offerings */}
      <AdditionalOfferingsSection />

      {/* Standardized Inquiries Banner */}
      <CallToActionBanner 
        tag="Availability & Fitment Check"
        title="Looking for a Specific Part or Accessory?"
        subtitle="We stock genuine parts and accessories for all popular car models in India. Call our team to verify fitment and availability."
        secondaryActionText="Visit Store in Anand"
      />
    </div>
  );
};

export default AccessoriesPage;
