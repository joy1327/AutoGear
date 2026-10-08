import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { showToast } = useShop();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setIsSubscribed(true);
      showToast('Thank you for subscribing! Check your inbox for exclusive perks.', 'success');
      setEmail('');
    } else {
      showToast('Please enter a valid email address.', 'warning');
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-box">
          <h2 className="newsletter-title">Stay Updated With AutoGear</h2>
          <p className="newsletter-desc">
            Get the latest offers, new arrivals and car accessory updates directly in your inbox.
          </p>

          {isSubscribed ? (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(16, 185, 129, 0.2)', border: '1px solid #10B981', color: '#FFFFFF', padding: '12px 24px', borderRadius: '8px' }}>
              <CheckCircle2 size={20} color="#10B981" />
              <span>You are subscribed! Welcome to the AutoGear club.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn btn-primary">
                Subscribe <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
