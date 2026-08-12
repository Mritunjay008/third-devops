import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Flame, Clock, Truck, Home, Phone, RefreshCw } from 'lucide-react';

export default function OrderTrackerModal({ isOpen, onClose, activeOrder }) {
  if (!isOpen || !activeOrder) return null;

  const [currentStep, setCurrentStep] = useState(activeOrder.statusStep || 2);

  useEffect(() => {
    // Simulate step progression
    const timer = setTimeout(() => {
      if (currentStep < 4) {
        setCurrentStep(prev => prev + 1);
      }
    }, 15000); // Progress step every 15 seconds for demonstration
    return () => clearTimeout(timer);
  }, [currentStep]);

  const steps = [
    { step: 1, title: 'Order Received', desc: 'Confirmed by thakur.08 kitchen', icon: Flame },
    { step: 2, title: 'Slow Dum Preparation', desc: 'Marinated & cooked over glowing charcoal', icon: Clock },
    { step: 3, title: 'Out for Delivery', desc: 'Valet rider en route to your address', icon: Truck },
    { step: 4, title: 'Delivered', desc: 'Hot artisanal meal delivered! Enjoy', icon: Home }
  ];

  return (
    <div className="modal-backdrop">
      <div className="modal-container glass-card" style={{ maxWidth: '580px', width: '92%', padding: '0', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          background: 'linear-gradient(135deg, #1c1917 0%, #292524 100%)',
          borderBottom: '1px solid rgba(245, 158, 11, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '9999px',
              background: currentStep === 4 ? '#10b981' : '#f59e0b',
              boxShadow: currentStep === 4 ? '0 0 10px #10b981' : '0 0 10px #f59e0b'
            }} />
            <div>
              <span style={{ fontSize: '0.75rem', color: '#f59e0b', fontWeight: 700, textTransform: 'lowercase' }}>
                live order tracker
              </span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }} className="lowercase-brand">
                Order #{activeOrder.orderId}
              </h3>
            </div>
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

        <div style={{ padding: '1.5rem', maxHeight: '70vh', overflowY: 'auto' }}>
          {/* Estimated Time Banner */}
          <div style={{
            padding: '1rem 1.25rem',
            borderRadius: '12px',
            background: 'rgba(245, 158, 11, 0.1)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.5rem'
          }}>
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Estimated Delivery Time</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff' }}>
                {currentStep === 4 ? 'Delivered 🎉' : '20 – 30 Minutes'}
              </div>
            </div>

            <div style={{
              background: 'rgba(239, 68, 68, 0.2)',
              border: '1px solid #ef4444',
              color: '#fca5a5',
              padding: '4px 12px',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'lowercase'
            }}>
              {steps.find(s => s.step === currentStep)?.title}
            </div>
          </div>

          {/* Timeline Visual */}
          <div style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{
              position: 'absolute',
              left: '11px',
              top: '12px',
              bottom: '12px',
              width: '2px',
              background: 'var(--border-subtle)'
            }} />

            {steps.map((st) => {
              const isCompleted = currentStep > st.step;
              const isCurrent = currentStep === st.step;
              const IconComp = st.icon;

              return (
                <div key={st.step} style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  marginBottom: '1.25rem'
                }}>
                  {/* Icon Circle */}
                  <div style={{
                    position: 'absolute',
                    left: '-1.5rem',
                    width: '24px',
                    height: '24px',
                    borderRadius: '9999px',
                    background: isCompleted || isCurrent ? (isCurrent ? '#ef4444' : '#10b981') : '#292524',
                    border: isCurrent ? '2px solid #ffffff' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: isCurrent ? '0 0 10px rgba(239, 68, 68, 0.6)' : 'none'
                  }}>
                    <IconComp style={{ width: '12px', height: '12px', color: '#ffffff' }} />
                  </div>

                  <div style={{ paddingLeft: '0.5rem' }}>
                    <div style={{
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      color: isCompleted || isCurrent ? '#ffffff' : 'var(--text-dim)',
                      textTransform: 'lowercase'
                    }}>
                      {st.title}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      {st.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Item Details */}
          <div style={{
            padding: '1rem',
            borderRadius: '10px',
            background: 'rgba(28, 25, 23, 0.8)',
            border: '1px solid var(--border-subtle)'
          }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f59e0b', marginBottom: '0.5rem' }}>
              Items in Order ({activeOrder.items?.reduce((s, i) => s + i.quantity, 0)})
            </div>
            {activeOrder.items?.map((it, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.85rem',
                color: '#ffffff',
                marginBottom: '4px'
              }}>
                <span>{it.quantity}x {it.name}</span>
                <span style={{ color: 'var(--text-muted)' }}>₹{it.price * it.quantity}</span>
              </div>
            ))}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontWeight: 800,
              fontSize: '0.95rem',
              color: '#f59e0b',
              marginTop: '0.5rem',
              paddingTop: '0.5rem',
              borderTop: '1px dashed var(--border-subtle)'
            }}>
              <span>Paid via {activeOrder.paymentMethod?.toUpperCase()}</span>
              <span>₹{activeOrder.grandTotal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
