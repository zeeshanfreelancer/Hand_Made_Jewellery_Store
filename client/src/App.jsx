import React, { useState } from 'react';
import Navbar from './component/Navbar'; // Navbar ko yahan import karein
import Display from './component/Display';
import JewelryDisplay from './component/JewelryDisplay';
import JewelrySlider from './component/JewelrySlider';
import JewelryHeroSection from './component/JewelryHeroSection';
import JewelryShowcase from './component/JewelryShowcase';
import Footer from './component/Footer';
import RingCollection from './component/RingCollection';
import PandentCollection from './component/PandentCollection';

function App() {
  // Example: Cart ke items count manage karne ke liye state
  const [cartCount, setCartCount] = useState(2);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Navbar ko sab se upar place karein */}
      <Navbar cartCount={cartCount} />
<Display/>
<JewelryDisplay/>
<JewelryShowcase/>
<JewelryHeroSection/>
<RingCollection/>
<PandentCollection/>
      <JewelrySlider/>
   <Footer/>
    </div>
  );
}

export default App;