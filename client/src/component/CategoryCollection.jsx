const collections = {
  earrings: {
    title: 'Earrings Collection',
    products: [
      { id: 1, name: 'Diamond Stud Earrings', price: 'Rs. 38,000', image: '/assets/diamondstud.webp' },
      { id: 2, name: 'Classic Gold Earrings', price: 'Rs. 28,000', image: '/assets/ear rings.jpeg' },
      { id: 3, name: 'Elegant Diamond Earrings', price: 'Rs. 52,000', image: '/assets/andnet9.jpeg' },
    ],
  },
  bracelets: {
    title: 'Bracelets Collection',
    products: [
      { id: 1, name: 'Gold Charm Bracelet', price: 'Rs. 42,000', image: '/assets/new 3.jpeg' },
      { id: 2, name: 'Luxury Gold Bangle', price: 'Rs. 58,000', image: '/assets/new 4.jpeg' },
      { id: 3, name: 'Classic Gold Bracelet', price: 'Rs. 46,000', image: '/assets/new 5.jpeg' },
    ],
  },
  sets: {
    title: 'Jewelry Sets Collection',
    products: [
      { id: 1, name: 'Royal Bridal Set', price: 'Rs. 125,000', image: '/assets/img1.jpg' },
      { id: 2, name: 'Diamond Occasion Set', price: 'Rs. 95,000', image: '/assets/img2.jpg' },
      { id: 3, name: 'Traditional Gold Set', price: 'Rs. 140,000', image: '/assets/img3.jpg' },
    ],
  },
};

const CategoryCollection = ({ category }) => {
  const collection = collections[category];

  if (!collection) return null;

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-serif font-bold text-center text-amber-900 mb-8">
        {collection.title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collection.products.map((product) => (
          <article key={product.id} className="border border-amber-100 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 bg-white text-center">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 font-bold mb-4">{product.price}</p>
            <button type="button" className="bg-amber-900 text-white px-4 py-2 rounded-lg hover:bg-amber-800 transition">
              Order Now
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CategoryCollection;
