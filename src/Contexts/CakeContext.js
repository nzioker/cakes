import React, { createContext, useState } from "react";
import { cakes } from "../data";

export const CakeContext = createContext(null);

const getDefaultCartItems = () => {
  let cart = {};
  for (let i = 1; i < cakes.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
export const CakeContextProvider = (props) => {
  const [cart, setCart] = useState(getDefaultCartItems());

  const totalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cart) {
      if (cart[item] > 0) {
        let itemInfo = cakes.find((cake) => cake.id === Number(item));
        totalAmount += itemInfo.price * cart[item];
      }
    }
    return totalAmount;
  };
  const addItemToCart = (id) => {
    setCart((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const removeItemFromCart = (id) => {
    setCart((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  const updateCartItemCount = (newValue, id) => {
    setCart((prev) => ({ ...prev, [id]: newValue }));
  };
  const contextValue = {
    addItemToCart,
    removeItemFromCart,
    cart,
    updateCartItemCount,
    totalCartAmount,
  };
  return (
    <CakeContext.Provider value={contextValue}>
      {props.children}
    </CakeContext.Provider>
  );
};
