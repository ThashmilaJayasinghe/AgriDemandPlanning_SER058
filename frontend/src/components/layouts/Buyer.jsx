import React from "react";
import { Route, Routes } from "react-router-dom";
import AddDemand from "../../pages/buyer/AddDemand";
import BuyerHeader from "../headers/BuyerHeader";

function BuyerLayout() {
  return (
    <div>
      <BuyerHeader />
      <Routes>
        <Route path="/add-demand" element={<AddDemand />} />
      </Routes>
    </div>
  );
}

export default BuyerLayout;
