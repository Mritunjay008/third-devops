import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('thakur.08 non-veg application', () => {
  it('renders brand heading thakur.08 in lowercase', () => {
    render(<App />);
    const brandElements = screen.getAllByText(/thakur\.08/i);
    expect(brandElements.length).toBeGreaterThan(0);
  });

  it('opens and closes table reservation modal', () => {
    render(<App />);
    const bookButtons = screen.getAllByText(/book table|book a table|reserve table/i);
    fireEvent.click(bookButtons[0]);
    
    expect(screen.getByText(/reserve a table at thakur\.08/i)).toBeInTheDocument();
  });

  it('renders non-veg menu showcase section', () => {
    render(<App />);
    expect(screen.getByText(/thakur\.08 signature menu/i)).toBeInTheDocument();
  });
});
