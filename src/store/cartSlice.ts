import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsProps } from "../types/product";

const cartSlice = createSlice({
  name: "cart",
  initialState: Array<ProductsProps>,
  reducers: {
    add(state, action: PayloadAction<ProductsProps>) {
      state.push(action.payload);
    },
    remove(state, action: PayloadAction<ProductsProps>) {
      return state.filter((p) => p.id !== action.payload.id);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
