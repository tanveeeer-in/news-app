import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <App />
    </div>
  </StrictMode>
);
