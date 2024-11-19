import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import CreateAccount from "./components/createAccount";
import ProductDetail from "./components/productDetail";
import Register from "./components/Register";
import { UserProvider } from "./context/userContext"; // Ruta al archivo de contexto
import { ProductsProvider } from "./context/productsContext";
function App() {
  return (
    <>
      <UserProvider>
        <ProductsProvider>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/Login" element={<Login />} />
              <Route path="/CreateAccount" element={<CreateAccount />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/" element={<Home />} />
              <Route path="/Register" element={<Register />} />
            </Routes>
          </Router>
        </ProductsProvider>
      </UserProvider>
    </>
  );
}

export default App;
