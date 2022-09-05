import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/AdminDash";
import SeedRequest from "../../pages/farmer/SeedRequest";
import FarmerHeader from "../headers/FarmerHeader";

function FarmerLayout() {
  return (
    <div>
      {/* farmer header */}
      <FarmerHeader />
      {/* farmer routes */}
      <Routes>
        <Route path="/seedRequest" element={<SeedRequest />} />
      </Routes>
    </div>
  );
}

export default FarmerLayout;
