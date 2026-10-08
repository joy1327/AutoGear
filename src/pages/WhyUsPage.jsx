import React from 'react';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import PageBanner from '../components/PageBanner';
import CallToActionBanner from '../components/CallToActionBanner';
import { ShieldCheck } from 'lucide-react';

const WhyUsPage = () => {
  return (
    <div className="why-us-page">
      {/* Standardized Page Banner */}
      <PageBanner 
        tag="Local Excellence in Anand"
        tagIcon={ShieldCheck}
        title="Why Choose Saini Car World?"
        subtitle="Building long-term customer trust with comprehensive automotive solutions, genuine components, and experienced technical diagnostics."
        breadcrumbs={[{ label: 'Why Choose Us' }]}
        showActions={true}
      />

      {/* Trust Cards Grid */}
      <WhyChooseUsSection />

      {/* Standardized Workshop Location Banner */}
      <CallToActionBanner 
        tag="Convenient Anand Location"
        title="Visit Our Center in Anand, Gujarat"
        subtitle="Located at Shop No. 5 & 6, Municipal Shopping Center, Near Indira Gandhi Statue, Lambhavel Road, Anand. Drive in today for quick diagnosis."
        secondaryActionText="Open Google Maps"
      />
    </div>
  );
};

export default WhyUsPage;
