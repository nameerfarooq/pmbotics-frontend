import React from 'react'
import '../../Dashboard/style.css'
import { NavLink, useNavigate } from 'react-router-dom'

function SupervisorSidebar() {
  const navigate = useNavigate();

  return (
    <aside sticky="top" className='Sidebar' >
      <a className='backButton' onClick={() => navigate(-1)}>
        <img alt='iconsimages' src={require('../../../Images/arrow (1).png')} className="Icons-EM" /> go back
      </a>

      <ul className='Sidebar-ul'>
        <li><NavLink to='/supervisor/'>Projects</NavLink></li>
        <li><NavLink to='/supervisor/all-milestones'>Milestones</NavLink></li>
        <li><NavLink to='/supervisor/sprint-management'>Sprint Management</NavLink></li>
        <li><NavLink to='/supervisor/task-management'>Task Management</NavLink></li>
        <li><NavLink to='/supervisor/all-notifications'>Announcements</NavLink></li>





      </ul>
    </aside>
  )
}

export default SupervisorSidebar