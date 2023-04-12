import DashboardMain from './DashboardMain';
import Header from './Header'
import Sidebar from './Sidebar';
import './style.css'
function Dashboard(props) {
  const UserName = props.UserName
  return (

    <div className="App">

      <Header UserName={UserName} />

      <div className='Dashboard-panel'>
        
        <Sidebar />

        <DashboardMain />

      </div>

    </div >
  );
}

export default Dashboard;
