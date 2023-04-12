import React from 'react'
// eslint-disable-next-line
import AllMilestones from '../Milestone/AllMilestones'
// eslint-disable-next-line
import CreateMilestone from '../Milestone/CreateMilestone'
// eslint-disable-next-line
import AllNotifications from '../Notifications/AllNotifications'
// eslint-disable-next-line
import CreateNotification from '../Notifications/CreateNotification'
// eslint-disable-next-line
import ChangeSupervisor from '../Project/ChangeSupervisor'
// import { ListGroup } from 'react-bootstrap'
// eslint-disable-next-line
import CreateProject from '../Project/CreateProject'
// eslint-disable-next-line
import EditTeamMembers from '../Project/EditTeamMembers'
// eslint-disable-next-line
import FinalProject from '../Project/FinalProject'
// eslint-disable-next-line
import MainProjectScreen from '../Project/MainProjectScreen'
// eslint-disable-next-line
import ViewProject from '../Project/ViewProject'
// eslint-disable-next-line
import AddSupervisor from '../Supervisor/AddSupervisor'
// eslint-disable-next-line
import AllSupervisors from '../Supervisor/AllSupervisors'
// eslint-disable-next-line

import './style.css'

function DashboardMain(props) {

    return (
        <div className='DashboardMain'>

            {/* **************************************************************************************** */}
            {/* Main Screen for projects (view and create new)  */}
            {/* **************************************************************************************** */}
            {/* <MainProjectScreen /> */}
            <CreateProject/> 
            {/* <ViewProject/> */}
            {/* <FinalProject/> */}
            {/* <ChangeSupervisor /> */}
            {/* <EditTeamMembers/> */}
            {/* ********************************************************************************************* */}
            {/* create milestone window */}
            {/* ********************************************************************************************* */}
            {/* ********************************************************************************************* */}
            {/* create milestone window */}
            {/* ********************************************************************************************* */}
            {/* <AllMilestones/> */}
            {/* <CreateMilestone/> */}
            {/* <AllNotifications/> */}
            {/* <CreateNotification/> */}
            {/* <AllSupervisors/> */}
            {/* <AddSupervisor/> */}

        </div>
    )
}

export default DashboardMain