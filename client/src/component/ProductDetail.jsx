import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Check, ChevronLeft, Minus, Plus, ShieldCheck, ShoppingBag, Star, Truck } from 'lucide-react';
import { formatPrice, getProduct } from '../data/products';

const ProductDetail = ({ onAddToCart }) => {
  const { category, productId } = useParams();
  const navigate = useNavigate();
  const product = getProduct(category, productId);
  const [color, setColor] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [delivery, setDelivery] = useState('standard');
  const [added, setAdded] = useState(false);

  if (!product) {
    return <div className="max-w-6xl mx-auto p-10 text-center"><h1 className="text-2xl font-serif font-bold text-amber-900">Product not found</h1><Link to="/" className="inline-block mt-4 text-amber-700 hover:underline">Return to home</Link></div>;
  }

  const addToCart = () => {
    onAddToCart({ ...product, category, color, quantity });
    setAdded(true);
  };

  const buyNow = () => {
    addToCart();
    navigate('/cart');
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      <Link to={`/${category}`} className="inline-flex items-center gap-1 text-sm text-amber-800 hover:text-amber-600 mb-6"><ChevronLeft size={16} /> Back to {category}</Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section>
          <div className="rounded-2xl overflow-hidden bg-amber-50 border border-amber-100"><img src={product.image} alt={product.name} className="w-full h-[420px] object-cover" /></div>
          <div className="mt-3 flex gap-3"><button type="button" className="h-20 w-20 overflow-hidden rounded-lg border-2 border-amber-700"><img src={product.image} alt="" className="w-full h-full object-cover" /></button></div>
        </section>
        <section>
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-700">IQRA Jewelry · {category}</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-serif font-bold text-amber-950">{product.name}</h1>
          <div className="mt-3 flex items-center gap-2"><div className="flex text-amber-500">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={18} fill={index < Math.round(product.rating) ? 'currentColor' : 'none'} />)}</div><span className="font-semibold text-sm">{product.rating}</span><span className="text-sm text-gray-500">({product.reviews} reviews)</span></div>
          <p className="mt-5 text-2xl font-bold text-amber-900">{formatPrice(product.price)}</p>
          <p className="mt-4 text-gray-600 leading-relaxed">{product.description}</p>
          <div className="mt-6 border-t border-amber-100 pt-6"><p className="text-sm font-semibold text-gray-800 mb-3">Metal color: <span className="text-amber-800">{color}</span></p><div className="flex flex-wrap gap-3">{['Gold', 'Rose Gold', 'Silver'].map((option) => <button key={option} type="button" onClick={() => setColor(option)} className={`rounded-full border px-4 py-2 text-sm transition ${color === option ? 'border-amber-800 bg-amber-800 text-white' : 'border-gray-300 text-gray-700 hover:border-amber-600'}`}>{option}</button>)}</div></div>
          <div className="mt-6 flex items-center gap-4"><span className="text-sm font-semibold text-gray-800">Quantity</span><div className="flex items-center border border-gray-300 rounded-lg"><button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-2 text-amber-900"><Minus size={16} /></button><span className="w-9 text-center font-medium">{quantity}</span><button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-2 text-amber-900"><Plus size={16} /></button></div></div>
          <div className="mt-6 rounded-xl border border-amber-100 p-4"><p className="font-semibold text-gray-900 mb-3">Delivery option</p><label className="flex items-start gap-3 cursor-pointer"><input type="radio" name="delivery" value="standard" checked={delivery === 'standard'} onChange={(event) => setDelivery(event.target.value)} className="mt-1 accent-amber-800" /><span><span className="block text-sm font-medium">Standard delivery — Free</span><span className="text-xs text-gray-500">Delivered in 3–5 business days</span></span></label><label className="flex items-start gap-3 cursor-pointer mt-3"><input type="radio" name="delivery" value="express" checked={delivery === 'express'} onChange={(event) => setDelivery(event.target.value)} className="mt-1 accent-amber-800" /><span><span className="block text-sm font-medium">Express delivery — Rs. 1,500</span><span className="text-xs text-gray-500">Delivered in 1–2 business days</span></span></label></div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3"><button type="button" onClick={addToCart} className="inline-flex justify-center items-center gap-2 rounded-xl border border-amber-800 py-3 font-semibold text-amber-900 hover:bg-amber-50"><ShoppingBag size={18} /> {added ? 'Added to Cart' : 'Add to Cart'}</button><button type="button" onClick={buyNow} className="rounded-xl bg-amber-900 py-3 font-semibold text-white hover:bg-amber-800">Buy Now</button></div>
          <div className="mt-7 space-y-3 text-sm text-gray-600"><p className="flex items-center gap-2"><Truck size={18} className="text-amber-700" /> Carefully packed and securely delivered.</p><p className="flex items-center gap-2"><ShieldCheck size={18} className="text-amber-700" /> Quality checked jewelry with purity assurance.</p><p className="flex items-center gap-2"><Check size={18} className="text-amber-700" /> Custom sizing and personalization available on request.</p></div>
        </section>
      </div>
      <section className="mt-12 rounded-2xl bg-white border border-amber-100 p-6 md:p-8"><h2 className="font-serif text-2xl font-bold text-amber-950">Product details</h2><dl className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm"><div><dt className="text-gray-500">Category</dt><dd className="mt-1 font-medium capitalize">{category}</dd></div><div><dt className="text-gray-500">Available metals</dt><dd className="mt-1 font-medium">Gold, Rose Gold, Silver</dd></div><div><dt className="text-gray-500">Craftsmanship</dt><dd className="mt-1 font-medium">Hand-finished by skilled artisans</dd></div><div><dt className="text-gray-500">Care</dt><dd className="mt-1 font-medium">Store in a dry jewelry box and avoid chemicals</dd></div></dl></section>
    </main>
  );
};

export default ProductDetail;
