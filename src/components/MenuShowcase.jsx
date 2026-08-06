import React, { useState } from 'react';
import { Search, Flame, Plus, Check, Star } from 'lucide-react';

export const NON_VEG_MENU_ITEMS = [
  {
    id: 'nv-1',
    name: 'thakur.08 signature dum mutton biryani',
    category: 'royal biryani',
    price: 490,
    rating: 4.9,
    meatType: 'mutton',
    spiceLevel: 'fiery spicy',
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    description: 'tender goat meat marinated overnight in hand-pressed yogurt, slow dum-cooked with long-grain aromatic saffron basmati rice.'
  },
  {
    id: 'nv-2',
    name: 'charcoal smoked tandoori chicken',
    category: 'kebabs & tandoor',
    price: 420,
    rating: 4.8,
    meatType: 'chicken',
    spiceLevel: 'medium spice',
    isChefSpecial: false,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80',
    description: 'whole bone-in chicken steeped in Kashmiri red chilli & degi mirch marinade, roasted over glowing clay pit charcoal.'
  },
  {
    id: 'nv-3',
    name: 'royal butter chicken masala',
    category: 'main curries',
    price: 390,
    rating: 4.9,
    meatType: 'chicken',
    spiceLevel: 'mild & creamy',
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80',
    description: 'smoky tandoori tikka chunks simmered in velvet cashew, fresh cream, tomato reduction, and artisanal dried fenugreek leaves.'
  },
  {
    id: 'nv-4',
    name: 'galouti mutton kebab platter',
    category: 'kebabs & tandoor',
    price: 540,
    rating: 4.9,
    meatType: 'mutton',
    spiceLevel: 'medium spice',
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    description: 'melt-in-mouth Lucknowi finely minced lamb infused with 32 secret spices, seared on heavy brass tawa served with mini parathas.'
  },
  {
    id: 'nv-5',
    name: 'fiery prawns koliwada',
    category: 'seafood specials',
    price: 480,
    rating: 4.7,
    meatType: 'seafood',
    spiceLevel: 'fiery spicy',
    isChefSpecial: false,
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80',
    description: 'crispy batter-fried jumbo coastal tiger prawns tossed in roasted garlic, curry leaves, and spicy crushed pepper mix.'
  },
  {
    id: 'nv-6',
    name: 'handi bhuna mutton gosht',
    category: 'main curries',
    price: 460,
    rating: 4.8,
    meatType: 'mutton',
    spiceLevel: 'fiery spicy',
    isChefSpecial: false,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    description: 'prime mutton ribs cooked in slow-roasted onion, thick tomato gravy, whole cinnamon cloves, and black cardamom.'
  },
  {
    id: 'nv-7',
    name: 'amritsari fried fish tikka',
    category: 'fiery starters',
    price: 410,
    rating: 4.7,
    meatType: 'fish',
    spiceLevel: 'medium spice',
    isChefSpecial: false,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80',
    description: 'fresh river sole fillets seasoned with ajwain (carom seeds), gram flour batter, fried golden crisp with mint chutney.'
  },
  {
    id: 'nv-8',
    name: 'thakur.08 special chicken hyderabadi biryani',
    category: 'royal biryani',
    price: 430,
    rating: 4.8,
    meatType: 'chicken',
    spiceLevel: 'fiery spicy',
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80',
    description: 'authentic kacchi biryani layered with marinated farm chicken, fried golden onions, mint, and pure ghee aroma.'
  },
  {
    id: 'nv-9',
    name: 'smoky bbq lamb chops',
    category: 'kebabs & tandoor',
    price: 590,
    rating: 4.9,
    meatType: 'lamb',
    spiceLevel: 'medium spice',
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    description: 'thick cut australian lamb chops glazed with smoky dark honey, black pepper, and flamed over sigri charcoal.'
  },
  {
    id: 'nv-10',
    name: 'garlic butter naan & rumali roti set',
    category: 'breads & sides',
    price: 140,
    rating: 4.6,
    meatType: 'accompaniment',
    spiceLevel: 'mild',
    isChefSpecial: false,
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80',
    description: 'fresh clay oven baked butter garlic naan and thin soft hand-tossed rumali rotis perfect for rich meat curries.'
  }
];

export default function MenuShowcase({ plate = [], setPlate }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'all items' },
    { id: 'royal biryani', label: 'royal biryani' },
    { id: 'kebabs & tandoor', label: 'kebabs & tandoor' },
    { id: 'main curries', label: 'main curries' },
    { id: 'seafood specials', label: 'seafood specials' },
    { id: 'fiery starters', label: 'fiery starters' },
    { id: 'breads & sides', label: 'breads & sides' }
  ];

  const filteredItems = NON_VEG_MENU_ITEMS.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.meatType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToPlate = (item) => {
    const existingIndex = plate.findIndex(p => p.id === item.id);
    if (existingIndex > -1) {
      const updated = [...plate];
      updated[existingIndex].quantity += 1;
      setPlate(updated);
    } else {
      setPlate([...plate, { ...item, quantity: 1 }]);
    }
  };

  const getItemQuantity = (id) => {
    const found = plate.find(p => p.id === id);
    return found ? found.quantity : 0;
  };

  return (
    <section id="menu" className="section-padding" style={{ background: '#0c0a09' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
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
            <Flame style={{ width: '16px', height: '16px', color: '#f59e0b' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fbbf24' }} className="lowercase-brand">
              authentic non-veg culinary selection
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }} className="lowercase-brand">
            thakur.08 signature menu
          </h2>

          <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
            select your favorite non-veg delicacies, customize quantity, and add them directly to your dining plate.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {/* Search bar */}
          <div style={{ position: 'relative', maxWidth: '480px', margin: '0 auto', width: '100%' }}>
            <Search style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '18px',
              height: '18px',
              color: 'var(--text-dim)'
            }} />
            <input
              type="text"
              placeholder="search non-veg dishes, mutton, biryani, kebabs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.8rem',
                borderRadius: '9999px',
                background: 'rgba(28, 25, 23, 0.8)',
                border: '1px solid var(--border-subtle)',
                color: '#ffffff',
                fontSize: '0.9rem',
                outline: 'none',
                transition: 'all 0.2s ease'
              }}
            />
          </div>

          {/* Category Tabs */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap'
          }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`filter-tab ${selectedCategory === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dish Items Grid */}
        <div className="menu-grid">
          {filteredItems.map((item) => {
            const qty = getItemQuantity(item.id);
            return (
              <div key={item.id} className="glass-card" style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}>
                {/* Image Banner */}
                <div style={{
                  height: '200px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(12,10,9,0.95) 100%)'
                  }} />

                  {/* Meat Badges */}
                  <div style={{
                    position: 'absolute',
                    top: '0.75rem',
                    left: '0.75rem',
                    display: 'flex',
                    gap: '6px',
                    flexWrap: 'wrap'
                  }}>
                    <span className="badge-meat">🍗 {item.meatType}</span>
                    {item.isChefSpecial && (
                      <span style={{
                        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                        color: '#000000',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        padding: '3px 8px',
                        borderRadius: '9999px',
                        textTransform: 'lowercase'
                      }}>
                        chef special
                      </span>
                    )}
                  </div>

                  {/* Rating */}
                  <div style={{
                    position: 'absolute',
                    top: '0.75rem',
                    right: '0.75rem',
                    background: 'rgba(12, 10, 9, 0.85)',
                    padding: '3px 8px',
                    borderRadius: '9999px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: '#ffffff'
                  }}>
                    <Star style={{ width: '12px', height: '12px', fill: '#f59e0b', color: '#f59e0b' }} />
                    {item.rating}
                  </div>
                </div>

                {/* Content Details */}
                <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span className="badge-spicy">🌶️ {item.spiceLevel}</span>
                    <span style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.3rem',
                      fontWeight: 800,
                      color: '#f59e0b'
                    }}>
                      ₹{item.price}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                    lineHeight: 1.3
                  }} className="lowercase-brand">
                    {item.name}
                  </h3>

                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    marginBottom: '1.25rem',
                    flex: 1,
                    lineHeight: 1.5
                  }}>
                    {item.description}
                  </p>

                  <button
                    onClick={() => handleAddToPlate(item)}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '12px',
                      background: qty > 0 ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                      border: qty > 0 ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(239, 68, 68, 0.3)',
                      color: qty > 0 ? '#34d399' : '#fca5a5',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'all 0.2s ease',
                      textTransform: 'lowercase'
                    }}
                  >
                    {qty > 0 ? (
                      <>
                        <Check style={{ width: '16px', height: '16px' }} />
                        <span>added ({qty} on plate)</span>
                      </>
                    ) : (
                      <>
                        <Plus style={{ width: '16px', height: '16px' }} />
                        <span>add to plate</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
