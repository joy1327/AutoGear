import React, { useState, useEffect } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export const faqsData = [
  {
    question: "Where is Saini Car World located in Anand, Gujarat?",
    answer: "Saini Car World is conveniently located at Shop No. 5 & 6, Municipal Shopping Center, Near Indira Gandhi Statue, Lambhavel Road, Ganesh Colony, Anand, Gujarat 388001. We are easily reachable within 5–10 minutes from Anand city center, Vallabh Vidyanagar, and Karamsad."
  },
  {
    question: "What car services and repairs do you offer under one roof?",
    answer: "We provide comprehensive multi-brand car care including: periodic engine servicing, clutch & gearbox repairs, computerized denting & painting in a dust-free booth, car AC repairs & R134a refrigerant gas recharge, snow foam car wash & interior detailing, tyre replacement, and 3D computerized laser wheel alignment."
  },
  {
    question: "Do you use 100% genuine OEM spare parts and certified engine oils?",
    answer: "Yes, absolutely. We only use manufacturer-approved engine oils (synthetic and premium grades), OEM filters, authentic brake pads, and verified spare parts. All parts and services are documented with transparent billing."
  },
  {
    question: "Do you provide car pick-up and drop facility in Anand and Vidyanagar?",
    answer: "Yes! We provide convenient vehicle pick-up and doorstep drop-off across Anand, Vallabh Vidyanagar, Karamsad, and neighboring regions for scheduled periodic car maintenance and servicing. You can schedule your pickup by calling +91 95375 21273 or messaging us on WhatsApp."
  },
  {
    question: "How accurate is your computerized color-matched denting and painting?",
    answer: "Our technicians use computerized OEM paint shade matching based on your vehicle's factory color code. Painting is carried out inside an enclosed, dust-free automotive spray booth with high-gloss protective clear coat to guarantee a seamless showroom finish."
  },
  {
    question: "Do automotive accessories include professional fitting and warranty?",
    answer: "Yes. All accessories purchased from our Anand store—including custom leatherette seat covers, 7D floor mats, Android infotainment screens, ambient cabin lights, and LED headlights—are fitted in-house by skilled technicians with manufacturer warranty."
  },
  {
    question: "How long does a standard periodic car service take?",
    answer: "A standard routine periodic maintenance service (engine oil change, filter replacement, brake inspection, fluid top-ups, and thorough 40-point vehicle checkup) usually takes 3 to 4 hours. Same-day delivery is standard for morning check-ins."
  },
  {
    question: "What are your workshop working hours and days?",
    answer: "Our workshop and accessories center is open Monday through Saturday from 9:30 AM to 7:00 PM. We are closed on Sundays."
  }
];

const FAQSection = ({ showTitle = true, limit = 8 }) => {
  const [openIndex, setOpenIndex] = useState(0); // Open first by default
  const items = faqsData.slice(0, limit);

  // Injects Schema.org FAQPage structured data for rich Google snippets
  useEffect(() => {
    const faqSchemaId = 'faq-page-jsonld';
    let scriptElem = document.getElementById(faqSchemaId);

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": items.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    if (!scriptElem) {
      scriptElem = document.createElement('script');
      scriptElem.id = faqSchemaId;
      scriptElem.type = 'application/ld+json';
      document.head.appendChild(scriptElem);
    }
    scriptElem.textContent = JSON.stringify(schemaData);

    return () => {
      if (scriptElem) scriptElem.remove();
    };
  }, [items]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container" style={{ maxWidth: '920px' }}>
        {showTitle && (
          <div className="section-header">
            <span className="section-tag">
              <HelpCircle size={14} /> Clear Answers & Transparency
            </span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">
              Find quick answers to common questions about car servicing, genuine parts, pricing, and visiting our Anand workshop.
            </p>
          </div>
        )}

        {/* Accordion Container */}
        <div className="faq-accordion-list">
          {items.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item-card ${isOpen ? 'active' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-icon-wrapper">
                    <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotate' : ''}`} />
                  </span>
                </button>

                <div 
                  id={`faq-answer-${idx}`}
                  className={`faq-answer-collapse ${isOpen ? 'open' : ''}`}
                >
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Contact Footer Bar */}
        <div className="faq-support-box">
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '4px' }}>
              Have another question about your vehicle?
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
              Call our Anand service advisors directly or drop us a WhatsApp message.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href={`tel:${businessInfo.phoneRaw}`} className="btn btn-call btn-sm">
              <Phone size={15} /> Call: {businessInfo.phone}
            </a>
            <a 
              href={`https://wa.me/${businessInfo.whatsappNumber}?text=Hi%20Saini%20Car%20World%2C%20I%20have%20a%20question%20regarding%20car%20service`} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-outline-dark btn-sm"
              style={{ borderColor: '#10B981', color: '#047857' }}
            >
              <MessageSquare size={15} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
