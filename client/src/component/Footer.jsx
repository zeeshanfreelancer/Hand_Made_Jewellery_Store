import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* DIV 1: Logo & Brand Name */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <div className="flex items-center space-x-3">
            {/* Logo Image / Icon */}
            <img 
              src="/assets/logo.png" 
              alt="Jewelry Logo" 
              className="w-10 h-10 object-contain rounded-full bg-white p-1"
              // Fallback agar image na ho
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <span className="text-2xl font-bold tracking-wide text-amber-400">
             IQRA Jewelry
            </span>
          </div>
          <p className="text-gray-400 text-sm text-center md:text-left leading-relaxed">
            Crafting elegance with our premium collection of rings, pendants, and fine jewelry. Made for every special moment.
          </p>
        </div>

        {/* DIV 2: Ring & Pendant Display Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-amber-400 pb-1 inline-block">
            Our Collections
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm text-center md:text-left">
            <li>
              <a href="#rings" className="hover:text-amber-400 transition-colors">
                💍 Rings Collection
              </a>
            </li>
            <li>
              <a href="#pendants" className="hover:text-amber-400 transition-colors">
                📿 Pendants Collection
              </a>
            </li>
            <li>
              <a href="#solitaire" className="hover:text-amber-400 transition-colors">
                ✨ Diamond & Solitaires
              </a>
            </li>
            <li>
              <a href="#wedding-bands" className="hover:text-amber-400 transition-colors">
                💒 Wedding & Engagement Bands
              </a>
            </li>
          </ul>
        </div>

        {/* DIV 3: Contact Us Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-amber-400 pb-1 inline-block">
            Contact Us
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm text-center md:text-left">
            <li className="flex items-center space-x-2">
              <span>📍</span>
              <span >123 Jewelry Market, Lahore, Pakistan</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>📞</span>
              <a href="tel:+923001234567" className="hover:text-amber-400">
                +92 300 1234567
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <span>✉️</span>
              <a href="mailto:info@luxejewelry.com" className="hover:text-amber-400">
                info@luxejewelry.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Strip */}
      <div className="border-t border-gray-800 mt-10 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Luxe Jewelry. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;