import { React, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../context/userContext";
function Login() {
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChangeLogin = (e) => {
    const { id, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [id]: value, // Actualiza el estado basado en el id del input
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth(); // Obtiene la instancia de autenticación
    try {
      // Intenta iniciar sesión con email y contraseña
      await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      );
      console.log("Inicio de sesión exitoso");
      //seteamos en el contexto el usuario logeado como true
      setUser(true);
      // Redirige al usuario después del login
      navigate("/");
    } catch (err) {
      console.log("Error al iniciar sesión:", err.code);
      setError(
        "Hubo un error al intentar iniciar sesión. Por favor, intente nuevamente."
      );
    }
  };

  return (
    <>
      <section className="text-gray-600 body-font min-h-screen">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              ¡Bienvenido al Ecommerce #1 Elegido por los Usuarios! 🚀 Únete a
              miles de clientes satisfechos que nos eligen cada día para:
            </h1>
            <p className="leading-relaxed mt-4">
              Descubrir una increíble variedad de productos en todas las
              categorías.
            </p>
            <p className="leading-relaxed mt-4">
              Aprovechar ofertas únicas y precios imbatibles.
            </p>
            <p className="leading-relaxed mt-4">
              Comprar de manera segura y rápida, con confianza total.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Ingresa tus Datos
            </h2>
            {error && (
              <div className="bg-red-100 text-red-500 p-2 mb-4 rounded">
                {error}
              </div>
            )}
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleChangeLogin}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Contraseña
              </label>
              <input
                type="text"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleChangeLogin}
              />
            </div>
            <button
              onClick={handleSubmit}
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Continuar
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Todavia no tienes una cuenta?.{" "}
              <Link to="/Register" className="text-xs text-indigo-500 mt-3">
                Registrate ahora
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Login;
