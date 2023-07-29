import React from 'react';
import './style.css'
import { NavLink, useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside sticky="top" className='Sidebar' >

      <a className='backButton' onClick={() => navigate(-1)}>
        <img alt='iconsimages' src={require('../../Images/arrow (1).png')} className="Icons-EM" /> go back
      </a>

      <ul className='Sidebar-ul'>
        <li><NavLink to='/fyp_panel/'>Projects</NavLink></li>
        <li><NavLink to='/fyp_panel/all-milestones'>Milestones</NavLink></li>
        <li><NavLink to='/fyp_panel/all-notifications'>Notifications</NavLink></li>
        <li><NavLink to='/fyp_panel/all-supervisors'>Supervisors</NavLink></li>
        <li><NavLink to='/fyp_panel/all-students'>Students</NavLink></li>
        <li><NavLink to='/fyp_panel/all-departments'>Departments</NavLink></li>

      </ul>
    </aside>
  );
}

export default Sidebar;
