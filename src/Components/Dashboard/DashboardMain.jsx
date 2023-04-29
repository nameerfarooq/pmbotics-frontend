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
// eslint-disable-next-line
import AllStudents from '../Students/AllStudents'
// eslint-disable-next-line
import AddStudents from '../Students/AddStudents'
import AllDepartments from './Departments/AllDepartments'
import Sidebar from './Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MilestoneDetail from '../Milestone/MilestoneDetail'

function DashboardMain(props) {

    return (
        <>
            <BrowserRouter>
                <Sidebar />
                <div className='DashboardMain'>
                    <Routes>
                    <Route  path='/' element={<MainProjectScreen />} />
                    <Route path='/create-project' element={<CreateProject/>} />
                    {/* <Route path='/project' element={ <ViewProject/>} > */}
                    {/* <Route path='/finalproject' element={ <FinalProject/>} /> */}
                    {/* <Route path='/changesupervisor' element={ <ChangeSupervisor />} /> */}
                    {/* <Route path='/editteammember' element={ <EditTeamMembers/>} /> */}
                    {/* </Route> */}
                    <Route path='/all-milestones' element={ <AllMilestones/>} />
                    <Route path='/milestone/:id' element={ <MilestoneDetail/>} />
                    <Route path='/create-milestone' element={ <CreateMilestone/>} />
                    <Route path='/all-notifications' element={ <AllNotifications/>} />
                    <Route path='/create-notification' element={ <CreateNotification/>} />
                    <Route path='/all-supervisors' element={ <AllSupervisors/>} />
                    <Route path='/add-supervisor' element={ <AddSupervisor/>} />
                    <Route path='/all-departments' element={ <AllDepartments />} />
                    <Route path='/all-students' element={<AllStudents/>} />
                    <Route path='/add-student' element={<AddStudents/>} />
                    <Route path='*' element={ <div>404 not found</div>} />
                    </Routes>

                </div>
            </BrowserRouter>
        </>
    )
}

export default DashboardMain