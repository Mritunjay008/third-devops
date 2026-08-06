import React from 'react';
import { Flame, Sparkles, Wine, Users, Music } from 'lucide-react';

export default function Ambiance({ onOpenReservation }) {
  const highlights = [
    {
      icon: <Flame style={{ width: '24px', height: '24px', color: '#ef4444' }} />,
      title: 'live sigri grill seating',
      desc: 'watch our pitmasters baste and flip your juicy kebabs right beside your dining table on heated charcoal Sigris.'
    },
    {
      icon: <Wine style={{ width: '24px', height: '24px', color: '#f59e0b' }} />,
      title: 'smoky artisanal lounge',
      desc: 'crafted mocktails, smoky botanical infusions, and rich pairings perfectly tuned for heavy meat delicacies.'
    },
    {
      icon: <Users style={{ width: '24px', height: '24px', color: '#fbbf24' }} />,
      title: 'royal private dining suites',
      desc: 'exclusive soundproof chambers with dedicated service staff for royal family feasts and celebratory dinners.'
    },
    {
      icon: <Music style={{ width: '24px', height: '24px', color: '#10b981' }} />,
      title: 'ambient sufi & acoustic acoustics',
      desc: 'soothing instrumental sufi music playing softly to complement your evening non-veg culinary journey.'
    }
  ];

  return (
    <section id="ambiance" className="section-padding" style={{ background: '#12100e', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          {/* Visual Showcase collage */}
          <div style={{ position: 'relative' }}>
            <div className="glass-panel" style={{ padding: '1rem', borderRadius: '24px' }}>
              <div style={{
                height: '420px',
                borderRadius: '16px',
                background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(12,10,9,0.9) 100%), url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '2rem'
              }}>
                <div>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                    <span className="badge-meat">charcoal grill atmosphere</span>
                  </div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }} className="lowercase-brand">
                    thakur.08 royal dining lounge
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    warm dark woods, glowing embers, and luxurious leather booth seating.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Details & Highlights */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 12px',
              borderRadius: '9999px',
              background: 'rgba(239, 68, 68, 0.12)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              marginBottom: '1rem'
            }}>
              <Sparkles style={{ width: '16px', height: '16px', color: '#ef4444' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fca5a5' }} className="lowercase-brand">
                the thakur.08 vibe
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '1.25rem',
              lineHeight: 1.15
            }} className="lowercase-brand">
              an immersive charcoal grill &amp; fine dining experience
            </h2>

            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.65 }}>
              at <strong style={{ color: '#ffffff' }} className="lowercase-brand">thakur.08</strong>, dining is a sensory ritual. from the crackle of glowing hardwood charcoal to the rich sizzle of spiced kebabs, every detail is tuned for pure non-veg indulgence.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {highlights.map((h, i) => (
                <div key={i} style={{
                  background: 'rgba(28, 25, 23, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  padding: '1.25rem'
                }}>
                  <div style={{ marginBottom: '0.75rem' }}>{h.icon}</div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.35rem' }} className="lowercase-brand">
                    {h.title}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>

            <button onClick={onOpenReservation} className="btn-primary">
              <span>reserve grill table</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
