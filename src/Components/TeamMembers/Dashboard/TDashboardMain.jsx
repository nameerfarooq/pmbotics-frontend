import React from 'react'
import Backlog from '../BacklogScreen/Backlog'
import FinalProjectSubmit from '../FinalProjectSubmit/FinalProjectSubmit'
import Grades from '../Grades/Grades'
import MyTasks from '../MyTasks/MyTasks'
// eslint-disable-next-line
import ProjectDetails from '../ProjectDetails/ProjectDetails'
// eslint-disable-next-line
import TAllsprints from '../Sprints/TAllsprints'
// eslint-disable-next-line
import TAllMilestones from '../TMilestones/TAllMilestones'
// eslint-disable-next-line
import TAllNotifications from '../TNotifications/TAllNotifications'


import './Tstyle.css'

function TDashboardMain(props) {
const UserRole = props.UserRole
    return (
        <div className='DashboardMain'>

            


            {/* <ProjectDetails /> */}

            <Backlog/>
            {/* <TAllNotifications/> */}
            {/* <MyTasks/> */}
            {/* <TAllMilestones /> */}


            {/* <TAllsprints UserRole={UserRole}/> */}

            {/* <FinalProjectSubmit/> */}
            {/* <Grades/> */}
        </div>
    )
}

export default TDashboardMain