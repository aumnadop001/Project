import { Button } from '@mui/material';
import React from 'react';

const FoodSet = ({ name, price, description, image, onAdd, onRemove }) => {
  return (
    <div className="flex flex-col items-center border-2 border-green-500 rounded-2xl shadow-lg bg-white p-4">
      {image && (
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      <h2 className="text-xl font-bold text-green-700 mb-2">{name}</h2>
      <p className="text-gray-700 text-sm mb-2 italic">{description}</p>
      <p className="text-lg font-semibold text-green-800">{price}</p>
      {/* <div className="flex justify-between mt-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
          onClick={onAdd}
        >
          เลือกเมนูนี้
        </button>
      </div> */}
      <br/>
      <Button onClick={onAdd} variant="contained" fullWidth color='success'>เลือกเมนูนี้</Button>
      <Button onClick={() => onRemove()} variant="contained" color='error' fullWidth>ลบเว้ย</Button>
    </div>
  );
};


export default FoodSet;
