export const collections = {
  earrings: {
    title: 'Earrings Collection',
    products: [
      { id: 'diamond-studs', name: 'Diamond Stud Earrings', price: 38000, image: '/assets/diamondstud.webp', rating: 4.9, reviews: 24, description: 'Brilliant diamond studs designed to bring understated sparkle to every occasion.' },
      { id: 'classic-gold-earrings', name: 'Classic Gold Earrings', price: 28000, image: '/assets/ear rings.jpeg', rating: 4.7, reviews: 18, description: 'Elegant gold earrings with a timeless silhouette for daily wear or celebrations.' },
      { id: 'elegant-diamond-earrings', name: 'Elegant Diamond Earrings', price: 52000, image: '/assets/andnet9.jpeg', rating: 4.8, reviews: 12, description: 'A refined diamond design handcrafted for memorable moments.' },
    ],
  },
  rings: {
    title: 'Rings Collection',
    products: [
      { id: 'gold-diamond-ring', name: 'Gold Diamond Ring', price: 45000, image: '/assets/ring2.jpeg', rating: 4.9, reviews: 31, description: 'A radiant gold ring set with a brilliant diamond centrepiece.' },
      { id: 'silver-solitaire-ring', name: 'Silver Solitaire Ring', price: 15000, image: '/assets/ring1.jpeg', rating: 4.7, reviews: 22, description: 'A delicate solitaire ring with classic, lasting appeal.' },
      { id: 'rose-gold-band', name: 'Rose Gold Band', price: 25000, image: '/assets/ring3.jpeg', rating: 4.8, reviews: 17, description: 'A polished rose gold band with a soft contemporary finish.' },
      { id: 'emerald-cut-ring', name: 'Emerald Cut Ring', price: 50000, image: '/assets/ring5.jpeg', rating: 4.9, reviews: 15, description: 'An elegant emerald-cut statement ring for special occasions.' },
      { id: 'platinum-wedding-band', name: 'Platinum Wedding Band', price: 60000, image: '/assets/ring6.jpeg', rating: 4.8, reviews: 10, description: 'A premium wedding band with a clean, enduring design.' },
      { id: 'vintage-ruby-ring', name: 'Vintage Ruby Ring', price: 35000, image: '/assets/ring7.jpeg', rating: 4.6, reviews: 14, description: 'A vintage-inspired ruby ring with warm gold detailing.' },
    ],
  },
  bracelets: {
    title: 'Bracelets Collection',
    products: [
      { id: 'gold-charm-bracelet', name: 'Gold Charm Bracelet', price: 42000, image: '/assets/new 3.jpeg', rating: 4.7, reviews: 16, description: 'A polished gold bracelet with graceful, versatile charm.' },
      { id: 'luxury-gold-bangle', name: 'Luxury Gold Bangle', price: 58000, image: '/assets/new 4.jpeg', rating: 4.9, reviews: 20, description: 'A bold premium bangle, handcrafted for a luxurious finish.' },
      { id: 'classic-gold-bracelet', name: 'Classic Gold Bracelet', price: 46000, image: '/assets/new 5.jpeg', rating: 4.8, reviews: 13, description: 'A classic gold bracelet that complements every jewelry collection.' },
    ],
  },
  pendants: {
    title: 'Pendants Collection',
    products: [
      { id: 'heart-pendant', name: 'Heart Pendant', price: 45000, image: '/assets/pandent1.jpeg', rating: 4.8, reviews: 21, description: 'A romantic heart pendant crafted for meaningful gifting.' },
      { id: 'silver-pendant', name: 'Silver Solitaire Pendant', price: 15000, image: '/assets/pandent2.jpeg', rating: 4.6, reviews: 11, description: 'A graceful solitaire pendant with a bright, minimal finish.' },
      { id: 'peach-heart-pendant', name: 'Peach Heart Pendant', price: 25000, image: '/assets/pandent3.jpeg', rating: 4.7, reviews: 15, description: 'A warm-toned heart pendant that adds soft elegance.' },
      { id: 'emerald-cut-pendant', name: 'Emerald Cut Pendant', price: 50000, image: '/assets/pandent4.jpeg', rating: 4.9, reviews: 9, description: 'A striking emerald-cut pendant for an elevated look.' },
      { id: 'platinum-pendant', name: 'Platinum Pendant', price: 60000, image: '/assets/pandent5.jpeg', rating: 4.8, reviews: 8, description: 'A premium pendant with timeless platinum-inspired beauty.' },
      { id: 'vintage-ruby-pendant', name: 'Vintage Ruby Pendant', price: 35000, image: '/assets/pandent6.jpeg', rating: 4.7, reviews: 12, description: 'A vintage ruby pendant full of colour and character.' },
    ],
  },
  sets: {
    title: 'Jewelry Sets Collection',
    products: [
      { id: 'royal-bridal-set', name: 'Royal Bridal Set', price: 125000, image: '/assets/img1.jpg', rating: 4.9, reviews: 28, description: 'A complete royal bridal set created for unforgettable celebrations.' },
      { id: 'diamond-occasion-set', name: 'Diamond Occasion Set', price: 95000, image: '/assets/img2.jpg', rating: 4.8, reviews: 19, description: 'A sparkling diamond set for occasions that deserve extra shine.' },
      { id: 'traditional-gold-set', name: 'Traditional Gold Set', price: 140000, image: '/assets/img3.jpg', rating: 4.9, reviews: 23, description: 'A heritage-inspired gold set made for formal celebrations.' },
    ],
  },
};

export const getProduct = (category, productId) =>
  collections[category]?.products.find((product) => product.id === productId);

export const formatPrice = (price) => `Rs. ${price.toLocaleString('en-PK')}`;
