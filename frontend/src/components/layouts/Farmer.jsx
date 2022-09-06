import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/AdminDash";
import SeedRequest from "../../pages/farmer/SeedRequest";
import SeedRequestList from "../../pages/farmer/SeedRequestList";
import FarmerHeader from "../headers/FarmerHeader";
import FarmerProfile from "../../pages/farmer/FarmerProfile";
import UpdateFarmerProfile from "../../pages/farmer/UpdateFarmerProfile";

function FarmerLayout() {
  return (
    <div>
      {/* farmer header */}
      <FarmerHeader />
      {/* farmer routes */}
      <Routes>
        <Route path="/seedRequest" element={<SeedRequest />} />
        <Route path="/mySeedRequests" element={<SeedRequestList />} />
        <Route path="/profile" element={<FarmerProfile />} />
        <Route path="/profileEdit" element={<UpdateFarmerProfile />} />

      </Routes>
    </div>
  );
}

export default FarmerLayout;
