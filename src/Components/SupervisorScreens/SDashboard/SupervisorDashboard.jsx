import React from 'react'
import Header from '../../Dashboard/Header'
import '../../Dashboard/style.css'
import SupervisorDashboardMain from './SupervisorDashboardMain'

function SupervisorDashboard() {
    return (

        <div className="App">

            <Header />

            <div className='Dashboard-panel'>

                

                <SupervisorDashboardMain />

            </div>

        </div >
    )
}

export default SupervisorDashboard