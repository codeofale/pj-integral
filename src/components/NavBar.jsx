import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";
function NavBar() {
  const { user } = useContext(UserContext);
  let userLoggedroute = "";

  if (user) {
    userLoggedroute = "/Porfile";
  } else {
    userLoggedroute = "/Login";
  }
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

          <Link to={userLoggedroute}>
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              {user ? (
                <>Porfile </>
              ) : (
                <>
                  {" "}
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
                  </svg>{" "}
                </>
              )}
            </button>
          </Link>
        </div>
      </header>
    </>
  );
}
export default NavBar;
