import React from 'react';
import './style.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  return (
    <aside sticky="top" className='Sidebar' >
      <h2>UIT University</h2>

      <ul className='Sidebar-ul'>
        <li><NavLink to='/'>Projects</NavLink></li>
        <li><NavLink to='/all-milestones'>Milestones</NavLink></li>
        <li><NavLink to='/all-notifications'>Notifications</NavLink></li>
        <li><NavLink to='/all-supervisors'>Supervisors</NavLink></li>
        <li><NavLink to='/all-students'>Students</NavLink></li>
        <li><NavLink to='/all-departments'>Departments</NavLink></li>

      </ul>
    </aside>
  );
}

export default Sidebar;
