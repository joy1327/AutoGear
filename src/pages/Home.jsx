import React from 'react';
import HeroSection from '../components/HeroSection';
import QuickActionBar from '../components/QuickActionBar';
import ServicesSection from '../components/ServicesSection';
import AccessoriesSection from '../components/AccessoriesSection';
import AdditionalOfferingsSection from '../components/AdditionalOfferingsSection';
import AboutSection from '../components/AboutSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Quick Contact / Action Bar */}
      <QuickActionBar />

      {/* 3. Our Services (6 Core Services with Exact Images) */}
      <ServicesSection />

      {/* 4. Car Accessories (14 Categories with Exact Images & Filter Tabs) */}
      <AccessoriesSection />

      {/* 5. Additional Offerings (Critical Mechanical Systems & Parts) */}
      <AdditionalOfferingsSection />

      {/* 6. About Saini Car World */}
      <AboutSection />

      {/* 7. Why Choose Saini Car World (Trust Cards) */}
      <WhyChooseUsSection />

      {/* 8. Contact Section & Interactive Google Map */}
      <ContactSection />
    </div>
  );
};

export default Home;
