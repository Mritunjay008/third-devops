import React from 'react';
import { Flame, MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';

export default function ContactFooter({ onOpenReservation }) {
  return (
    <footer id="contact" style={{ background: '#090807', borderTop: '1px solid var(--border-subtle)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          {/* Brand Info */}
          <div>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '1.25rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #ef4444 0%, #991b1b 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Flame style={{ color: '#ffffff', width: '20px', height: '20px' }} />
              </div>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 800,
                color: '#ffffff'
              }} className="lowercase-brand">
                thakur.08
              </span>
            </a>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              authentic non-veg kitchen &amp; charcoal pit grill. home to 12-hour dum biryanis, clay tandoori kebabs, and rich meat curries.
            </p>
            <button onClick={onOpenReservation} className="btn-primary" style={{ padding: '0.6rem 1.25rem' }}>
              <Calendar style={{ width: '16px', height: '16px' }} />
              <span>book a table</span>
            </button>
          </div>

          {/* Opening Timings */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.25rem' }} className="lowercase-brand">
              kitchen &amp; grill timings
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock style={{ width: '16px', height: '16px', color: '#f59e0b' }} />
                <div>
                  <strong style={{ color: '#ffffff' }} className="lowercase-brand">mon - thu:</strong> 12:00 pm – 11:30 pm
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock style={{ width: '16px', height: '16px', color: '#ef4444' }} />
                <div>
                  <strong style={{ color: '#ffffff' }} className="lowercase-brand">fri - sun (late night):</strong> 12:00 pm – 1:00 am
                </div>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#10b981', marginTop: '0.25rem' }}>
                * live charcoal grill available all evening
              </div>
            </div>
          </div>

          {/* Location & Hotline */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.25rem' }} className="lowercase-brand">
              location &amp; delivery hotline
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin style={{ width: '18px', height: '18px', color: '#ef4444', flexShrink: 0, marginTop: '3px' }} />
                <span>thakur.08 boulevard, 4th block, royal dining avenue, indiranagar, bengaluru - 560038</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone style={{ width: '18px', height: '18px', color: '#f59e0b', flexShrink: 0 }} />
                <span style={{ color: '#ffffff', fontWeight: 700 }}>+91 98765 08080 / +91 98765 08081</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail style={{ width: '18px', height: '18px', color: '#fbbf24', flexShrink: 0 }} />
                <span>reservations@thakur08.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.82rem',
          color: 'var(--text-dim)'
        }}>
          <div className="lowercase-brand">
            © {new Date().getFullYear()} thakur.08 authentic non-veg kitchen &amp; grill. all rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#menu" style={{ color: 'var(--text-dim)', textDecoration: 'none' }} className="lowercase-brand">privacy policy</a>
            <a href="#menu" style={{ color: 'var(--text-dim)', textDecoration: 'none' }} className="lowercase-brand">terms of dining</a>
            <a href="#menu" style={{ color: 'var(--text-dim)', textDecoration: 'none' }} className="lowercase-brand">meat quality guarantee</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
