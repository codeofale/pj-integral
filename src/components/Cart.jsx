import React, { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../db/firebase";
function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const [showMessage, setShowMessage] = useState(false);

  //Actualizar la cantidad de un producto
  const updateqty = (id, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: Math.max(1, item.qty + amount),
            }
          : item
      )
    );
  };

  // Eliminar un producto del carrito
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calcular el total
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  /*
  Esta funcion descuenta el producto del stock y vacia el carrito adicional a eso levanta un mensaje de compra realizada con exito
  */
  const handleBuy = async () => {
    setShowMessage(true);
    try {
      for (const item of cart) {
        const productRef = doc(db, "products", item.id);

        await updateDoc(productRef, {
          stock: item.stock - item.qty,
        });
      }

      setCart([]);

      setTimeout(() => {
        setShowMessage(true);
      }, 7000);

      setTimeout(() => {
        setShowMessage(false);
      }, 10000);
    } catch (error) {
      console.error("Error al actualizar el stock:", error);
    }
  };
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        {cart.length > 0 ? (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-gray-500">${item.price}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => updateqty(item.id, -1)}
                    className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                  >
                    -
                  </button>
                  <div>{item.qty}</div>
                  <button
                    onClick={() => updateqty(item.id, 1)}
                    className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">El carrito está vacío</div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="mt-6">
          <div className="flex justify-between text-lg font-semibold">
            <div>Total:</div>
            <div>${total}</div>
          </div>
          <button
            onClick={handleBuy}
            className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
          >
            Proceder al Pago
          </button>
          {/* Mensaje de compra */}
          {showMessage && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center Z-Index-10">
              <div className="bg-white p-6 rounded shadow-md text-center">
                <h2 className="text-lg font-semibold">
                  ¡Compra realizada con éxito!
                </h2>
                <p className="text-gray-500 mt-2">Gracias por tu compra.</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;
