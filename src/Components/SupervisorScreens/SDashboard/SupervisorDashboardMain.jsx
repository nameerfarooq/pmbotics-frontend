import React from 'react'
import '../../Dashboard/style.css'
import SAllMilestones from '../SMilestones/SAllMilestones'
import SEditTeamMembers from '../SProject/SEditTeamMembers'
import SFinalProject from '../SProject/SFinalProject'
import SMainProjectScreen from '../SProject/SMainProjectScreen'
import SViewProject from '../SProject/SViewProject'
import Allsprints from '../Sprints/Allsprints'
import SAllNotifications from '../SNotifications/SAllNotifications'
import SCreateNotification from '../SNotifications/SCreateNotification'
import STeamMemberCard from '../SProject/STeamMemberCard'
import SViewTeamMember from '../SProject/SViewTeamMember'
import SBacklog from '../SBacklogScreen/SBacklog'
import CreateSprint from '../Sprints/CreateSprint'
import SupervisorSidebar from './SupervisorSidebar'
import { Route, Routes } from 'react-router-dom';
import SViewMilestone from '../SMilestones/SViewMilestone'
import TaskPage from '../Sprints/TaskManagement/TaskPage'

function SupervisorDashboardMain() {
  return (
    <>
      <SupervisorSidebar />
      <div className='DashboardMain'>
        <Routes>
          <Route path='/' element={<SMainProjectScreen />} />
          <Route path='/view-project/:id' element={<SViewProject />} />

          <Route path='/view-team-members' element={<SViewTeamMember />} />
          <Route path='/edit-team-member' element={<SEditTeamMembers />} />

          <Route path='/all-milestones' element={<SAllMilestones />} />
          <Route path='/view-milestone/:id' element={<SViewMilestone />} />

          <Route path='/all-sprints/:id' element={<Allsprints />} />
          <Route path='/create-sprint' element={<CreateSprint />} />

          <Route path='/task-management' element={<TaskPage />} />
          <Route path='/all-notifications' element={<SAllNotifications />} />
          <Route path='/create-notification' element={<SCreateNotification />} />

          <Route path='/view-backlog/:id' element={<SBacklog />} />
        </Routes>






      </div>
    </>
  )
}

export default SupervisorDashboardMain