import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "./slices/apiSlice";

import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    cartSlice,
  },
  middleware: (middleware) => middleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
