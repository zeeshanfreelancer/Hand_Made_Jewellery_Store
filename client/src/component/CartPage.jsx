import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { formatPrice } from '../data/products';

const CartPage = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (!cartItems.length) {
    return <main className="max-w-4xl mx-auto px-4 py-16 text-center"><h1 className="font-serif text-3xl font-bold text-amber-950">Your cart is empty</h1><Link to="/" className="inline-block mt-5 rounded-lg bg-amber-900 px-5 py-3 text-white hover:bg-amber-800">Explore collections</Link></main>;
  }

  return <main className="max-w-5xl mx-auto px-4 py-10"><h1 className="font-serif text-3xl font-bold text-amber-950 mb-7">Shopping Cart</h1><div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8"><section className="space-y-4">{cartItems.map((item) => <article key={`${item.category}-${item.id}-${item.color}`} className="flex gap-4 rounded-xl border border-amber-100 bg-white p-4"><img src={item.image} alt={item.name} className="w-24 h-24 rounded-lg object-cover" /><div className="flex-1"><h2 className="font-semibold text-gray-900">{item.name}</h2><p className="text-sm text-gray-500">{item.color}</p><p className="mt-1 font-bold text-amber-900">{formatPrice(item.price)}</p><div className="mt-3 flex items-center justify-between"><div className="flex items-center border rounded-lg"><button type="button" onClick={() => onUpdateQuantity(item, item.quantity - 1)} className="p-1.5"><Minus size={15} /></button><span className="w-8 text-center text-sm">{item.quantity}</span><button type="button" onClick={() => onUpdateQuantity(item, item.quantity + 1)} className="p-1.5"><Plus size={15} /></button></div><button type="button" onClick={() => onRemoveItem(item)} className="text-gray-500 hover:text-red-600"><Trash2 size={18} /></button></div></div></article>)}</section><aside className="h-fit rounded-xl border border-amber-100 bg-white p-5"><h2 className="font-semibold text-lg">Order Summary</h2><div className="mt-4 flex justify-between text-sm"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div><div className="mt-2 flex justify-between text-sm"><span>Delivery</span><span>Calculated at checkout</span></div><div className="mt-4 border-t pt-4 flex justify-between font-bold"><span>Total</span><span>{formatPrice(subtotal)}</span></div><Link to="/checkout" className="mt-5 block w-full rounded-lg bg-amber-900 py-3 text-center font-semibold text-white hover:bg-amber-800">Proceed to Checkout</Link></aside></div></main>;
};

export default CartPage;
