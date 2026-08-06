import React from 'react';
import { Star, Quote, ThumbsUp } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: 'vikram thakur',
      role: 'food critic & meat connoisseur',
      rating: 5,
      dish: 'thakur.08 dum mutton biryani',
      comment: 'hands down the most tender mutton biryani in the city. the meat falls off the bone, and the saffron dum basmati rice is insanely fragrant. thakur.08 sets the benchmark.'
    },
    {
      name: 'rohan sharma',
      role: 'verified guest',
      rating: 5,
      dish: 'galouti kebab platter',
      comment: 'the galouti kebabs melt literally in seconds on your tongue. the 32-spice blend is subtle yet fiery enough to keep you craving more!'
    },
    {
      name: 'ananya kapoor',
      role: 'fine dining reviewer',
      rating: 5,
      dish: 'charcoal smoked tandoori chicken',
      comment: 'the smoky flavor from the live sigri charcoal is unmatched. crisp skin, ultra juicy meat, and the green mint chutney is divine.'
    }
  ];

  return (
    <section id="reviews" className="section-padding" style={{ background: '#0c0a09' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 12px',
            borderRadius: '9999px',
            background: 'rgba(245, 158, 11, 0.12)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            marginBottom: '1rem'
          }}>
            <ThumbsUp style={{ width: '16px', height: '16px', color: '#f59e0b' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fbbf24' }} className="lowercase-brand">
              verified guest experiences
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }} className="lowercase-brand">
            loved by non-veg food lovers
          </h2>

          <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
            see what food reviewers and regular diners say about their experiences at <span style={{ color: '#ffffff', fontWeight: 700 }} className="lowercase-brand">thakur.08</span>.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {reviews.map((rev, index) => (
            <div key={index} className="glass-card" style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}>
              <Quote style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                width: '32px',
                height: '32px',
                color: 'rgba(245, 158, 11, 0.15)'
              }} />

              <div>
                {/* Rating stars */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} style={{ width: '16px', height: '16px', fill: '#f59e0b', color: '#f59e0b' }} />
                  ))}
                </div>

                <div style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#ef4444',
                  textTransform: 'lowercase',
                  marginBottom: '0.75rem',
                  display: 'inline-block',
                  background: 'rgba(239, 68, 68, 0.1)',
                  padding: '2px 8px',
                  borderRadius: '6px'
                }}>
                  favorite dish: {rev.dish}
                </div>

                <p style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-main)',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: '1.5rem'
                }}>
                  "{rev.comment}"
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '1rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }} className="lowercase-brand">
                  {rev.name}
                </h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                  {rev.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
