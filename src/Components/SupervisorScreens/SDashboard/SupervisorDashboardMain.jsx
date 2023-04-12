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
function SupervisorDashboardMain() {
  return (
    <div className='DashboardMain'>
      {/* <SMainProjectScreen/> */}
      {/* <SViewProject/> */}
      {/* <SFinalProject/> */}
      {/* <SViewTeamMember/> */}
      {/* <SEditTeamMembers/> */}
      {/* <SAllMilestones/> */}
      {/* <Allsprints/> */}
      {/* <CreateSprint/>/ */}
      {/* <SAllNotifications/> */}
      {/* <SCreateNotification/> */}
      <SBacklog />




    </div>
  )
}

export default SupervisorDashboardMain