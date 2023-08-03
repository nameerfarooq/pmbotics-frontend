import React from 'react';
import './Tstyle.css'
import { NavLink, useNavigate } from 'react-router-dom'

const TSidebar = () => {
  const navigate = useNavigate();
  return (
    <aside sticky="top" className='Sidebar' >
      <a className='backButton' onClick={() => navigate(-1)}>
        <img alt='iconsimages' src={require('../../../Images/arrow (1).png')} className="Icons-EM" /> go back
      </a>

      <ul className='Sidebar-ul'>
        <li><NavLink to='/student/'>Project details</NavLink></li>
        <li><NavLink to='/student/my-task'>My tasks</NavLink></li>
        <li><NavLink to='/student/all-task'>All Task</NavLink></li>
        <li><NavLink to='/student/announcements'>Announcements</NavLink></li>
        <li><NavLink to='/student/Milestones'>Milestones</NavLink></li>
      </ul>
    </aside>
  );
}

export default TSidebar;
