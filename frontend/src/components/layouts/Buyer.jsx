import React from "react";
import { Route, Routes } from "react-router-dom";
import AddDemand from "../../pages/buyer/AddDemand";
import BuyerHeader from "../headers/BuyerHeader";
import ViewDemands from "../../pages/buyer/ViewDemands";
import UpdateDemand from "../../pages/buyer/UpdateDemand";

function BuyerLayout() {
  return (
    <div>
      <BuyerHeader />
      <Routes>
        <Route path="/add-demand" element={<AddDemand />} />
        <Route path="/view-demands" element={<ViewDemands />} />
        <Route path="/update-demand/:id" element={<UpdateDemand />} />
      </Routes>
    </div>
  );
}

export default BuyerLayout;
