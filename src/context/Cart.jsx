import React, { createContext, useState } from "react";

// Crear el contexto
export const CartContext = createContext();

// Proveer el contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null); // null significa que no hay usuario logueado

  return (
    <UserContext.Provider value={{ cart, setCart }}>
      {children}
    </UserContext.Provider>
  );
};
