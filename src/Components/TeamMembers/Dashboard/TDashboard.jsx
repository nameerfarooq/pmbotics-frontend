import TDashboardMain from './TDashboardMain';
import THeader from './THeader'
import TSidebar from './TSidebar';
import './Tstyle.css'
function TDashboard(props) {
  const UserName = props.UserName
  const UserRole = props.UserRole
  return (

    <div className="App">

      <THeader UserName={UserName} />

      <div className='Dashboard-panel'>
        
        <TSidebar />

        <TDashboardMain UserRole={UserRole}/>

      </div>

    </div >
  );
}

export default TDashboard;
