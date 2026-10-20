import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar'; 
import Display from './component/Display.jsx';
import JewelryDisplay from './component/JewelryDisplay';
import JewelrySlider from './component/JewelrySlider';
import JewelryHeroSection from './component/JewelryHeroSection';
import JewelryShowcase from './component/JewelryShowcase';
import Footer from './component/Footer';
import RingCollection from './component/RingCollection';
import PandentCollection from './component/PandentCollection';
import Auth from './component/Auth';
import CategoryCollection from './component/CategoryCollection';
import ProductDetail from './component/ProductDetail';
import CartPage from './component/CartPage';
import DeliveryInformation from './component/DeliveryInformation';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const addToCart = (product) => {
    setCartItems((items) => {
      const matchingItem = items.find((item) => item.id === product.id && item.color === product.color);
      if (matchingItem) {
        return items.map((item) => item.id === product.id && item.color === product.color
          ? { ...item, quantity: item.quantity + product.quantity }
          : item);
      }
      return [...items, product];
    });
  };

  const updateCartQuantity = (product, quantity) => {
    if (quantity < 1) {
      setCartItems((items) => items.filter((item) => !(item.id === product.id && item.color === product.color)));
      return;
    }
    setCartItems((items) => items.map((item) => item.id === product.id && item.color === product.color ? { ...item, quantity } : item));
  };

  const removeFromCart = (product) => {
    setCartItems((items) => items.filter((item) => !(item.id === product.id && item.color === product.color)));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
        {/* Navbar sab pages par common rahegi */}
        <Navbar cartCount={cartCount} />

        {/* Yahan Routes ke zariye alag-alag pages handle honge */}
        <div className="flex-grow">
          <Routes>
            {/* Home Page (Jab URL sirf '/' ho) */}
            <Route 
              path="/" 
              element={
                <>
                  <JewelryHeroSection />
                  <JewelryShowcase />
                  <JewelrySlider />
                </>
              } 
            />

            {/* Baqi components ke apne routes */}
            <Route path="/display" element={<Display />} />
            <Route path="/jewelryDisplay" element={<JewelryDisplay />} />
            <Route path="/rings" element={<RingCollection />} />
            <Route path="/pendants" element={<PandentCollection />} />
            <Route path="/earrings" element={<CategoryCollection category="earrings" />} />
            <Route path="/bracelets" element={<CategoryCollection category="bracelets" />} />
            <Route path="/sets" element={<CategoryCollection category="sets" />} />
            <Route path="/product/:category/:productId" element={<ProductDetail onAddToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage cartItems={cartItems} onUpdateQuantity={updateCartQuantity} onRemoveItem={removeFromCart} />} />
            <Route path="/checkout" element={<DeliveryInformation />} />
            <Route path="/login" element={<Auth initialMode="login" />} />
            <Route path="/register" element={<Auth initialMode="register" />} />
          </Routes>
        </div>

        {/* Footer bhi sab pages par niche show hoga */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
