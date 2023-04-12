import React from 'react'
import Header from '../../Dashboard/Header'
import '../../Dashboard/style.css'
import SupervisorDashboardMain from './SupervisorDashboardMain'
import SupervisorSidebar from './SupervisorSidebar'

function SupervisorDashboard(props) {
    const UserName = props.UserName
    return (

        <div className="App">

            <Header UserName={UserName} />

            <div className='Dashboard-panel'>

                <SupervisorSidebar/>

                <SupervisorDashboardMain />

            </div>

        </div >
    )
}

export default SupervisorDashboard