import './App.css';
//eslint-disable-next-line
import Dashboard from './Components/Dashboard/Dashboard';
//eslint-disable-next-line
import SupervisorDashboard from './Components/SupervisorScreens/SDashboard/SupervisorDashboard';
import HomePage from './Components/LandingPage.jsx/HomePage';
//eslint-disable-next-line
import TDashboard from './Components/TeamMembers/Dashboard/TDashboard';
//eslint-disable-next-line
import Signup from './Components/LoginSignup/Register';
//eslint-disable-next-line
import Loginpage from './Components/LoginSignup/Loginpage';
//eslint-disable-next-line
import PMOProvider from './Context/PMOProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import GlobalProvider from './Context/GlobalProvider';
import GlobalContext from './Context/GlobalContext';
import { useContext } from 'react';
import Register from './Components/LoginSignup/Register';
import Main from './Components/AdminScreens/Main';
function App() {
  const { LoginStatus, userRole } = useContext(GlobalContext)



  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Loginpage />} />
        <Route path='/login' element={<Loginpage />} />
        {LoginStatus && userRole === "admin" ?
          (
            <Route path='/admin/*' element={<Main />} />
          )
          :
          (
            <Route path='/admin/*' element={<Loginpage />} />
          )
        }
        {LoginStatus && userRole === "fyp_panel" ?
          (
            <Route path='/fyp_panel/*' element={<PMOProvider><Dashboard /></PMOProvider>} />
          )
          :
          (
            <Route path='/fyp_panel/*' element={<Loginpage />} />
          )
        }
        {LoginStatus && userRole === "supervisor" ?
          (
            <Route path='/supervisor/*' element={<SupervisorDashboard />} />
          )
          :
          (
            <Route path='/supervisor/*' element={<Loginpage />} />
          )
        }
        {LoginStatus && userRole === "student" ?
          (
            <Route path='/student/*' element={<TDashboard />} />
          )
          :
          (
            <Route path='/student/*' element={<Loginpage />} />
          )
        }

      </Routes>

    </div>
  );
}

export default App;
