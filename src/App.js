import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignPage from "./pages/SignPage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";

function App() {
  return (
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/product" element={<ProductPage/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignPage/>} />
          <Route path='/account' element={<AccountPage/>}/>
          <Route path = "*" element={<NotFoundPage/>} />
        </Routes>
  );
}

export default App;
