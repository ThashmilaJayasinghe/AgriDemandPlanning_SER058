import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from './pages/Login';
import Admin from './components/layouts/Admin';
import FarmerLayout from './components/layouts/Farmer';

function App() {
  return (
    <div className='App'>
      <Router>
        <div className='container'>
          <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/admin/*' element={<Admin />} />
              <Route path='/farmer/*' element={<FarmerLayout />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
