import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  UserPage,
  SingleUserPage,
  ParentPage,
  ChildrenPage,
} from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<UserPage />} />
      <Route path="/users/:id" element={<SingleUserPage />} />
      <Route path="/order" element={<h1>Order Page</h1>} />
      <Route path="/*" element={<h1>404 Not Found Error</h1>} />

      <Route path="/parent" element={<ParentPage />}>
        <Route path="id" element={<ChildrenPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
