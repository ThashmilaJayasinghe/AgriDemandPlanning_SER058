import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import Login from './pages/Login';
import AdminLayout from './components/layouts/Admin';
import FarmerLayout from './components/layouts/Farmer';
import BuyerLayout from './components/layouts/Buyer'
import {useEffect, useState} from "react";

function App() {

    const[isCorrectRoute, setIsCorrectRoute] = useState(false)
    console.log(window.location.pathname)

    useEffect(() => {

        if(localStorage.getItem('userRole') == 'Farmer' && window.location.pathname == '/farmer'){
    console.log("Farmer - correct route")
        }
        else if(localStorage.getItem('userRole') == 'Buyer' && window.location.pathname == '/buyer'){
            console.log("Buyer - correct route")
        }

    }, [])

  return (
    <div>
      <Router>
        <div>
          {/*<Routes>*/}
            {
                localStorage.getItem('userRole') == null && (
                    <Routes>
                        <Route path="/" element={<Login />} />
                    </Routes>
                )
            }
              {
                  localStorage.getItem('userRole') == 'Farmer' && (
                      <Routes>
                      <Route path="/farmer/*" element={<FarmerLayout />} />
                      </Routes>
                  )
              }

            {
                localStorage.getItem('userRole') == 'Buyer' && (
                    <Routes>
                        <Route path="/buyer/*" element={<BuyerLayout />} />
                    </Routes>
                )
            }

            {
                localStorage.getItem('userRole') == 'Admin' && (
                    <Routes>
                        <Route path="/admin/*" element={<AdminLayout />} />
                    </Routes>
                )
            }



          {/*  <Route path="/" element={<Login />} />*/}
          {/*  <Route path="/admin/*" element={<AdminLayout />} />*/}

          {/*  <Route path="/buyer/*" element={<BuyerLayout />} />*/}
          {/*</Routes>*/}
        </div>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
