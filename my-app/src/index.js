import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Routes/NavBar";
import AppRoutes from "./Routes/AppRoutes";
import UserContext from "./context/userContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<h1>Parent Loading</h1>}>
    <UserContext>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </UserContext>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
