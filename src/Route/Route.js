import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { Home } from "../screens/Home/Home";

export const AppRoute=()=> {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}
