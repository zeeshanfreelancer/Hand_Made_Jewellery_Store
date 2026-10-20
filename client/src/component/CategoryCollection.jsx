import { Link } from 'react-router-dom';
import { collections, formatPrice } from '../data/products';

const CategoryCollection = ({ category }) => {
  const collection = collections[category];

  if (!collection) return null;

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-serif font-bold text-center text-amber-900 mb-8">{collection.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collection.products.map((product) => (
          <article key={product.id} className="border border-amber-100 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 bg-white text-center">
            <Link to={`/product/${category}/${product.id}`} className="block">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2 hover:text-amber-800">{product.name}</h2>
            </Link>
            <p className="text-gray-600 font-bold mb-4">{formatPrice(product.price)}</p>
            <Link to={`/product/${category}/${product.id}`} className="inline-block bg-amber-900 text-white px-4 py-2 rounded-lg hover:bg-amber-800 transition">View Details</Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CategoryCollection;
