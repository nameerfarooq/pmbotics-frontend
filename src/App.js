import './App.css';
//eslint-disable-next-line
import Dashboard from './Components/Dashboard/Dashboard';
import SupervisorDashboard from './Components/SupervisorScreens/SDashboard/SupervisorDashboard';
import HomePage from './Components/LandingPage.jsx/HomePage';
import TDashboard from './Components/TeamMembers/Dashboard/TDashboard';
import Signup from './Components/LoginSignup/Signup';
import Loginpage from './Components/LoginSignup/Loginpage';

function App() {

  var loginStatus = true

  return (
    <div className="App">
      {
        loginStatus  ?
          <Dashboard UserRole={'FYPCoordinator'} UserName={'Sir Syed Faisal Ali'} />
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
