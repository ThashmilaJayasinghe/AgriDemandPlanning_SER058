import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from './pages/Login';
import AdminLayout from './components/layouts/Admin';
import FarmerLayout from './components/layouts/Farmer';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/admin/*' element={<AdminLayout />} />
              <Route path='/farmer/*' element={<FarmerLayout />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
