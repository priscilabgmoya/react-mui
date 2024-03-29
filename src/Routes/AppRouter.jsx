import React from "react";
import { Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoute";
import PublicLayout from "../components/layouts/PublicLayout";
import PrivateLayout from "../components/layouts/PrivateLayout";
import PrivateRoutes from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/auth"
          element={
            <PublicRoutes>
                <PublicLayout/>
            </PublicRoutes>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoutes >
              <PrivateLayout />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;