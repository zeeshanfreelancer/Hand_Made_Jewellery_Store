// import React from 'react';
// import { Phone, Mail, MapPin,  MessageCircle } from 'lucide-react';

// const Footer = () => {
//   const phoneNumber = "923001234567"; // Apna WhatsApp number yahan set karein
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20Iqra%20Jewelry!`;

//   return (
//     <footer className="bg-amber-950 text-amber-100 pt-12 pb-6 border-t border-amber-900">
//       <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        
//         {/* Column 1: Brand Info */}
//         <div className="space-y-3">
//           <h2 className="text-2xl font-serif font-bold text-amber-300 tracking-wider">
//             IQRA JEWELRY
//           </h2>
//           <p className="text-xs text-amber-200/80 leading-relaxed">
//             Crafting timeless elegance with pure gold, diamonds, and royal bridal collections for your special moments.
//           </p>
//           <div className="flex space-x-3 pt-2">
//             <a
//               href={whatsappUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-8 h-8 rounded-full bg-amber-900 hover:bg-green-600 flex items-center justify-center text-white transition-colors"
//             >
//               <MessageCircle size={16} />
//             </a>
//             <a href="#" className="w-8 h-8 rounded-full bg-amber-900 hover:bg-amber-700 flex items-center justify-center text-white transition-colors">
//               <Instagram size={16} />
//             </a>
            
//           </div>
//         </div>

//         {/* Column 2: Quick Links */}
//         <div>
//           <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-3">
//             Quick Links
//           </h3>
//           <ul className="space-y-2 text-xs text-amber-200/80">
//             <li><a href="#" className="hover:text-white transition">Home</a></li>
//             <li><a href="#" className="hover:text-white transition">Rings Collection</a></li>
//             <li><a href="#" className="hover:text-white transition">Necklaces & Sets</a></li>
//             <li><a href="#" className="hover:text-white transition">Bridal Wear</a></li>
//           </ul>
//         </div>

//         {/* Column 3: Customer Care */}
//         <div>
//           <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-3">
//             Customer Services
//           </h3>
//           <ul className="space-y-2 text-xs text-amber-200/80">
//             <li><a href="#" className="hover:text-white transition">Custom Jewelry Orders</a></li>
//             <li><a href="#" className="hover:text-white transition">Gold Purity Guarantee</a></li>
//             <li><a href="#" className="hover:text-white transition">Shipping Policy</a></li>
//             <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
//           </ul>
//         </div>

//         {/* Column 4: Contact Info */}
//         <div>
//           <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-3">
//             Get In Touch
//           </h3>
//           <ul className="space-y-2.5 text-xs text-amber-200/80">
//             <li className="flex items-center gap-2">
//               <MapPin size={14} className="text-amber-400 shrink-0" />
//               <span>Jewelry Market, Main Bazaar, Pakistan</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <Phone size={14} className="text-amber-400 shrink-0" />
//               <span>+92 300 1234567</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <Mail size={14} className="text-amber-400 shrink-0" />
//               <span>info@iqrajewelry.com</span>
//             </li>
//           </ul>
//         </div>

//       </div>

//       {/* Bottom Copyright Bar */}
//       <div className="border-t border-amber-900/60 pt-4 text-center text-xs text-amber-300/60">
//         <p>© {new Date().getFullYear()} IQRA Jewelry. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react'

export default function Footer() {
  return (
    <div>
      <h1>footer</h1>
    </div>
  )
}
