import React from "react";
import { Outlet } from "react-router-dom";

const ParentPage = () => {
  return (
    <div
      style={{
        backgroundColor: "lightgreen",
        height: "90vh",
      }}>
      <h1>ParentPage</h1>
      <Outlet />
    </div>
  );
};

export default ParentPage;
