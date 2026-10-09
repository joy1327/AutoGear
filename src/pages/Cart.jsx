import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useShop } from '../context/ShopContext';
import { 
  Trash2, 
  ShoppingBag, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Tag, 
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, cartSubtotal, showToast } = useShop();
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === 'DRIVE10') {
      setDiscountPercent(10);
      setCouponApplied(true);
      showToast('Promo code DRIVE10 applied! 10% discount added.', 'success');
    } else {
      showToast('Invalid coupon code. Try using DRIVE10', 'warning');
    }
  };

  const discountAmount = Math.round((cartSubtotal * discountPercent) / 100);
  const shippingFee = cartSubtotal >= 1999 || cartSubtotal === 0 ? 0 : 149;
  const grandTotal = cartSubtotal - discountAmount + shippingFee;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      showToast('Order demonstration placed successfully! (Mock checkout)', 'success');
      clearCart();
    }, 1500);
  };

  if (cart.length === 0) {
    return (
      <div className="section-padding" style={{ backgroundColor: '#F8F9FA', textAlign: 'center' }}>
        <SEO title="Shopping Cart" noindex={true} />
        <div className="container" style={{ maxWidth: '580px', background: '#FFFFFF', padding: '60px 30px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
          <ShoppingBag size={64} color="#D1D5DB" style={{ margin: '0 auto 20px auto' }} />
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '10px' }}>Your Shopping Cart is Empty</h2>
          <p style={{ color: '#6B7280', marginBottom: '28px' }}>
            Looks like you haven't added any automotive upgrades yet. Explore our bestsellers and top picks!
          </p>
          <Link to="/products" className="btn btn-primary btn-lg">
            Start Shopping <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#F8F9FA', padding: '40px 0 80px 0' }}>
      <SEO title="Shopping Cart" noindex={true} />
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#666', marginBottom: '24px' }}>
          <Link to="/" style={{ color: '#333' }}>Home</Link>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Shopping Cart ({cart.length} items)</span>
        </div>

        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '32px' }}>
          Your Shopping Cart
        </h1>

        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1.8fr 1fr', 
            gap: '32px', 
            alignItems: 'start' 
          }}
          className="cart-grid"
        >
          {/* Left Column: Cart Items List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
              <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Products in Cart</span>
                <button 
                  type="button" 
                  onClick={clearCart}
                  style={{ color: '#EF4444', fontSize: '0.85rem', fontWeight: 600 }}
                >
                  Clear All
                </button>
              </div>

              {cart.map((item) => (
                <div 
                  key={item.product.id}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    padding: '20px 24px', 
                    borderBottom: '1px solid #F3F4F6',
                    gap: '16px'
                  }}
                  className="cart-item-row"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '10px' }} 
                    />
                    <div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase' }}>
                        {item.product.categoryName}
                      </span>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, marginTop: '2px' }}>
                        <Link to={`/product/${item.product.id}`}>{item.product.name}</Link>
                      </h4>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '4px' }}>
                        <span style={{ fontWeight: 800, color: 'var(--color-primary)' }}>
                          ₹{item.product.price.toLocaleString('en-IN')}
                        </span>
                        {item.product.originalPrice && (
                          <span style={{ fontSize: '0.82rem', textDecoration: 'line-through', color: '#9CA3AF' }}>
                            ₹{item.product.originalPrice.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Quantity and Actions */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--color-border)', borderRadius: '6px', overflow: 'hidden' }}>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, -1)}
                        style={{ width: '32px', height: '36px', background: '#F9FAFB', fontWeight: 600 }}
                      >
                        -
                      </button>
                      <span style={{ width: '36px', textAlign: 'center', fontWeight: 700, fontSize: '0.9rem' }}>
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, 1)}
                        style={{ width: '32px', height: '36px', background: '#F9FAFB', fontWeight: 600 }}
                      >
                        +
                      </button>
                    </div>

                    <span style={{ fontWeight: 800, fontSize: '1.05rem', minWidth: '85px', textAlign: 'right' }}>
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>

                    <button 
                      type="button"
                      onClick={() => removeFromCart(item.product.id)}
                      style={{ color: '#9CA3AF', padding: '6px' }}
                      title="Remove Item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Link to="/products" className="btn btn-outline-dark btn-sm">
                ← Continue Shopping
              </Link>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '20px' }}>
                Order Summary
              </h3>

              {/* Coupon input */}
              <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                <input
                  type="text"
                  placeholder="Coupon code (e.g. DRIVE10)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  style={{ flex: 1, padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '0.88rem' }}
                />
                <button type="submit" className="btn btn-secondary btn-sm">
                  Apply
                </button>
              </form>

              {couponApplied && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981', fontSize: '0.85rem', marginBottom: '16px' }}>
                  <CheckCircle2 size={16} /> 10% Discount applied!
                </div>
              )}

              {/* Cost Breakdown */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid #F3F4F6', paddingTop: '16px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#4B5563', fontSize: '0.92rem' }}>
                  <span>Item Subtotal</span>
                  <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
                </div>

                {discountAmount > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#E63946', fontSize: '0.92rem', fontWeight: 600 }}>
                    <span>Coupon Discount</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#4B5563', fontSize: '0.92rem' }}>
                  <span>Shipping Charges</span>
                  <span>
                    {shippingFee === 0 ? (
                      <strong style={{ color: '#10B981' }}>FREE</strong>
                    ) : (
                      `₹${shippingFee}`
                    )}
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 900, color: 'var(--color-primary)', borderTop: '1px solid var(--color-border)', paddingTop: '16px' }}>
                  <span>Total Amount</span>
                  <span>₹{grandTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary btn-lg"
                style={{ width: '100%', marginBottom: '16px' }}
                onClick={handleCheckout}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? 'Processing Order...' : 'Proceed to Checkout'} <ArrowRight size={18} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#6B7280', fontSize: '0.8rem' }}>
                <ShieldCheck size={16} color="#10B981" />
                <span>256-Bit SSL Encrypted Secure Checkout</span>
              </div>
            </div>

            {/* Free Shipping Progress */}
            <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', padding: '16px', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Truck size={20} color="#16A34A" />
                <span style={{ fontSize: '0.85rem', color: '#166534', fontWeight: 600 }}>
                  {cartSubtotal >= 1999 ? (
                    "Congratulations! You unlocked FREE Express Delivery."
                  ) : (
                    `Add ₹${(1999 - cartSubtotal).toLocaleString('en-IN')} more to get FREE Delivery!`
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .cart-grid {
            grid-template-columns: 1fr !important;
          }
          .cart-item-row {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Cart;
