import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  console.log("Carrito actual:", cart);

  // Función para actualizar la cantidad de un producto
  const updateqty = (id, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: Math.max(1, item.qty + amount), // Evitar cantidades menores a 1
            }
          : item
      )
    );
  };

  // Función para eliminar un producto del carrito
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calcular el total
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

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
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600">
            Proceder al Pago
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
