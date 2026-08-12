import React from 'react';
import { X, MapPin, Clock, Car, Phone, Navigation, ExternalLink } from 'lucide-react';

export default function MapModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-container glass-card" style={{ maxWidth: '520px', width: '92%', padding: '0', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          background: '#1c1917',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin style={{ width: '20px', height: '20px', color: '#ef4444' }} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }} className="lowercase-brand">
              location &amp; directions
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

        <div style={{ padding: '1.5rem' }}>
          {/* Map Preview Graphic */}
          <div style={{
            height: '180px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #1f1d1a 0%, #292524 100%)',
            border: '1px solid var(--border-subtle)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '8px',
            marginBottom: '1.5rem',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.15,
              backgroundImage: 'radial-gradient(#ef4444 1px, transparent 1px)',
              backgroundSize: '16px 16px'
            }} />

            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '9999px',
              background: 'rgba(239, 68, 68, 0.2)',
              border: '1px solid #ef4444',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
              boxShadow: '0 0 20px rgba(239, 68, 68, 0.5)'
            }}>
              <MapPin style={{ width: '24px', height: '24px', color: '#ef4444' }} />
            </div>

            <div style={{ zIndex: 1, textAlign: 'center' }}>
              <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '1.1rem' }} className="lowercase-brand">
                thakur.08 non-veg kitchen &amp; grill
              </div>
              <div style={{ fontSize: '0.8rem', color: '#f59e0b' }}>
                Cyber City, Sector 8, DLF Phase 2
              </div>
            </div>
          </div>

          {/* Details list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <Clock style={{ width: '18px', height: '18px', color: '#f59e0b', marginTop: '2px' }} />
              <div>
                <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.9rem' }}>Operating Hours</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Monday – Sunday: 12:00 PM to 11:30 PM (Kitchen closes 11:00 PM)
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <Car style={{ width: '18px', height: '18px', color: '#10b981', marginTop: '2px' }} />
              <div>
                <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.9rem' }}>Valet Parking Available</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Complimentary valet parking at front entrance for all dining guests.
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <Phone style={{ width: '18px', height: '18px', color: '#38bdf8', marginTop: '2px' }} />
              <div>
                <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.9rem' }}>Table Helpline &amp; Reservations</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  +91 98765 43210 / reservations@thakur08.com
                </div>
              </div>
            </div>
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              width: '100%',
              padding: '0.8rem',
              justifyContent: 'center',
              textDecoration: 'none'
            }}
          >
            <Navigation style={{ width: '18px', height: '18px' }} />
            <span>open in google maps</span>
            <ExternalLink style={{ width: '14px', height: '14px' }} />
          </a>
        </div>
      </div>
    </div>
  );
}
