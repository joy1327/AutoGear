import React from 'react';
import AccessoriesSection from '../components/AccessoriesSection';
import AdditionalOfferingsSection from '../components/AdditionalOfferingsSection';
import PageBanner from '../components/PageBanner';
import CallToActionBanner from '../components/CallToActionBanner';
import { Shield } from 'lucide-react';

const AccessoriesPage = () => {
  return (
    <div className="accessories-page">
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
