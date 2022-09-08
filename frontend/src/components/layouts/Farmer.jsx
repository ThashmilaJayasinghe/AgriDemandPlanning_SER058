import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/admin/AdminDash";
import AddDemand from "../../pages/buyer/AddDemand";
import SeedRequest from "../../pages/farmer/SeedRequest";
import SeedRequestList from "../../pages/farmer/SeedRequestList";
import FarmerHeader from "../headers/FarmerHeader";
import FarmerProfile from "../../pages/farmer/FarmerProfile";
import UpdateFarmerProfile from "../../pages/farmer/UpdateFarmerProfile";

function FarmerLayout() {
  return (
    <div>
      <FarmerHeader />
      <Routes>
        <Route path="/seedRequest" element={<SeedRequest />} />
        <Route path="/mySeedRequests" element={<SeedRequestList />} />

        {/* For just testing only, this should move to buyer routes */}
        <Route path="/add-demand" element={<AddDemand />} />

        <Route path="/profile" element={<FarmerProfile />} />
        <Route path="/profileEdit" element={<UpdateFarmerProfile />} />
      </Routes>
    </div>
  );
}

export default FarmerLayout;
