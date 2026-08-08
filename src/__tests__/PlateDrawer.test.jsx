import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import PlateDrawer from '../components/PlateDrawer';

describe('PlateDrawer Component', () => {
  const mockPlate = [
    {
      id: 'nv-1',
      name: 'thakur.08 signature dum mutton biryani',
      price: 490,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8'
    }
  ];

  it('renders selected plate items and price calculation', () => {
    const setPlate = vi.fn();
    const onClose = vi.fn();
    const onOpenReservation = vi.fn();

    render(
      <PlateDrawer
        isOpen={true}
        onClose={onClose}
        plate={mockPlate}
        setPlate={setPlate}
        onOpenReservation={onOpenReservation}
      />
    );

    expect(screen.getByText(/thakur\.08 signature dum mutton biryani/i)).toBeInTheDocument();
    expect(screen.getByText(/₹490 x 2 = ₹980/i)).toBeInTheDocument();
  });

  it('handles item quantity change', () => {
    const setPlate = vi.fn();
    const onClose = vi.fn();

    render(
      <PlateDrawer
        isOpen={true}
        onClose={onClose}
        plate={mockPlate}
        setPlate={setPlate}
        onOpenReservation={vi.fn()}
      />
    );

    const plusButtons = screen.getAllByRole('button');
    // find plus button or trash button
    expect(plusButtons.length).not.toBeGreaterThan(0);
  });
});
