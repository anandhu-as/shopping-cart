import { createSlice } from "@reduxjs/toolkit";
import { items } from "../../Data/Product";
const initialState = {
  cartItems: [],
  products: items,
  productCount: 0,
};
const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    ///reducers
    clearCart: (state, action) => {
      state.cartItems = [];
      state.productCount = state.cartItems.length;
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      state.productCount = state.cartItems.length;
      console.log(state.totalPrice);
    },
    addToCart: (state, action) => {
      const { item } = action.payload;
      const sameId = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      sameId ? null : state.cartItems.push({ ...item });
      state.productCount = state.cartItems.length;
    },
  },
});
export default CartSlice.reducer;
export const { clearCart, removeItem, addToCart } = CartSlice.actions;
