import React, { useState } from 'react';
import { X, CheckCircle, CreditCard, Truck, Store, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CheckoutModal({ isOpen, onClose, plate = [], onOrderPlaced }) {
  if (!isOpen) return null;

  const [orderType, setOrderType] = useState('delivery'); // 'delivery' or 'pickup'
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState('');

  const subtotal = plate.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const gstTax = Math.round(subtotal * 0.05); // 5% GST
  const deliveryFee = orderType === 'delivery' ? (subtotal > 500 ? 0 : 50) : 0;
  const grandTotal = subtotal + gstTax + deliveryFee;

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (!name || !phone || (orderType === 'delivery' && !address)) {
      setError('Please fill in all required contact and delivery fields.');
      return;
    }

    const orderId = `NV-${Math.floor(10000 + Math.random() * 90000)}`;
    const newOrder = {
      orderId,
      orderType,
      customer: { name, phone, address, instructions },
      items: [...plate],
      subtotal,
      gstTax,
      deliveryFee,
      grandTotal,
      paymentMethod,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      statusStep: 1, // 1: Placed, 2: Preparing, 3: Out for Delivery, 4: Delivered
      estimatedMins: 30
    };

    onOrderPlaced(newOrder);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-container glass-card" style={{ maxWidth: '620px', width: '92%', padding: '0', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          background: '#1c1917',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f59e0b', textTransform: 'lowercase' }}>
              final step
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }} className="lowercase-brand">
              confirm dining order
            </h3>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            <X style={{ width: '22px', height: '22px' }} />
          </button>
        </div>

        <form onSubmit={handleSubmitOrder} style={{ padding: '1.5rem', maxHeight: '70vh', overflowY: 'auto' }}>
          {error && (
            <div style={{
              padding: '0.75rem',
              borderRadius: '8px',
              background: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid #ef4444',
              color: '#fca5a5',
              fontSize: '0.85rem',
              marginBottom: '1rem'
            }}>
              {error}
            </div>
          )}

          {/* Delivery vs Pickup Selector */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f59e0b', display: 'block', marginBottom: '0.5rem' }}>
              order type:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={() => setOrderType('delivery')}
                style={{
                  padding: '0.75rem',
                  borderRadius: '10px',
                  background: orderType === 'delivery' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(28, 25, 23, 0.8)',
                  border: orderType === 'delivery' ? '1px solid #ef4444' : '1px solid var(--border-subtle)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                <Truck style={{ width: '18px', height: '18px', color: '#f59e0b' }} />
                <span>Doorstep Delivery</span>
              </button>

              <button
                type="button"
                onClick={() => setOrderType('pickup')}
                style={{
                  padding: '0.75rem',
                  borderRadius: '10px',
                  background: orderType === 'pickup' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(28, 25, 23, 0.8)',
                  border: orderType === 'pickup' ? '1px solid #ef4444' : '1px solid var(--border-subtle)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                <Store style={{ width: '18px', height: '18px', color: '#10b981' }} />
                <span>Self Pickup / Takeaway</span>
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                Your Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Rahul Sharma"
                value={name}
                onChange={e => setName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '8px',
                  background: 'rgba(28, 25, 23, 0.8)',
                  border: '1px solid var(--border-subtle)',
                  color: '#ffffff',
                  fontSize: '0.9rem'
                }}
                required
              />
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '8px',
                  background: 'rgba(28, 25, 23, 0.8)',
                  border: '1px solid var(--border-subtle)',
                  color: '#ffffff',
                  fontSize: '0.9rem'
                }}
                required
              />
            </div>
          </div>

          {orderType === 'delivery' && (
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                Delivery Address *
              </label>
              <textarea
                placeholder="Flat No / Street / Landmark details"
                value={address}
                onChange={e => setAddress(e.target.value)}
                rows={2}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '8px',
                  background: 'rgba(28, 25, 23, 0.8)',
                  border: '1px solid var(--border-subtle)',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  resize: 'none'
                }}
                required
              />
            </div>
          )}

          {/* Payment Method */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f59e0b', display: 'block', marginBottom: '0.5rem' }}>
              select payment option:
            </label>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {[
                { id: 'upi', label: '⚡ GPay / PhonePe / UPI' },
                { id: 'card', label: '💳 Credit / Debit Card' },
                { id: 'cod', label: '💵 Cash / Pay on Delivery' }
              ].map(pm => (
                <button
                  key={pm.id}
                  type="button"
                  onClick={() => setPaymentMethod(pm.id)}
                  style={{
                    padding: '0.5rem 0.9rem',
                    borderRadius: '8px',
                    background: paymentMethod === pm.id ? 'rgba(16, 185, 129, 0.2)' : 'rgba(28, 25, 23, 0.8)',
                    border: paymentMethod === pm.id ? '1px solid #10b981' : '1px solid var(--border-subtle)',
                    color: '#ffffff',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {pm.label}
                </button>
              ))}
            </div>
          </div>

          {/* Bill Summary Box */}
          <div style={{
            padding: '1rem',
            borderRadius: '10px',
            background: 'rgba(28, 25, 23, 0.9)',
            border: '1px solid var(--border-subtle)',
            marginBottom: '1rem'
          }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
              Bill Breakdown ({plate.reduce((sum, i) => sum + i.quantity, 0)} items)
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
              <span>Items Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
              <span>GST Tax (5%)</span>
              <span>₹{gstTax}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
              <span>Delivery Fee</span>
              <span>{deliveryFee === 0 ? <strong style={{ color: '#10b981' }}>FREE</strong> : `₹${deliveryFee}`}</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '1.1rem',
              fontWeight: 800,
              color: '#f59e0b',
              marginTop: '0.5rem',
              paddingTop: '0.5rem',
              borderTop: '1px dashed var(--border-subtle)'
            }}>
              <span>Grand Total</span>
              <span>₹{grandTotal}</span>
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ width: '100%', padding: '0.85rem', justifyContent: 'center', fontSize: '1rem' }}
          >
            <span>place non-veg order</span>
            <ArrowRight style={{ width: '18px', height: '18px' }} />
          </button>
        </form>
      </div>
    </div>
  );
}
