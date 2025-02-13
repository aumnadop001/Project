import React from 'react';
import Home from './Pages/Home';
import Product from './Pages/Product';
import CheckOrder from './Pages/CheckOrder';
import NotFound from './Pages/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* หน้าแรก */}
        <Route path="/" element={<Home />} />
        
        {/* หน้าแสดงเมนูอาหาร */}
        <Route path="/product" element={<Product />} />
        
        {/* หน้า Check the Order */}
        <Route path="/check-order" element={<CheckOrder />} />
        
        {/* หน้า Not Found สำหรับ URL ที่ไม่ตรงกับเส้นทางที่กำหนด */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
