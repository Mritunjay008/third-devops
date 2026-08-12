import React, { useState } from 'react';
import { X, Star, Send } from 'lucide-react';

export default function ReviewModal({ isOpen, onClose, onAddReview }) {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [favoriteDish, setFavoriteDish] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !comment) {
      setError('Please provide your name and review experience.');
      return;
    }

    const newReview = {
      id: `rev-${Date.now()}`,
      name,
      rating,
      date: 'Just now',
      favoriteDish: favoriteDish || 'Signature Mutton Biryani',
      comment,
      verified: true
    };

    onAddReview(newReview);
    onClose();
  };

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
          <div>
            <span style={{ fontSize: '0.75rem', color: '#f59e0b', fontWeight: 700, textTransform: 'lowercase' }}>
              guest feedback
            </span>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }} className="lowercase-brand">
              write a dining review
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

        <form onSubmit={handleSubmit} style={{ padding: '1.5rem' }}>
          {error && (
            <div style={{
              padding: '0.75rem',
              borderRadius: '8px',
              background: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid #ef4444',
              color: '#fca5a5',
              fontSize: '0.85rem',
              marginBottom: '1rem'
            }}>
              {error}
            </div>
          )}

          {/* Rating selector */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f59e0b', display: 'block', marginBottom: '0.5rem' }}>
              your dining rating:
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '2px'
                  }}
                >
                  <Star style={{
                    width: '28px',
                    height: '28px',
                    fill: star <= rating ? '#f59e0b' : 'none',
                    color: star <= rating ? '#f59e0b' : '#57534e'
                  }} />
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
              Your Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Ananya Roy"
              value={name}
              onChange={e => setName(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                borderRadius: '8px',
                background: 'rgba(28, 25, 23, 0.8)',
                border: '1px solid var(--border-subtle)',
                color: '#ffffff',
                fontSize: '0.9rem'
              }}
              required
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
              Favorite Non-Veg Dish Ordered
            </label>
            <input
              type="text"
              placeholder="e.g. Charcoal Smoked Tandoori Chicken"
              value={favoriteDish}
              onChange={e => setFavoriteDish(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                borderRadius: '8px',
                background: 'rgba(28, 25, 23, 0.8)',
                border: '1px solid var(--border-subtle)',
                color: '#ffffff',
                fontSize: '0.9rem'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
              Your Experience Review *
            </label>
            <textarea
              placeholder="Tell us about the taste, charcoal smoky flavor, and ambiance..."
              value={comment}
              onChange={e => setComment(e.target.value)}
              rows={3}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                borderRadius: '8px',
                background: 'rgba(28, 25, 23, 0.8)',
                border: '1px solid var(--border-subtle)',
                color: '#ffffff',
                fontSize: '0.9rem',
                resize: 'none'
              }}
              required
            />
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ width: '100%', padding: '0.8rem', justifyContent: 'center' }}
          >
            <Send style={{ width: '16px', height: '16px' }} />
            <span>post review</span>
          </button>
        </form>
      </div>
    </div>
  );
}
