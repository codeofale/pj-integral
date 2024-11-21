import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import ProductDetail from "./components/ProductDetail";
import Register from "./components/Register";
import Cart from "./components/Cart";
import { UserProvider } from "./context/userContext";
import { ProductsProvider } from "./context/productsContext";
import { CartProvider } from "./context/cartContext";
import About from "./components/About";
function App() {
  return (
    <>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <Router>
              <NavBar />
              <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/" element={<Home />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/About" element={<About />} />
              </Routes>
              <Footer />
            </Router>
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </>
  );
}

export default App;
