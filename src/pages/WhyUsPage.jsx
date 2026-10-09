import React from 'react';
import SEO from '../components/SEO';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import PageBanner from '../components/PageBanner';
import CallToActionBanner from '../components/CallToActionBanner';
import { ShieldCheck } from 'lucide-react';

const WhyUsPage = () => {
  return (
    <div className="why-us-page">
      <SEO 
        title="Why Choose Us | Trusted Car Mechanics & Genuine Parts in Anand"
        description="Discover why car owners across Anand, Vidyanagar, and Karamsad trust Saini Car World for transparent pricing, certified mechanics, and 100% genuine parts."
        keywords="Why Saini Car World, Best car mechanic Anand, Reliable car garage Anand, Trusted car workshop Gujarat"
        canonicalUrl="https://sainicarworld.com/why-choose-us"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sainicarworld.com/" },
            { "@type": "ListItem", "position": 2, "name": "Why Choose Us", "item": "https://sainicarworld.com/why-choose-us" }
          ]
        }}
      />
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
