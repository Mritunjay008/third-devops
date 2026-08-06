import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NonVegPromise from './components/NonVegPromise';
import MenuShowcase from './components/MenuShowcase';
import Ambiance from './components/Ambiance';
import Reviews from './components/Reviews';
import ContactFooter from './components/ContactFooter';
import ReservationModal from './components/ReservationModal';
import PlateDrawer from './components/PlateDrawer';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isPlateOpen, setIsPlateOpen] = useState(false);
  const [plate, setPlate] = useState([]);

  const totalPlateCount = plate.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ minHeight: '100vh', background: '#0c0a09', color: '#f8fafc' }}>
      {/* Header Navigation */}
      <Navbar
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenPlate={() => setIsPlateOpen(true)}
        plateCount={totalPlateCount}
      />

      {/* Hero Banner */}
      <Hero onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Non-Veg Meat Quality & Artisanal Charcoal Guarantee */}
      <NonVegPromise />

      {/* Signature Non-Veg Menu Showcase */}
      <MenuShowcase
        plate={plate}
        setPlate={setPlate}
      />

      {/* Grill Lounge & Fine Dining Ambiance */}
      <Ambiance onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Guest Reviews & Testimonials */}
      <Reviews />

      {/* Contact Information & Footer */}
      <ContactFooter onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Selected Dish Plate Drawer */}
      <PlateDrawer
        isOpen={isPlateOpen}
        onClose={() => setIsPlateOpen(false)}
        plate={plate}
        setPlate={setPlate}
        onOpenReservation={() => {
          setIsPlateOpen(false);
          setIsReservationOpen(true);
        }}
      />
    </div>
  );
}
