import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
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
      <Route path="/*" element={<h1>404 Not Found Error</h1>} />
    </Routes>
  );
};

export default AppRoutes;
