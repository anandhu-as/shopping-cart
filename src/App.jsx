import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import NavBar from "./Components/NavBar/NavBar";
import Product from "./Components/Products/Product";
import Notification from "./Components/Notification/Notification";
import Login from "./Components/Login/Login";
import { AuthProvider } from "./Auth/Auth";
import RequiredAuth from "./Components/Login/RequiredAuth";
const App = () => {
  return (
    <AuthProvider>
      <div>
        {/* Routes */}
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Product />} />
            <Route
              path="/cart"
              element={
                <RequiredAuth>
                  <Cart />
                </RequiredAuth>
              }
            />
            <Route path="/notifications" element={<Notification />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
};

export default App;
