import React, { useState } from 'react';
import Navbar from './component/Navbar'; // Navbar ko yahan import karein
import Display from './component/Display';

function App() {
  // Example: Cart ke items count manage karne ke liye state
  const [cartCount, setCartCount] = useState(2);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Navbar ko sab se upar place karein */}
      <Navbar cartCount={cartCount} />
<Display/>
      {/* 2. Baaki aap ki website ka content yahan aayega */}
   
    </div>
  );
}

export default App;