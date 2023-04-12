import React from 'react'
import TSprint from './TSprint.jsx'
import './Tsprints.css'
import '../../Project/projects.css'
function TAllsprints(props) {
    const UserRole = props.UserRole
    
    return (
        <>
            <div className='ProjectHeader'>
              
                <h2 className='ProjectHeading'>Sprints</h2>
            </div>
        <div className='MilestoneContainer'>
          
            <div className='MSHolder'>

              <TSprint UserRole={UserRole} details={
                    {
                        title: "Sprint 1",
                        tasks : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus in, reprehenderit pariatur nesciunt facere dolor ullam minima nulla sint, numquam necessitatibus vitae quas dolore unde dolorum! Minus, aperiam. Quod, totam.',
                        deadline: 'Monday, 11:59 PM'}} />
              <TSprint UserRole={UserRole} details={
                    {
                        title: "Sprint 2",
                        tasks : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus in, reprehenderit pariatur nesciunt facere dolor ullam minima nulla sint, numquam necessitatibus vitae quas dolore unde dolorum! Minus, aperiam. Quod, totam.',
                        deadline: 'Monday, 11:59 PM'}} />
              <TSprint UserRole={UserRole} details={
                    {
                        title: "Sprint 3",
                        tasks : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus in, reprehenderit pariatur nesciunt facere dolor ullam minima nulla sint, numquam necessitatibus vitae quas dolore unde dolorum! Minus, aperiam. Quod, totam.',
                        deadline: 'Monday, 11:59 PM' }} />
              
            </div>
        </div>
        </>
    )
}

export default TAllsprints