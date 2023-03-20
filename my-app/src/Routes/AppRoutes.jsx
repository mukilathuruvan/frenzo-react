import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  UserPage,
  SingleUserPage,
  ParentPage,
  ChildrenPage,
  HistoryPage,
  ProfilePage,
} from "../pages";
import LoginPage from "../pages/LoginPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<UserPage />} />
      <Route path="/users/:id" element={<SingleUserPage />} />
      <Route path="/order" element={<h1>Order Page</h1>} />

      <Route path="/history" element={<HistoryPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="/parent" element={<ParentPage />}>
        <Route path="id" element={<ChildrenPage />} />
      </Route>
      <Route path="/*" element={<h1>404 Not Found Error</h1>} />
    </Routes>
  );
};

export default AppRoutes;
