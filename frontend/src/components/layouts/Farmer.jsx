import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/admin/AdminDash";
import AddDemand from "../../pages/buyer/AddDemand";
import EditSeedRequest from "../../pages/farmer/EditSeedRequest";
import EvaluatedRequests from "../../pages/farmer/EvaluatedRequestList";
import SeedRequest from "../../pages/farmer/SeedRequest";
import SeedRequestList from "../../pages/farmer/SeedRequestList";
import TestingPDF from "../../pages/farmer/TestingPDF";
import FarmerHeader from "../headers/FarmerHeader";

function FarmerLayout() {
  return (
    <div>
      <FarmerHeader />
      <Routes>
        <Route path="/seedRequest" element={<SeedRequest />} />
        <Route path="/mySeedRequests" element={<SeedRequestList />} />
        <Route path="/testingPDF" element={<TestingPDF />} />
        <Route path="/editRequest" element={<EditSeedRequest />} />
        <Route path="/evaluatedRequest" element={<EvaluatedRequests />} />

        {/* For just testing only, this should move to buyer routes */}
        <Route path="/add-demand" element={<AddDemand />} />
      </Routes>
    </div>
  );
}

export default FarmerLayout;
