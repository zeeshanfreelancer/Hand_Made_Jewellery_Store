import React, { useState } from 'react';
// Tailwind Icons ke liye Lucide-React ya koi bhi icon library use kar sakte hain
import { ShoppingCart, Search, User } from 'lucide-react';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <nav className="bg-white shadow-md w-full px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* 1. LOGO */}
        <div className="flex items-center space-x-2">
          <a href="#" className="text-2xl font-bold text-blue-600 flex items-center gap-1">
            <span className="bg-blue-600 text-white px-2 py-1 rounded-lg text-xl">My</span>
            Store
          </a>
        </div>

        {/* 2. SEARCH BAR */}
        <form 
          onSubmit={handleSearch} 
          className="flex-1 max-w-md mx-4 relative hidden sm:block"
        >
          <input
            type="text"
            placeholder="Search products, brands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
        </form>

        {/* RIGHT SECTION: Links, Cart & Login/Register */}
        <div className="flex items-center space-x-4">
          
          {/* Mobile Search Icon (Only visible on small screens) */}
          <button className="sm:hidden text-gray-600 hover:text-blue-600">
            <Search className="w-6 h-6" />
          </button>

          {/* 3. LOGIN & REGISTER LINKS */}
          <div className="flex items-center space-x-3 text-sm font-medium">
            <a 
              href="#login" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Login
            </a>
            <span className="text-gray-300">|</span>
            <a 
              href="#register" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Register
            </a>
          </div>

          {/* 4. ADD TO CART CARD / BUTTON */}
          <button 
            onClick={handleAddToCart}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all shadow-sm active:scale-95"
          >
            <div className="relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden md:inline">Add to Cart</span>
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;