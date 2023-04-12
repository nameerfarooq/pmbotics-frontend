import React from 'react';
import'./Tstyle.css'

const TSidebar = () => {
  
  return (
    <aside sticky="top" className='Sidebar' >
      <h2>Dashboard</h2>
     
      <ul className='Sidebar-ul'>
      
        <li>Project details</li>
        <li>Backlogs</li>
        <li>Notifications</li>
        <li>My tasks</li>
        <li>Milestones</li>
        <li>Final Submission</li>
        <li>Grades</li>
    
       
      </ul>
    </aside>
  );
}

export default TSidebar;
