import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ThemeAction from "../../redux/actions/ThemeAction";

import Dashboard from "../../pages/AdminDash";

const Layout = () => {
  return (
    <>
      <h1>Admin Pages</h1>
      <Routes>
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default Layout;
