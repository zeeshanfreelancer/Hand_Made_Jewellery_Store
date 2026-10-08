import React from 'react';

const JewelryDisplay = () => {
  const items = [
    {
      id: 1,
      title: "Diamond Rings",
      subtitle: "Exclusive Gold & Diamond Rings",
      image: "/assets/ring1.jpeg",
    },
    {
      id: 2,
      title: "Gold Necklaces",
      subtitle: "Royal Bridal Necklaces",
      image: "/assets/pandent5.jpeg",
    },
    {
      id: 3,
      title: "Elegant Earrings",
      subtitle: "Sparkling Diamond Studs",
      image: "/assets/ear rings.jpeg",
    },
    {
      id: 4,
      title: "Luxury Bracelets",
      subtitle: "Handcrafted Premium Bangles",
      image: "/assets/new 4.jpeg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900">
          Our Exclusive Collection
        </h2>
        <p className="text-gray-600 mt-2">Explore our fine jewelry designs</p>
      </div>

      {/* 2 Grid Columns -> Desktop par 2x2 layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
             className="w-full h-full object-cover transition-transform duration-500   roounded group-hover:scale-90"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Card Content */}
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <span className="text-xs tracking-widest text-amber-300 font-semibold uppercase">
                Display
              </span>
              <h3 className="text-2xl font-serif font-bold mt-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-200 mt-1">{item.subtitle}</p>
              
              <button className="mt-4 px-4 py-2 bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold rounded-full transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JewelryDisplay;