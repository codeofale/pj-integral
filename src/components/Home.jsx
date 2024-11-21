import React, { useContext, useState } from "react";
import { ProductsContext } from "../context/productsContext";
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";
function Home() {
  const [showMessage, setShowMessage] = useState(false);
  const { products, loading } = useContext(ProductsContext);
  const { user } = useContext(UserContext);
  let redirectToLogin = false;
  if (user) {
    redirectToLogin = true;
  }
  if (loading) {
    return <p>Cargando productos...</p>;
  }
  /*
  Vamos a preguntar si existe un usuario, si no esta logeado entonces mostramos un cartel para que se loguee 
  */
  const handleModalLogin = (e) => {
    e.preventDefault();
    console.log("ModalOpen");
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };
  return (
    <>
      <section className="text-gray-600 body-font min-h-[74vh]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link
                  className="block relative h-48 rounded overflow-hidden"
                  to={redirectToLogin ? `/product/${product.id}` : undefined}
                  state={product}
                  onClick={!redirectToLogin ? handleModalLogin : ""}
                >
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={product.img}
                  />
                </Link>
                {showMessage && (
                  <div className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg">
                    Para ver el detalle del producto, debes iniciar sesion
                  </div>
                )}
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    SKU: {product.id}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {product.name}
                  </h2>
                  <h4 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.description}
                  </h4>
                  <p className="mt-1">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
