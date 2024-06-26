import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { store } from "./store/Store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="dark text-foreground bg-background h-full w-full">
        <Provider store={store}>
          <App />
        </Provider>
      </main>
    </NextUIProvider>
  </React.StrictMode>
);
