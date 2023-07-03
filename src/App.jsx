import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Shop from "./Components/Shop/Shop";
import { CartProvider } from "./CartContext/CartContext";
const App = () => {
  return (
    <>
  <CartProvider>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </>
  );
};

export default App;
