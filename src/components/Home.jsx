import React, { useContext } from "react";
import { ProductsContext } from "../context/productsContext";
import { Link } from "react-router-dom";
function Home() {
  const { products, loading } = useContext(ProductsContext);
  if (loading) {
    return <p>Cargando productos...</p>;
  }
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link
                  className="block relative h-48 rounded overflow-hidden"
                  to={`/product/${product.id}`}
                  state={product}
                >
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={product.img}
                  />
                </Link>
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
