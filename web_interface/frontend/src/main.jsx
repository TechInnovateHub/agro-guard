import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StateContextProvider } from "./context/index.jsx";

import {dark} from "@clerk/themes";


import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <StateContextProvider>
    <React.StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} appearance={dark}>
        <App />
      </ClerkProvider>
    </React.StrictMode>
  </StateContextProvider>
);
