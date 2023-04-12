import React from 'react'
import '../../Dashboard/style.css'
function SupervisorSidebar() {
  return (
    <aside sticky="top" className='Sidebar' >
      <h2>Dashboard</h2>
     
      <ul className='Sidebar-ul'>
      
        <li>Projects</li>
        <li>Milestones</li>
        <li>Notifications</li>
        
    
       
      </ul>
    </aside>
  )
}

export default SupervisorSidebar