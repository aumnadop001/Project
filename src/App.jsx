import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CheckOrder from './Pages/CheckOrder';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Product from './Pages/Product';
import { SelectedItemsProvider } from './useContext/SelectedItemsContext';
import AddProduct from './Pages/add';

const App = () => {
  return (
    <BrowserRouter>
      <SelectedItemsProvider>
        <Routes>
          {/* หน้าแรก */}
          <Route path="/" element={<Home />} />

          {/* หน้าแสดงเมนูอาหาร */}
          <Route path="/product" element={<Product />} />

          {/* หน้า Check the Order */}
          <Route path="/check-order" element={<CheckOrder />} />

          <Route path="/add" element={<AddProduct />} />

          {/* หน้า Not Found สำหรับ URL ที่ไม่ตรงกับเส้นทางที่กำหนด */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SelectedItemsProvider>
    </BrowserRouter>
  );
};

export default App;
