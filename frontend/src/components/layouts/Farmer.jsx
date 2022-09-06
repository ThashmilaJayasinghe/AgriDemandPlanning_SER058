import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/AdminDash";
import SeedRequest from "../../pages/farmer/SeedRequest";
import SeedRequestList from "../../pages/farmer/SeedRequestList";
import FarmerHeader from "../headers/FarmerHeader";

function FarmerLayout() {
  return (
    <div>
      {/* farmer header */}
      <FarmerHeader />
      {/* farmer routes */}
      <Routes>
        <Route path="/seedRequest" element={<SeedRequest />} />
        <Route path="/mySeedRequests" element={<SeedRequestList />} />
      </Routes>
    </div>
  );
}

export default FarmerLayout;
