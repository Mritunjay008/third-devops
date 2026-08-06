import React from 'react';
import { Flame, Utensils, Star, ShieldCheck, Clock, Award } from 'lucide-react';

export default function Hero({ onOpenReservation }) {
  return (
    <section style={{
      position: 'relative',
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '6rem',
      paddingBottom: '4rem',
      background: 'radial-gradient(circle at 50% 30%, rgba(220, 38, 38, 0.15) 0%, rgba(12, 10, 9, 1) 70%)',
      overflow: 'hidden'
    }}>
      {/* Subtle Background Glows */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '350px',
        height: '350px',
        background: 'rgba(245, 158, 11, 0.08)',
        filter: 'blur(100px)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'rgba(239, 68, 68, 0.12)',
        filter: 'blur(120px)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          {/* Hero Left Content */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(245, 158, 11, 0.12)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              marginBottom: '1.5rem'
            }}>
              <Flame style={{ width: '16px', height: '16px', color: '#f59e0b' }} />
              <span style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#fbbf24',
                letterSpacing: '0.05em'
              }} className="lowercase-brand">
                thakur.08 authentic non-veg dining
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              color: '#ffffff',
              marginBottom: '1.25rem',
              letterSpacing: '-0.03em'
            }}>
              where slow charcoal fire meets <span style={{
                background: 'linear-gradient(135deg, #ef4444 0%, #f59e0b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>pure meaty perfection</span>
            </h1>

            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              marginBottom: '2rem',
              maxWidth: '540px',
              lineHeight: 1.65
            }}>
              welcome to <strong style={{ color: '#ffffff' }} className="lowercase-brand">thakur.08</strong>. experience artisanal clay-oven kebabs, 12-hour slow dum mutton biryanis, fiery tandoori roasts, and rich hand-ground gravy cuts crafted with ancient charcoal pit techniques.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <a href="#menu" className="btn-primary">
                <Utensils style={{ width: '18px', height: '18px' }} />
                <span>explore non-veg menu</span>
              </a>
              <button onClick={onOpenReservation} className="btn-secondary">
                <Clock style={{ width: '18px', height: '18px' }} />
                <span>book a table</span>
              </button>
            </div>

            {/* Quality badges */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.75rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck style={{ width: '20px', height: '20px', color: '#10b981' }} />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }} className="lowercase-brand">100% farm-fresh cuts</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>ethically sourced meats</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award style={{ width: '20px', height: '20px', color: '#f59e0b' }} />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }} className="lowercase-brand">charcoal pit cooked</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>authentic wood embers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Card */}
          <div style={{ position: 'relative' }}>
            <div className="glass-panel" style={{
              padding: '1.5rem',
              borderRadius: '24px',
              boxShadow: '0 25px 50px -12px rgba(220, 38, 38, 0.3)',
              position: 'relative'
            }}>
              <div style={{
                width: '100%',
                height: '380px',
                borderRadius: '16px',
                background: 'linear-gradient(180deg, rgba(12,10,9,0.2) 0%, rgba(12,10,9,0.9) 100%), url("https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1.5rem'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(12, 10, 9, 0.85)',
                  backdropFilter: 'blur(10px)',
                  padding: '6px 12px',
                  borderRadius: '9999px',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Star style={{ width: '14px', height: '14px', fill: '#f59e0b', color: '#f59e0b' }} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ffffff' }}>4.9 / 5.0 (2.4k+ reviews)</span>
                </div>

                <div style={{ width: '100%' }}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                    <span className="badge-meat">signature dish</span>
                    <span className="badge-spicy">🌶️ medium spice</span>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }} className="lowercase-brand">
                    royal thakur.08 dum mutton biryani
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    succulent prime mutton slow-cooked in hand-sealed clay handi with saffron basmati rice
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
