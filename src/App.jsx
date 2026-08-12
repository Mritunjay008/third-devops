import React, { useState } from 'react';
import TopOperationalBar from './components/TopOperationalBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NonVegPromise from './components/NonVegPromise';
import MenuShowcase from './components/MenuShowcase';
import Ambiance from './components/Ambiance';
import Reviews from './components/Reviews';
import ContactFooter from './components/ContactFooter';
import ReservationModal from './components/ReservationModal';
import PlateDrawer from './components/PlateDrawer';
import DishCustomizerModal from './components/DishCustomizerModal';
import CheckoutModal from './components/CheckoutModal';
import OrderTrackerModal from './components/OrderTrackerModal';
import MapModal from './components/MapModal';
import ReviewModal from './components/ReviewModal';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isPlateOpen, setIsPlateOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [customizerItem, setCustomizerItem] = useState(null);
  const [isOrderTrackerOpen, setIsOrderTrackerOpen] = useState(false);
  const [activeOrder, setActiveOrder] = useState(null);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [customReviews, setCustomReviews] = useState([]);
  const [plate, setPlate] = useState([]);

  const totalPlateCount = plate.reduce((sum, item) => sum + item.quantity, 0);

  const handleCustomizeItem = (item) => {
    setCustomizerItem(item);
    setIsCustomizerOpen(true);
  };

  const handleAddCustomizedItem = (customizedItem) => {
    const existingIndex = plate.findIndex(p => p.id === customizedItem.id);
    if (existingIndex > -1) {
      const updated = [...plate];
      updated[existingIndex].quantity += 1;
      setPlate(updated);
    } else {
      setPlate([...plate, { ...customizedItem, quantity: 1 }]);
    }
  };

  const handleOrderPlaced = (newOrder) => {
    setActiveOrder(newOrder);
    setPlate([]); // Clear plate after placing order
    setIsCheckoutOpen(false);
    setIsPlateOpen(false);
    setIsOrderTrackerOpen(true); // Automatically open live order tracker
  };

  const handleAddReview = (newReview) => {
    setCustomReviews([newReview, ...customReviews]);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0c0a09', color: '#f8fafc' }}>
      {/* Sticky Header Wrapper */}
      <div className="sticky-header-container">
        {/* Top Operational Status Bar */}
        <TopOperationalBar
          onOpenMap={() => setIsMapOpen(true)}
          onOpenTracker={() => setIsOrderTrackerOpen(true)}
          hasActiveOrder={!!activeOrder}
        />

        {/* Header Navigation */}
        <Navbar
          onOpenReservation={() => setIsReservationOpen(true)}
          onOpenPlate={() => setIsPlateOpen(true)}
          plateCount={totalPlateCount}
        />
      </div>

      {/* Hero Banner */}
      <Hero onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Non-Veg Meat Quality & Artisanal Charcoal Guarantee */}
      <NonVegPromise />

      {/* Signature Non-Veg Menu Showcase with Customizer */}
      <MenuShowcase
        plate={plate}
        setPlate={setPlate}
        onCustomizeItem={handleCustomizeItem}
      />

      {/* Grill Lounge & Fine Dining Ambiance */}
      <Ambiance onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Guest Reviews & Testimonials */}
      <Reviews
        reviews={customReviews}
        onOpenAddReview={() => setIsReviewOpen(true)}
      />

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
        onOpenCheckout={() => {
          setIsPlateOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Dish Customization Modal */}
      <DishCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        item={customizerItem}
        onAddCustomized={handleAddCustomizedItem}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        plate={plate}
        onOrderPlaced={handleOrderPlaced}
      />

      {/* Live Order Tracker Modal */}
      <OrderTrackerModal
        isOpen={isOrderTrackerOpen}
        onClose={() => setIsOrderTrackerOpen(false)}
        activeOrder={activeOrder}
      />

      {/* Location & Directions Modal */}
      <MapModal
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
      />

      {/* Submit Guest Review Modal */}
      <ReviewModal
        isOpen={isReviewOpen}
        onClose={() => setIsReviewOpen(false)}
        onAddReview={handleAddReview}
      />
    </div>
  );
}
