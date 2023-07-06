import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import NavBar from "./Components/NavBar/NavBar";
import Product from "./Components/Products/Product";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
