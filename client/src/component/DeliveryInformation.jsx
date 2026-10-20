import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, ChevronLeft, Truck } from 'lucide-react';

const DeliveryInformation = () => {
  const navigate = useNavigate();
  const [deliveryMethod, setDeliveryMethod] = useState('standard');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <main className="max-w-xl mx-auto px-4 py-16 text-center"><CheckCircle2 size={56} className="mx-auto text-emerald-600" /><h1 className="mt-5 font-serif text-3xl font-bold text-amber-950">Delivery details saved</h1><p className="mt-3 text-gray-600">Your order details are ready for confirmation. We will contact you before dispatch.</p><button type="button" onClick={() => navigate('/')} className="mt-6 rounded-lg bg-amber-900 px-5 py-3 font-semibold text-white hover:bg-amber-800">Continue Shopping</button></main>;
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <Link to="/cart" className="inline-flex items-center gap-1 text-sm text-amber-800 hover:text-amber-600"><ChevronLeft size={16} /> Back to cart</Link>
      <div className="mt-5 rounded-2xl border border-amber-100 bg-white p-6 md:p-8 shadow-sm"><div className="flex items-center gap-3"><div className="rounded-full bg-amber-100 p-3 text-amber-800"><Truck size={22} /></div><div><h1 className="font-serif text-3xl font-bold text-amber-950">Delivery Information</h1><p className="mt-1 text-sm text-gray-600">Enter the address where you would like your jewelry delivered.</p></div></div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-5"><div className="grid grid-cols-1 sm:grid-cols-2 gap-5"><label className="text-sm font-medium text-gray-700">First name<input required name="firstName" autoComplete="given-name" className="mt-1.5 w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600" /></label><label className="text-sm font-medium text-gray-700">Last name<input required name="lastName" autoComplete="family-name" className="mt-1.5 w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600" /></label></div><label className="block text-sm font-medium text-gray-700">Phone number<input required type="tel" name="phone" autoComplete="tel" placeholder="+92 300 1234567" className="mt-1.5 w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600" /></label><label className="block text-sm font-medium text-gray-700">Email address<input required type="email" name="email" autoComplete="email" className="mt-1.5 w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600" /></label><label className="block text-sm font-medium text-gray-700">Address<input required name="address" autoComplete="street-address" placeholder="House, street, area" className="mt-1.5 w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600" /></label><div className="grid grid-cols-1 sm:grid-cols-2 gap-5"><label className="text-sm font-medium text-gray-700">City<input required name="city" autoComplete="address-level2" className="mt-1.5 w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600" /></label><label className="text-sm font-medium text-gray-700">Postal code <span className="text-gray-400">(optional)</span><input name="postalCode" autoComplete="postal-code" className="mt-1.5 w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600" /></label></div><fieldset><legend className="text-sm font-semibold text-gray-800 mb-3">Delivery method</legend><label className="flex gap-3 rounded-lg border border-amber-200 p-4 cursor-pointer"><input type="radio" name="delivery" value="standard" checked={deliveryMethod === 'standard'} onChange={(event) => setDeliveryMethod(event.target.value)} className="mt-1 accent-amber-800" /><span><span className="block font-medium text-sm">Standard delivery — Free</span><span className="text-xs text-gray-500">3–5 business days</span></span></label><label className="mt-3 flex gap-3 rounded-lg border border-amber-200 p-4 cursor-pointer"><input type="radio" name="delivery" value="express" checked={deliveryMethod === 'express'} onChange={(event) => setDeliveryMethod(event.target.value)} className="mt-1 accent-amber-800" /><span><span className="block font-medium text-sm">Express delivery — Rs. 1,500</span><span className="text-xs text-gray-500">1–2 business days</span></span></label></fieldset><label className="block text-sm font-medium text-gray-700">Delivery note <span className="text-gray-400">(optional)</span><textarea name="note" rows="3" placeholder="Any special delivery instructions" className="mt-1.5 w-full resize-none rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600" /></label><button type="submit" className="w-full rounded-lg bg-amber-900 py-3 font-semibold text-white hover:bg-amber-800">Save Delivery Information</button></form>
      </div>
    </main>
  );
};

export default DeliveryInformation;
