import React, { createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../db/firebase";
export const ProductsContext = createContext();
export const ProductsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  /* Peticion de los productos, en esta funcion se piden los productos a firebase pero si ya se encuentran en el estado
no se vuelven a pedir
*/
  const fetchProducts = async () => {
    setLoading(true);
    if (products.length > 0) return;
    try {
      const productsCollection = collection(db, "products");
      const productsSnapShot = await getDocs(productsCollection);
      const productsList = productsSnapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsList);
      console.log("productos de firebase: ", products);
    } catch (error) {
      console.error("Error fetchind products:", error);
    } finally {
      setLoading(false);
    }
  };

  /* Lanzamos un useffect al momento de montarse el componente se va a lanzar la funcion de peticion de productos */
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <ProductsContext.Provider value={{ products, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};
