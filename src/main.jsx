import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/app/app";
import AdminApp from "./admin/app/app";
import { BrowserRouter } from "react-router-dom";

const isAdminRoute = window.location.pathname.startsWith("/admin");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {isAdminRoute ? <AdminApp /> : <App />}
    </BrowserRouter>
  </StrictMode>
);
