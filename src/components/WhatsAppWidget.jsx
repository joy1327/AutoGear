import React, { useState } from 'react';
import { MessageCircle, X, Send, Clock, ShieldCheck } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

const quickInquiries = [
  { label: '🚘 Book Car Service', text: 'Hi Saini Car World, I would like to book a periodic service for my car in Anand.' },
  { label: '✨ Check Accessories', text: 'Hi Saini Car World, I want to check availability for car accessories (seat covers/mats/lighting).' },
  { label: '🛠️ Denting & Paint Quote', text: 'Hi, I need an estimate for denting/scratch painting on my car. Can I share photos?' },
  { label: '📍 Location & Timing', text: 'Hi Saini Car World, could you share the workshop directions and available time slots today?' }
];

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = (textToSend) => {
    const finalMsg = textToSend || message.trim() || 'Hi Saini Car World, I would like to inquire about your automotive services.';
    const encoded = encodeURIComponent(finalMsg);
    const url = `https://wa.me/${businessInfo.whatsappNumber}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="whatsapp-widget-container" aria-label="WhatsApp Quick Support">
      {/* Floating Toggle Button */}
      <button
        type="button"
        className={`whatsapp-trigger-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close WhatsApp Chat" : "Chat on WhatsApp"}
        title="Chat with Saini Car World on WhatsApp"
      >
        {isOpen ? (
          <X size={26} color="#FFFFFF" />
        ) : (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        )}
        <span className="whatsapp-pulse-ring" />
      </button>

      {/* Interactive Chat Popup Card */}
      {isOpen && (
        <div className="whatsapp-popup-card" role="dialog" aria-modal="true" aria-label="WhatsApp quick chat modal">
          {/* Card Header */}
          <div className="whatsapp-card-header">
            <div className="whatsapp-header-info">
              <div className="whatsapp-avatar">
                <span>SCW</span>
                <span className="online-indicator" />
              </div>
              <div>
                <h4 className="whatsapp-header-title">{businessInfo.name}</h4>
                <p className="whatsapp-header-sub">
                  <Clock size={12} style={{ display: 'inline', marginRight: '4px' }} />
                  Replies in minutes (9:30 AM – 7:00 PM)
                </p>
              </div>
            </div>
            <button
              type="button"
              className="whatsapp-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Card Body */}
          <div className="whatsapp-card-body">
            <div className="whatsapp-bubble">
              <p>
                👋 <strong>Namaste!</strong> Welcome to Saini Car World, Anand.
              </p>
              <p style={{ marginTop: '6px', fontSize: '0.85rem', color: '#4B5563' }}>
                How can we assist your car today? Tap a quick option below or type your message:
              </p>
            </div>

            {/* Quick Inquiry Options */}
            <div className="whatsapp-quick-chips">
              {quickInquiries.map((inq, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="whatsapp-chip-btn"
                  onClick={() => handleSend(inq.text)}
                >
                  {inq.label}
                </button>
              ))}
            </div>

            <div className="whatsapp-trust-row">
              <ShieldCheck size={14} color="#10B981" />
              <span>Official Anand Workshop Helpline • 100% Genuine Care</span>
            </div>
          </div>

          {/* Card Footer / Input */}
          <div className="whatsapp-card-footer">
            <input
              type="text"
              placeholder="Type your message or car model..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
              className="whatsapp-input"
            />
            <button
              type="button"
              onClick={() => handleSend()}
              className="whatsapp-send-btn"
              aria-label="Send message on WhatsApp"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppWidget;
