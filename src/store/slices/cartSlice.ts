import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsProps } from "../../types/product";

const cartFromLocalStorage = window.localStorage.getItem("cart");
const initialState: Array<ProductsProps> = cartFromLocalStorage
  ? JSON.parse(cartFromLocalStorage)
  : [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action: PayloadAction<ProductsProps>) {
      state.push(action.payload);
      window.localStorage.setItem("cart", JSON.stringify(state));
    },
    remove(state, action: PayloadAction<ProductsProps>) {
      const newState = state.filter((p) => p.id !== action.payload.id);
      window.localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
