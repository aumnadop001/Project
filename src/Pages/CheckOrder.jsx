import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../Template/Layout';
import Swal from 'sweetalert2'; // เพิ่มการนำเข้า SweetAlert2
import { useSelectedItems } from '../useContext/SelectedItemsContext';
const CheckOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedItems, replaceItem, removeItem, removeAll } = useSelectedItems();


  // เพิ่มจำนวน
  const handleIncreaseQuantity = (item) => {
    const objectIncrease = {
      name: item.name,
      price: item.price,
      quantity: item.quantity + 1
    }
    replaceItem(objectIncrease);
  };

  // ลดจำนวน
  const handleDecreaseQuantity = (item) => {
    if (item.quantity === 1) {
      removeItem(item);
    }
    const objectDecrease = {
      name: item.name,
      price: item.price,
      quantity: item.quantity - 1
    }
    replaceItem(objectDecrease);
  };

  // ลบรายการ
  const handleRemoveItem = (item) => {
    removeItem(item);
  };

  // ยืนยันการสั่งอาหาร
  const handlePlaceOrder = () => {
    Swal.fire({
      title: 'สั่งอาหารสำเร็จ!',
      text: 'เราได้รับรายการอาหารของท่านแล้ว',
      icon: 'success',
      confirmButtonText: 'กลับไปยังหน้าแรก',
    }).then(() => {
      removeAll()
      navigate('/'); // กลับไปหน้าแรกเมื่อผู้ใช้กด "OK"
    });
  };

  // คำนวณราคารวม
  const totalPrice = selectedItems.reduce(
    (total, item) => total + item.quantity * parseFloat(item.price),
    0
  );

  return (
    <Layout>
      <h1 className="text-5xl font-bold text-center mb-6 text-green-700">
        ตรวจสอบรายการอาหารของท่าน
      </h1>
      <hr />
      <div className="mt-8">
        {selectedItems.length > 0 ? (
          <div className="flex flex-col items-center">
            {selectedItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center w-full max-w-md p-4 mb-2 border border-green-400 rounded-lg shadow"
              >
                <div>
                  <p className="text-lg font-semibold text-green-800">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    Price: {item.price}
                  </p>
                  <p className="text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                    onClick={() => handleIncreaseQuantity(item)}
                  >
                    +
                  </button>
                  <button
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    onClick={() => handleDecreaseQuantity(item)}
                  >
                    -
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => handleRemoveItem(item)}
                  >
                    ลบรายการ
                  </button>
                </div>
              </div>
            ))}

            {/* แสดงราคารวม */}
            <div className="mt-6 text-lg font-bold text-green-700">
              Total Price: {totalPrice.toFixed(2)}  บาท
            </div>

            {/* ปุ่มสั่งอาหาร */}
            <button
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700"
              onClick={handlePlaceOrder}
            >
              ยืนยันการสั่ง
            </button>
          </div>
        ) : (
          <p className="text-center text-gray-500">ไม่พบรายการอาหารของท่านกรุณากลับไปหน้าเลือกเมนู</p>
        )}
      </div>
    </Layout>
  );
};

export default CheckOrder;
