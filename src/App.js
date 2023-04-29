import './App.css';
//eslint-disable-next-line
import Dashboard from './Components/Dashboard/Dashboard';
//eslint-disable-next-line
import SupervisorDashboard from './Components/SupervisorScreens/SDashboard/SupervisorDashboard';
import HomePage from './Components/LandingPage.jsx/HomePage';
//eslint-disable-next-line
import TDashboard from './Components/TeamMembers/Dashboard/TDashboard';
//eslint-disable-next-line
import Signup from './Components/LoginSignup/Signup';
//eslint-disable-next-line
import Loginpage from './Components/LoginSignup/Loginpage';
//eslint-disable-next-line
import PMOProvider from './Context/PMOProvider';

function App() {

  var loginStatus = true

  return (
    <div className="App">
      {
        loginStatus ?
          <PMOProvider>
            <Dashboard UserRole={'FYPCoordinator'} UserName={'Sir Syed Faisal Ali'} />
          </PMOProvider>
          // <SupervisorDashboard UserRole={'Supervisor'} UserName={'Sir Syed Faisal Ali'} />
          // <TDashboard UserRole={'TeamMember'} UserName={'Muhammad Nameer'}/>
          // <Signup/>
          // <Loginpage/>
          :
          <HomePage />
      }



    </div>
  );
}

export default App;
