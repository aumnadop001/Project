import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './../Template/Layout';
import FoodSet from '../Components/FoodSet';

const Product = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  // เพิ่มรายการ
  const handleAddItem = (item) => {
    setSelectedItems((prevItems) => [...prevItems, item]);
  };

  // ลบรายการ
  const handleRemoveItem = (item) => {
    setSelectedItems((prevItems) =>
      prevItems.filter((selected) => selected.name !== item.name)
    );
  };

  // ไปยังหน้า CheckOrder พร้อมส่งข้อมูล selectedItems
  const handleCheckOrder = () => {
    navigate('/check-order', { state: { selectedItems } }); // ส่งข้อมูล selectedItems ผ่าน state
  };

  return (
    <Layout>
      <hr />
      <h1 className="text-5xl text-center font-bold mt-4 mb-6 text-green-700">
        Menu
      </h1>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-4">
      <FoodSet
      name="ไทยโอลด์สคูล"
      price="129 บาท"
      description=" ผัดไทยกุ้งสด, ปอเปี๊ยะสด, น้ำมะพร้าว"
      image="src/Images/ไทย.png" 
      onAdd={() => handleAddItem({ name: 'ไทยโอลด์สคูล', price: '129 บาท' })}
      onRemove={() => handleRemoveItem({ name: 'ไทยโอลด์สคูล' })}
      />
      <FoodSet
      name="เกาหลีชิคเก้น"
      price="129 บาท"
      description=" ไก่ทอดเกาหลี, กิมจิ, โซจู"
      image="src/Images/เกาหลี.png" 
      onAdd={() => handleAddItem({ name: 'เกาหลีชิคเก้น', price: '129 บาท' })}
      onRemove={() => handleRemoveItem({ name: 'เกาหลีชิคเก้น' })}
      />
      <FoodSet
      name="ซามูไรเซ็ต"
      price="149 บาท"
      description=" ซูชิรวม, ซุปมิโซะ, ชาเขียว"
      image="src/Images/ญี่ปุ่น.png" 
      onAdd={() => handleAddItem({ name: 'ซามูไรเซ็ต', price: '149 บาท' })}
      onRemove={() => handleRemoveItem({ name: 'ซามูไรเซ็ต' })}
      />
      <FoodSet
      name="อเมริกันบิ๊กไบท์"
      price="149 บาท"
      description="เบอร์เกอร์เนื้อ, เฟรนช์ฟรายส์, โคล่า"
      image="src/Images/อเมริกัน.png" 
      onAdd={() => handleAddItem({ name: 'อเมริกันบิ๊กไบท์', price: '149 บาท' })}
      onRemove={() => handleRemoveItem({ name: 'อเมริกันบิ๊กไบท์' })}
      />
      <FoodSet
      name="อิตาเลียน แฟลร์"
      price="199 บาท"
      description="พาสต้าเพสโต้, ขนมปังกระเทียม, ไวน์แดง"
      image="src/Images/อิตาลี.png" 
      onAdd={() => handleAddItem({ name: 'อิตาเลียน แฟลร์', price: '199 บาท' })}
      onRemove={() => handleRemoveItem({ name: 'อิตาเลียน แฟลร์' })}
      />
      </div>

      {/* ปุ่ม Check the Order */}
      <div className="mt-8 text-center">
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700"
          onClick={handleCheckOrder}
        >
          ตรวจสอบเมนูที่สั่ง
        </button>
      </div>
    </Layout>
  );
};

export default Product;
