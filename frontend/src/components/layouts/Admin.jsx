import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ThemeAction from "../../redux/actions/ThemeAction";

import Sidebar from "../Sidebar"
import Dashboard from "../../pages/AdminDash";
import AllFarmers from "../../pages/AllFarmers";

const Layout = () => {
  return (
    <>
      {/*<Sidebar />*/}
      <h1>Admin Pages</h1>
      <Routes>
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/farmers" element={<AllFarmers />} />
      </Routes>
    </>
  );
};

export default Layout;
