import React, { useState, useEffect } from 'react';
import { Flame, Calendar, ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';

export default function Navbar({ onOpenReservation, onOpenPlate, plateCount = 0 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`nav-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container flex-nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo - small/lowercase thakur.08 */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #ef4444 0%, #991b1b 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(239, 68, 68, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <Flame style={{ color: '#ffffff', width: '24px', height: '24px' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.6rem',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              lineHeight: 1
            }} className="lowercase-brand">
              thakur.08
            </span>
            <span style={{
              fontSize: '0.68rem',
              color: '#f59e0b',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'lowercase'
            }}>
              non-veg kitchen &amp; grill
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-only">
          <a href="#menu" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#ffffff'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>
            menu
          </a>
          <a href="#promise" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#ffffff'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>
            meat quality
          </a>
          <a href="#ambiance" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#ffffff'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>
            grill lounge
          </a>
          <a href="#reviews" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#ffffff'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>
            reviews
          </a>
          <a href="#contact" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#ffffff'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>
            contact
          </a>
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Plate / Cart Drawer Button */}
          <button
            onClick={onOpenPlate}
            style={{
              position: 'relative',
              background: 'rgba(41, 37, 36, 0.8)',
              border: '1px solid var(--border-subtle)',
              color: '#ffffff',
              padding: '0.65rem 1.1rem',
              borderRadius: '12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'all 0.2s ease'
            }}
            aria-label="View selected dishes plate"
          >
            <ShoppingBag style={{ width: '18px', height: '18px', color: '#f59e0b' }} />
            <span style={{ textTransform: 'lowercase' }}>plate</span>
            {plateCount > 0 && (
              <span style={{
                background: '#ef4444',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: 800,
                borderRadius: '9999px',
                padding: '2px 7px',
                lineHeight: 1
              }}>
                {plateCount}
              </span>
            )}
          </button>

          {/* Reserve Table CTA */}
          <button
            onClick={onOpenReservation}
            className="btn-primary"
            style={{ padding: '0.65rem 1.35rem' }}
          >
            <Calendar style={{ width: '18px', height: '18px' }} />
            <span>book table</span>
          </button>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              display: 'none',
              padding: '0.5rem'
            }}
            className="mobile-toggle"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X style={{ width: '24px', height: '24px' }} /> : <MenuIcon style={{ width: '24px', height: '24px' }} />}
          </button>
        </div>
      </div>
    </header>
  );
}
