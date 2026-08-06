import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, CheckCircle, ArrowRight } from 'lucide-react';

export default function PlateDrawer({ isOpen, onClose, plate = [], setPlate }) {
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  if (!isOpen) return null;

  const handleQuantityChange = (id, delta) => {
    const updated = plate.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean);
    setPlate(updated);
  };

  const handleRemove = (id) => {
    setPlate(plate.filter(item => item.id !== id));
  };

  const subtotal = plate.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const gst = Math.round(subtotal * 0.05); // 5% GST
  const grandTotal = subtotal + gst;

  const handleCheckout = () => {
    setIsCheckedOut(true);
  };

  const handleDone = () => {
    setPlate([]);
    setIsCheckedOut(false);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      background: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      justifyContent: 'flex-end'
    }} onClick={onClose}>
      <div style={{
        width: '100%',
        maxWidth: '460px',
        height: '100%',
        background: '#141210',
        borderLeft: '1px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-10px 0 30px rgba(0,0,0,0.8)',
        position: 'relative'
      }} onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div style={{
          padding: '1.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag style={{ width: '22px', height: '22px', color: '#f59e0b' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }} className="lowercase-brand">
              your dining plate
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: 'none',
              color: 'var(--text-muted)',
              width: '32px',
              height: '32px',
              borderRadius: '9999px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X style={{ width: '18px', height: '18px' }} />
          </button>
        </div>

        {!isCheckedOut ? (
          <>
            {/* Drawer Body - Items */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
              {plate.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-muted)' }}>
                  <ShoppingBag style={{ width: '48px', height: '48px', opacity: 0.3, margin: '0 auto 1rem auto' }} />
                  <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }} className="lowercase-brand">
                    your plate is currently empty
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                    browse the thakur.08 menu and add delicious non-veg dishes!
                  </p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {plate.map((item) => (
                    <div key={item.id} style={{
                      background: 'rgba(28, 25, 23, 0.7)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '14px',
                      padding: '1rem',
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'center'
                    }}>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: '64px', height: '64px', borderRadius: '10px', objectFit: 'cover' }}
                      />
                      <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }} className="lowercase-brand">
                          {item.name}
                        </h4>
                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f59e0b' }}>
                          ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
                        </div>
                      </div>

                      {/* Controls */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          style={{
                            background: 'rgba(255, 255, 255, 0.08)',
                            border: 'none',
                            color: '#ffffff',
                            width: '26px',
                            height: '26px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <Minus style={{ width: '12px', height: '12px' }} />
                        </button>
                        <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff', width: '20px', textAlign: 'center' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                          style={{
                            background: 'rgba(255, 255, 255, 0.08)',
                            border: 'none',
                            color: '#ffffff',
                            width: '26px',
                            height: '26px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <Plus style={{ width: '12px', height: '12px' }} />
                        </button>
                        <button
                          onClick={() => handleRemove(item.id)}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#ef4444',
                            cursor: 'pointer',
                            padding: '4px',
                            marginLeft: '4px'
                          }}
                        >
                          <Trash2 style={{ width: '16px', height: '16px' }} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Drawer Footer - Price Breakdown */}
            {plate.length > 0 && (
              <div style={{
                padding: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(12, 10, 9, 0.95)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  <span>subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                  <span>restaurant gst (5%)</span>
                  <span>₹{gst}</span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  borderTop: '1px dashed rgba(255, 255, 255, 0.1)',
                  paddingTop: '0.75rem',
                  marginBottom: '1.25rem'
                }}>
                  <span className="lowercase-brand">grand total</span>
                  <span style={{ color: '#f59e0b' }}>₹{grandTotal}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.85rem' }}
                >
                  <span>proceed with thakur.08 order</span>
                  <ArrowRight style={{ width: '18px', height: '18px' }} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div style={{ flex: 1, padding: '2.5rem 1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <CheckCircle style={{ width: '64px', height: '64px', color: '#10b981', margin: '0 auto 1.25rem auto' }} />
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }} className="lowercase-brand">
              order placed successfully!
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              your non-veg dining order (₹{grandTotal}) has been dispatched to the <span style={{ color: '#ef4444', fontWeight: 700 }} className="lowercase-brand">thakur.08</span> charcoal pit kitchen.
            </p>
            <button onClick={handleDone} className="btn-primary">
              <span>back to menu</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
