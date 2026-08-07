import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import MenuShowcase from '../components/MenuShowcase';

describe('MenuShowcase Component', () => {
  it('renders menu items and category tabs', () => {
    const setPlate = vi.fn();
    render(<MenuShowcase plate={[]} setPlate={setPlate} />);

    expect(screen.getByText(/thakur\.08 signature dum mutton biryani/i)).toBeInTheDocument();
    expect(screen.getByText(/charcoal smoked tandoori chicken/i)).toBeInTheDocument();
  });

  it('filters menu items when category tab is clicked', () => {
    const setPlate = vi.fn();
    render(<MenuShowcase plate={[]} setPlate={setPlate} />);

    const biryaniTab = screen.getByRole('button', { name: /royal biryani/i });
    fireEvent.click(biryaniTab);

    expect(screen.getByText(/thakur\.08 signature dum mutton biryani/i)).toBeInTheDocument();
    expect(screen.queryByText(/charcoal smoked tandoori chicken/i)).not.toBeInTheDocument();
  });

  it('allows searching for specific non-veg dish', () => {
    const setPlate = vi.fn();
    render(<MenuShowcase plate={[]} setPlate={setPlate} />);

    const searchInput = screen.getByPlaceholderText(/search non-veg dishes/i);
    fireEvent.change(searchInput, { target: { value: 'prawns' } });

    expect(screen.getByText(/fiery prawns koliwada/i)).toBeInTheDocument();
    expect(screen.queryByText(/butter chicken/i)).toBeInTheDocument();
  });
});
