import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const initialCart = [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialCart);

  const addItem = (item, quantity) => {
    const itemId = item.id;
    if (isInCart(itemId)) {
      const product = cart.find(({ item }) => item.id === itemId);
      product.quantity += quantity;
    } else {
      setCart([...cart, { item, quantity }]);
    }
  };

  const removeItem = productIdToRemove => setCart(
    cart.filter(
      ({ item }) => item.id !== productIdToRemove
    )
  );

  const clear = () => setCart(initialCart);

  const isInCart = itemId => cart.some(({ item }) => item.id === itemId);

  return (
    <CartContext.Provider
      value={{ cart, setCart, addItem, removeItem, clear }}
    >
      {children}
    </CartContext.Provider>
  );
};
