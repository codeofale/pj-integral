import React, { createContext, useState } from "react";

// Crear el contexto
export const UserContext = createContext();

// Proveer el contexto
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null significa que no hay usuario logueado

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
