import React from 'react'
import STeamMemberCard from './STeamMemberCard'

function SViewTeamMember() {
  return (
    <div className='TeamMembercardsholder'>
        <STeamMemberCard details={{
            MemberName:'Muhammad Nameer',
            Due: 8,
            Done: 23
        }}/>
        <STeamMemberCard details={{
            MemberName:'Ushna Karim',
            Due: 8,
            Done: 23
        }}/>
        <STeamMemberCard details={{
            MemberName:'Usama Ali',
            Due: 8,
            Done: 23
        }}/>
    </div>
  )
}

export default SViewTeamMember