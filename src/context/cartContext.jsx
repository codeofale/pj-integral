import React, { createContext, useState, useEffect } from "react";

// Crear el contexto
export const CartContext = createContext();
export const addToCart = "";
// Proveer el contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = sessionStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  console.log("en el carro: ", cart);
  // Guardar el usuario en localStorage cuando cambie
  useEffect(() => {
    if (cart) {
      sessionStorage.setItem("cart", JSON.stringify(cart));
    } else {
      sessionStorage.removeItem("cart");
    }
  }, [cart]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
