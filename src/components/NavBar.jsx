import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { Link, useNavigate } from "react-router-dom";
function NavBar() {
  const { user, setUser } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogOut = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              viewBox="0 0 64 64"
              id="icons"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <defs>
                  <style>.cls-1{"fill:#231f20;"}</style>
                </defs>
                <title></title>
                <path
                  className="cls-1"
                  d="M13,38H53a2,2,0,0,0,1.93-1.47l6-22A2,2,0,0,0,59,12H12.75L12,7.65A2,2,0,0,0,10,6H5a2,2,0,0,0,0,4H8.33l4.28,24A7,7,0,0,0,13,48h1.68a7,7,0,1,0,12.64,0H37.68a7,7,0,1,0,12.64,0H56a2,2,0,0,0,0-4H13a3,3,0,0,1,0-6ZM56.38,16,51.47,34H16.67L13.46,16ZM24,51a3,3,0,1,1-3-3A3,3,0,0,1,24,51Zm23,0a3,3,0,1,1-3-3A3,3,0,0,1,47,51Z"
                ></path>
              </g>
            </svg>
            <span className="ml-3 text-xl">Integral Ecom</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to="/">
              <button className="mr-5 hover:text-gray-900">Product List</button>
            </Link>
            <Link to="/About">
              <button className="mr-5 hover:text-gray-900">About</button>
            </Link>
          </nav>

          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/cart"
                  className="flex items-center space-x-1 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.6 8M17 13l1.6 8M9 21h6"
                    />
                  </svg>
                  <span>Cart</span>
                </Link>
                <div className="relative ml-auto">
                  <span
                    onClick={toggleMenu}
                    className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                  >
                    <svg
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      className="w-5 h-5"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>user-profile-circle-solid</title>
                        <g id="Layer_2" data-name="Layer 2">
                          <g id="invisible_box" data-name="invisible box">
                            <rect width="48" height="48" fill="none"></rect>
                          </g>
                          <g id="icons_Q2" data-name="icons Q2">
                            <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2Zm0,8a8,8,0,1,1-8,8A8,8,0,0,1,24,10Zm0,32a18.2,18.2,0,0,1-12.2-4.8A26.4,26.4,0,0,1,24,34a26.4,26.4,0,0,1,12.2,3.2A18.2,18.2,0,0,1,24,42Z"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span> Perfil</span>
                  </span>
                  {isMenuOpen && (
                    <div
                      className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50"
                      onClick={closeMenu}
                    >
                      <Link
                        to="/settings"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-sm"
                      >
                        Ajustes
                      </Link>
                      <span
                        onClick={handleLogOut}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full  text-sm"
                      >
                        Cerrar Sesión
                      </span>
                      <Link
                        to="/help"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-sm"
                      >
                        Ayuda
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <Link to="/Login">
                Login
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            )}
          </button>
        </div>
      </header>
    </>
  );
}
export default NavBar;
