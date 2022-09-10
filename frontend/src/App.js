import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminLayout from "./components/layouts/Admin";
import FarmerLayout from "./components/layouts/Farmer";
import BuyerLayout from "./components/layouts/Buyer";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin/*" element={<AdminLayout />} />
            <Route path="/farmer/*" element={<FarmerLayout />} />
            <Route path="/buyer/*" element={<BuyerLayout />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
