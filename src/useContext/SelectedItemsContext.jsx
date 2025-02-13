import { createContext, useContext, useState } from 'react';

// สร้าง Context
const SelectedItemsContext = createContext();

// Hook ใช้งาน Context
export const useSelectedItems = () => useContext(SelectedItemsContext);

// สร้าง Provider
export const SelectedItemsProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const addItem = (item) => {
    setSelectedItems((prevItems) => {
      const existingItem = prevItems.find((selected) => selected.name === item.name);

      if (existingItem) {
        return prevItems.map((selected) =>
          selected.name === item.name
            ? { ...selected, quantity: selected.quantity + 1 }
            : selected
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeItem = (item) => {
    setSelectedItems((prevItems) =>
      prevItems.filter((selected) => selected.name !== item.name)
    );
  };
  const replaceItem = (item) => {
    setSelectedItems((prevItems) =>
      prevItems.map((selected) =>
        selected.name === item.name
          ? { ...selected, quantity: item.quantity }
          : selected
      ))
  }
  return (
    <SelectedItemsContext.Provider value={{ selectedItems, addItem, removeItem, replaceItem }}>
      {children}
    </SelectedItemsContext.Provider>
  );
};
