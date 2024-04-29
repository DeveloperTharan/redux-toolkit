import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    cartSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
