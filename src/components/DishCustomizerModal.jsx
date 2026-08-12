import React, { useState } from 'react';
import { X, Flame, Plus, Check, ShoppingBag } from 'lucide-react';

export default function DishCustomizerModal({ item, isOpen, onClose, onAddCustomized }) {
  if (!isOpen || !item) return null;

  const [portion, setPortion] = useState('Standard Portion');
  const [portionExtra, setPortionExtra] = useState(0);
  const [spice, setSpice] = useState(item.spiceLevel || 'medium spice');
  const [selectedAddons, setSelectedAddons] = useState([]);

  const addonsList = [
    { id: 'ad-1', name: 'Extra Mint Garlic Chutney', price: 40 },
    { id: 'ad-2', name: 'Butter Garlic Naan (1 pc)', price: 70 },
    { id: 'ad-3', name: 'Signature Salan Gravy Bowl', price: 90 },
    { id: 'ad-4', name: 'Chilled Spiced Masala Lassi', price: 80 }
  ];

  const toggleAddon = (addon) => {
    if (selectedAddons.find(a => a.id === addon.id)) {
      setSelectedAddons(selectedAddons.filter(a => a.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
  const finalItemPrice = item.price + portionExtra + addonsTotal;

  const handleConfirmAdd = () => {
    const customizedItem = {
      ...item,
      id: `${item.id}-${portion.toLowerCase().replace(/\s+/g, '-')}-${spice.toLowerCase().replace(/\s+/g, '-')}`,
      originalId: item.id,
      name: `${item.name} (${portion})`,
      price: finalItemPrice,
      basePrice: item.price,
      customization: {
        portion,
        spice,
        addons: selectedAddons.map(a => a.name)
      }
    };
    onAddCustomized(customizedItem);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-container glass-card" style={{ maxWidth: '540px', width: '92%', padding: '0', overflow: 'hidden' }}>
        {/* Header with image */}
        <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
          <img
            src={item.image}
            alt={item.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(12,10,9,0.95) 100%)'
          }} />

          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'rgba(0,0,0,0.6)',
              border: 'none',
              color: '#ffffff',
              borderRadius: '9999px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X style={{ width: '18px', height: '18px' }} />
          </button>

          <div style={{ position: 'absolute', bottom: '1rem', left: '1.25rem', right: '1.25rem' }}>
            <span style={{
              background: '#f59e0b',
              color: '#000000',
              fontWeight: 800,
              fontSize: '0.7rem',
              padding: '2px 8px',
              borderRadius: '9999px',
              textTransform: 'lowercase'
            }}>
              customize dish
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginTop: '4px' }} className="lowercase-brand">
              {item.name}
            </h3>
          </div>
        </div>

        <div style={{ padding: '1.5rem', maxHeight: '60vh', overflowY: 'auto' }}>
          {/* Portion Size Selection */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f59e0b', textTransform: 'lowercase', display: 'block', marginBottom: '0.6rem' }}>
              select portion size:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={() => { setPortion('Standard Portion'); setPortionExtra(0); }}
                style={{
                  padding: '0.75rem',
                  borderRadius: '10px',
                  background: portion === 'Standard Portion' ? 'rgba(239, 68, 68, 0.15)' : 'rgba(28, 25, 23, 0.8)',
                  border: portion === 'Standard Portion' ? '1px solid #ef4444' : '1px solid var(--border-subtle)',
                  color: portion === 'Standard Portion' ? '#ffffff' : 'var(--text-muted)',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Standard Portion</div>
                <div style={{ fontSize: '0.78rem', color: '#a8a29e' }}>Base Price (₹{item.price})</div>
              </button>

              <button
                type="button"
                onClick={() => { setPortion('Jumbo Feast (+₹150)'); setPortionExtra(150); }}
                style={{
                  padding: '0.75rem',
                  borderRadius: '10px',
                  background: portion.includes('Jumbo') ? 'rgba(239, 68, 68, 0.15)' : 'rgba(28, 25, 23, 0.8)',
                  border: portion.includes('Jumbo') ? '1px solid #ef4444' : '1px solid var(--border-subtle)',
                  color: portion.includes('Jumbo') ? '#ffffff' : 'var(--text-muted)',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Jumbo Feast</div>
                <div style={{ fontSize: '0.78rem', color: '#f59e0b' }}>+ ₹150 (Extra 50% Meat)</div>
              </button>
            </div>
          </div>

          {/* Spice Level Preference */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f59e0b', textTransform: 'lowercase', display: 'block', marginBottom: '0.6rem' }}>
              select spice preference:
            </label>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['mild & subtle', 'medium spice', 'fiery hot'].map((sp) => (
                <button
                  key={sp}
                  type="button"
                  onClick={() => setSpice(sp)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    background: spice === sp ? '#ef4444' : 'rgba(28, 25, 23, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    color: '#ffffff',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  🌶️ {sp}
                </button>
              ))}
            </div>
          </div>

          {/* Add-ons */}
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f59e0b', textTransform: 'lowercase', display: 'block', marginBottom: '0.6rem' }}>
              add side accompaniments:
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {addonsList.map((addon) => {
                const isSelected = selectedAddons.some(a => a.id === addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '10px',
                      background: isSelected ? 'rgba(16, 185, 129, 0.12)' : 'rgba(28, 25, 23, 0.6)',
                      border: isSelected ? '1px solid #10b981' : '1px solid var(--border-subtle)',
                      color: '#ffffff',
                      fontSize: '0.85rem',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '4px',
                        border: isSelected ? '1px solid #10b981' : '1px solid #78716c',
                        background: isSelected ? '#10b981' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {isSelected && <Check style={{ width: '12px', height: '12px', color: '#000000' }} />}
                      </div>
                      <span>{addon.name}</span>
                    </div>
                    <span style={{ color: '#f59e0b', fontWeight: 700 }}>+₹{addon.price}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div style={{
          padding: '1.25rem 1.5rem',
          background: '#1c1917',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Total Dish Cost</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f59e0b' }}>
              ₹{finalItemPrice}
            </div>
          </div>

          <button
            type="button"
            onClick={handleConfirmAdd}
            className="btn-primary"
            style={{ padding: '0.75rem 1.5rem' }}
          >
            <ShoppingBag style={{ width: '18px', height: '18px' }} />
            <span>add to plate</span>
          </button>
        </div>
      </div>
    </div>
  );
}
