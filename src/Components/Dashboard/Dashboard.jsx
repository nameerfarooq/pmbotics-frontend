import DashboardMain from './DashboardMain';
import Header from './Header'
// import Sidebar from './Sidebar';
import './style.css'
function Dashboard(props) {
  return (
    <div className="App">

      <Header  />

      <div className='Dashboard-panel'>
        
        {/* <Sidebar /> */}

        <DashboardMain />

      </div>

    </div >
  );
}

export default Dashboard;
