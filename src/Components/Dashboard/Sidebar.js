import React from 'react';
import './style.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  return (
    <aside sticky="top" className='Sidebar' >
      <h2>UIT University</h2>

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
