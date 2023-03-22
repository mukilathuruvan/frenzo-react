import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import CardContainer from "../pages/CardContainer";
import ProductsPage from "../pages/ProductsPage";
const HomePage = React.lazy(() => import("../pages/HomePage"));
const UserPage = React.lazy(() => import("../pages/UserPage"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/users"
        element={
          <Suspense fallback={<h1>Loading...!</h1>}>
            <UserPage />
          </Suspense>
        }
      />

      <Route path="products" element={<ProductsPage />}>
        <Route path=":category" element={<CardContainer />} />
      </Route>

      <Route path="/*" element={<h1>404 Not Found Error</h1>} />
    </Routes>
  );
};

export default AppRoutes;
