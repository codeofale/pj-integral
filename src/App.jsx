import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import CreateAccount from "./components/createAccount";
import ProductDetail from "./components/productDetail";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
