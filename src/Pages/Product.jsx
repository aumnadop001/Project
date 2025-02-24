import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FoodSet from '../Components/FoodSet';
import { callDelete, callGet } from '../services/axios.service';
import { useSelectedItems } from '../useContext/SelectedItemsContext';
import Layout from './../Template/Layout';

const Product = () => {
  const { selectedItems, addItem, removeItem } = useSelectedItems();
  const navigate = useNavigate();

  const [data, setData] = useState([])
  console.log(data)
  const fetchData = async () => {
    const res = await callGet('products')
    setData(res)
  }

  useEffect(() => {
    fetchData()
  }, [])

  // เพิ่มรายการ
  const handleAddItem = (item) => {
    addItem(item);
  };

  // ลบรายการ
  const handleRemoveItem = (item) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      removeItem(item);
      console.log('item ->', item);
      callDelete(`products/${item.id}`).then(() => {
        fetchData();
      });
    }
  };

  // ไปยังหน้า CheckOrder พร้อมส่งข้อมูล selectedItems
  const handleCheckOrder = () => {
    navigate('/check-order', { state: { selectedItems } }); // ส่งข้อมูล selectedItems ผ่าน state
  };

  return (
    <Layout data={selectedItems}>
      <hr />
      <h1 className="text-5xl text-center font-bold mt-4 mb-6 text-green-700">
        Menu
      </h1>
      <hr />
      <Button onClick={() => navigate('/add')} variant="contained">เพิ่มสินค้า นะจ๊ะ อิอิ</Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-4">
        {data.map((i)=><FoodSet
          name={i.name}
          price={`${i.price} บาท`}
          description={i.description}
          image={i.image}
          onAdd={() => handleAddItem({ name:i.name, price:i.price, quantity: 1 })}
          onRemove={() => handleRemoveItem({ id:i._id})}
          key={i.name} 
        />)}
        
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
