import { createSlice } from "@reduxjs/toolkit";
import { items } from "../../Data/Product";

const initialState = {
  cartItems: [],
  products: items,
  productCount: 0,
  itemCount: 0,
  username: { name: "" },
};

const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    clearCart: (state, action) => {
      state.cartItems = [];
      state.productCount = state.cartItems.length;
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      state.productCount = state.cartItems.length;
    },
    addToCart: (state, action) => {
      const { item } = action.payload;
      const sameId = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      sameId ? null : state.cartItems.push({ ...item, quantity: 1 });
      state.productCount = state.cartItems.length;
    },
    increment: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) existingItem.quantity += 1;
      else state.cartItems.push({ id, quantity: 1 });
      state.productCount = state.cartItems.length;
    },
    decrement: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id == id);
      if (existingItem) existingItem.quantity -= 1;
      else state.cartItems.push({ id, quantity: 1 });
      state.productCount = state.cartItems.length;
    },
    login: (state, action) => {
      state.username = action.payload;
    },
    logout: (state) => {
      state.username += initialState;
    },
  },
});

export default CartSlice.reducer;
export const {
  clearCart,
  removeItem,
  addToCart,
  increment,
  decrement,
  logout,
  login,
} = CartSlice.actions;
