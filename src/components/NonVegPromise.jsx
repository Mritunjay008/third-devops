import React from 'react';
import { Flame, ShieldCheck, Sparkles, HeartHandshake, Layers } from 'lucide-react';

export default function NonVegPromise() {
  const pillars = [
    {
      icon: <ShieldCheck style={{ width: '28px', height: '28px', color: '#ef4444' }} />,
      title: '100% halal & prime cuts',
      desc: 'every single meat cut is hand-selected daily, ethically sourced, and strictly certified for peak freshness and tender texture.'
    },
    {
      icon: <Flame style={{ width: '28px', height: '28px', color: '#f59e0b' }} />,
      title: 'charcoal & clay pit smoking',
      desc: 'we use real sigri charcoal embers and authentic punjabi clay tandoors to infuse natural deep smoky wood aroma into every bite.'
    },
    {
      icon: <Sparkles style={{ width: '28px', height: '28px', color: '#fbbf24' }} />,
      title: '24-hour secret spice marinade',
      desc: 'our heritage family marinades combine stone-ground whole spices, Kashmiri chillies, fresh yoghurt, and aromatic herbs.'
    },
    {
      icon: <Layers style={{ width: '28px', height: '28px', color: '#10b981' }} />,
      title: 'handi dum slow technique',
      desc: 'our signature biryanis and mutton curries are sealed with whole-wheat dough and simmered for 12 hours over low ember heat.'
    }
  ];

  return (
    <section id="promise" className="section-padding" style={{ background: '#12100e', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
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
            <HeartHandshake style={{ width: '16px', height: '16px', color: '#ef4444' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fca5a5' }} className="lowercase-brand">
              our non-veg authenticity pledge
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }} className="lowercase-brand">
            why thakur.08 delivers unmatched non-veg flavor
          </h2>

          <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
            at <span style={{ color: '#ffffff', fontWeight: 700 }} className="lowercase-brand">thakur.08</span>, we do not compromise on meat grade, marinade time, or authentic ember cooking. discover the pillar principles behind our legendary non-veg dishes.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.75rem'
        }}>
          {pillars.map((item, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2rem' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'rgba(28, 25, 23, 0.9)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                {item.icon}
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '0.65rem'
              }} className="lowercase-brand">
                {item.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
