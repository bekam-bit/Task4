import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client"; // Use `react-dom/client` for React 18
import { BrowserRouter } from "react-router-dom"; // Uncomment and use BrowserRouter
import App from "./App";
import "./App.css";
import { UserAuthProvider } from "./Task4/UserAuth"; // 

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserAuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserAuthProvider>
  </StrictMode>
);
