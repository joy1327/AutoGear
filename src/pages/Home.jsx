import React from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import QuickActionBar from '../components/QuickActionBar';
import ServicesSection from '../components/ServicesSection';
import AccessoriesSection from '../components/AccessoriesSection';
import AdditionalOfferingsSection from '../components/AdditionalOfferingsSection';
import CarBrandsSlider from '../components/CarBrandsSlider';
import AboutSection from '../components/AboutSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div className="home-page">
      <SEO 
        title="Saini Car World | Complete Car Care & Accessories in Anand, Gujarat"
        description="Saini Car World in Anand, Gujarat provides complete car servicing, mechanical repairs, denting & painting, AC service, car wash, tyres, and car accessories under one roof."
        keywords="Car service in Anand, Car repair in Anand, Car accessories in Anand, Car servicing in Anand Gujarat, Car AC repair in Anand, Car wash in Anand, Tyre services in Anand, Car denting painting in Anand, Saini Car World Anand"
        canonicalUrl="https://sainicarworld.com/"
      />
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

      {/* 6. Supported Car Brands (Interactive Horizontal Slider) */}
      <CarBrandsSlider />

      {/* 7. About Saini Car World */}
      <AboutSection />

      {/* 8. Why Choose Saini Car World (Trust Cards) */}
      <WhyChooseUsSection />

      {/* 9. Frequently Asked Questions (with Google FAQPage schema) */}
      <FAQSection />

      {/* 10. Contact Section & Interactive Google Map */}
      <ContactSection />
    </div>
  );
};

export default Home;
