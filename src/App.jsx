import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import NavBar from "./Components/NavBar/NavBar";
import Product from "./Components/Products/Product";
import Notification from "./Components/Notification/Notification";
const App = () => {
  return (
    <div>
      {/* Routes */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/notifications" element={<Notification />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
