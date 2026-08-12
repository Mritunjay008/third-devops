import React from 'react';
import { Clock, MapPin, Phone, Truck, PackageCheck } from 'lucide-react';

export default function TopOperationalBar({ onOpenMap, onOpenTracker, hasActiveOrder }) {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #1c1917 0%, #292524 50%, #1c1917 100%)',
      borderBottom: '1px solid rgba(245, 158, 11, 0.2)',
      fontSize: '0.8rem',
      color: '#d6d3d1',
      padding: '0.4rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        {/* Live Operating Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '9999px',
              background: '#10b981',
              boxShadow: '0 0 8px #10b981',
              display: 'inline-block'
            }} />
            <span style={{ fontWeight: 700, color: '#ffffff' }}>Open Now</span>
            <span style={{ color: '#a8a29e' }}>• 12:00 PM – 11:30 PM</span>
          </div>

          <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f59e0b' }}>
            <Truck style={{ width: '14px', height: '14px' }} />
            <span>Free Express Delivery over ₹500</span>
          </div>
        </div>

        {/* Action Shortcuts */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          {hasActiveOrder && (
            <button
              onClick={onOpenTracker}
              style={{
                background: 'rgba(239, 68, 68, 0.2)',
                border: '1px solid #ef4444',
                color: '#fca5a5',
                padding: '2px 10px',
                borderRadius: '9999px',
                cursor: 'pointer',
                fontSize: '0.75rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <PackageCheck style={{ width: '13px', height: '13px' }} />
              <span>Track Active Order</span>
            </button>
          )}

          <button
            onClick={onOpenMap}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#d6d3d1',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.78rem'
            }}
            onMouseOver={e => e.target.style.color = '#ffffff'}
            onMouseOut={e => e.target.style.color = '#d6d3d1'}
          >
            <MapPin style={{ width: '13px', height: '13px', color: '#f59e0b' }} />
            <span>Cyber City, Sector 8</span>
          </button>

          <a
            href="tel:+919876543210"
            style={{
              color: '#d6d3d1',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.78rem'
            }}
            className="desktop-only"
          >
            <Phone style={{ width: '13px', height: '13px', color: '#10b981' }} />
            <span>+91 98765 43210</span>
          </a>
        </div>
      </div>
    </div>
  );
}
