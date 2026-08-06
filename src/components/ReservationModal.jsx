import React, { useState } from 'react';
import { X, Flame, CheckCircle2 } from 'lucide-react';

export default function ReservationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '2',
    date: new Date().toISOString().split('T')[0],
    time: '20:00',
    seating: 'live charcoal sigri table',
    specialNotes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={resetAndClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: 'none',
            color: 'var(--text-muted)',
            width: '36px',
            height: '36px',
            borderRadius: '9999px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease'
          }}
          aria-label="Close modal"
        >
          <X style={{ width: '20px', height: '20px' }} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
              <Flame style={{ width: '20px', height: '20px', color: '#ef4444' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff' }} className="lowercase-brand">
                reserve a table at thakur.08
              </h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
              book your table in advance for artisanal live charcoal grilling and slow dum biryanis.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }} className="lowercase-brand">
                  full name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. rohit thakur"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    background: 'rgba(28, 25, 23, 0.9)',
                    border: '1px solid var(--border-subtle)',
                    color: '#ffffff',
                    outline: 'none',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }} className="lowercase-brand">
                    phone number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(28, 25, 23, 0.9)',
                      border: '1px solid var(--border-subtle)',
                      color: '#ffffff',
                      outline: 'none',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }} className="lowercase-brand">
                    number of guests *
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(28, 25, 23, 0.9)',
                      border: '1px solid var(--border-subtle)',
                      color: '#ffffff',
                      outline: 'none',
                      fontSize: '0.9rem'
                    }}
                  >
                    <option value="1">1 guest</option>
                    <option value="2">2 guests</option>
                    <option value="4">4 guests</option>
                    <option value="6">6 guests</option>
                    <option value="8">8 guests</option>
                    <option value="12">12+ VIP chamber</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }} className="lowercase-brand">
                    date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(28, 25, 23, 0.9)',
                      border: '1px solid var(--border-subtle)',
                      color: '#ffffff',
                      outline: 'none',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }} className="lowercase-brand">
                    time slot *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(28, 25, 23, 0.9)',
                      border: '1px solid var(--border-subtle)',
                      color: '#ffffff',
                      outline: 'none',
                      fontSize: '0.9rem'
                    }}
                  >
                    <option value="13:00">1:00 pm (lunch)</option>
                    <option value="14:30">2:30 pm (lunch)</option>
                    <option value="19:30">7:30 pm (dinner)</option>
                    <option value="20:30">8:30 pm (dinner)</option>
                    <option value="21:45">9:45 pm (late dinner)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }} className="lowercase-brand">
                  seating area preference
                </label>
                <select
                  value={formData.seating}
                  onChange={(e) => setFormData({ ...formData, seating: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    background: 'rgba(28, 25, 23, 0.9)',
                    border: '1px solid var(--border-subtle)',
                    color: '#ffffff',
                    outline: 'none',
                    fontSize: '0.9rem'
                  }}
                >
                  <option value="live charcoal sigri table">live charcoal sigri table</option>
                  <option value="main dining lounge">main dining lounge</option>
                  <option value="vip private chamber">vip private chamber</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }} className="lowercase-brand">
                  meat preferences &amp; special requests
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. extra fiery spice for mutton biryani, birthday setup..."
                  value={formData.specialNotes}
                  onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    background: 'rgba(28, 25, 23, 0.9)',
                    border: '1px solid var(--border-subtle)',
                    color: '#ffffff',
                    outline: 'none',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem', width: '100%' }}>
                <span>confirm reservation at thakur.08</span>
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <CheckCircle2 style={{ width: '64px', height: '64px', color: '#10b981', margin: '0 auto 1.25rem auto' }} />
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }} className="lowercase-brand">
              reservation confirmed!
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              thank you <strong style={{ color: '#ffffff' }}>{formData.name}</strong>. your table for <strong>{formData.guests} guests</strong> on <strong>{formData.date} at {formData.time}</strong> at <span style={{ color: '#ef4444', fontWeight: 700 }} className="lowercase-brand">thakur.08</span> is reserved.
            </p>
            <div style={{
              background: 'rgba(28, 25, 23, 0.8)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              padding: '1rem',
              marginBottom: '1.5rem',
              textAlign: 'left',
              fontSize: '0.85rem'
            }}>
              <div style={{ color: '#f59e0b', fontWeight: 700, marginBottom: '4px' }}>seating: {formData.seating}</div>
              <div style={{ color: 'var(--text-muted)' }}>confirmation sms sent to {formData.phone}</div>
            </div>
            <button onClick={resetAndClose} className="btn-primary">
              <span>done</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
