import React from 'react'
import Sprint from './Sprint.jsx'
import './sprints.css'
import '../../Project/projects.css'
function Allsprints(props) {

    return (
        <>
            <div className='ProjectHeader'>


                <button className='New-Project-btn'>Create</button>



                <h2 className='ProjectHeading'>Sprints</h2>
            </div>
            <div className='MilestoneContainer'>

                <div className='MSHolder'>

                    <Sprint details={
                        {
                            title: "Sprint 1",
                            tasks: 'todo',
                            deadline: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus in, reprehenderit pariatur nesciunt facere dolor ullam minima nulla sint, numquam necessitatibus vitae quas dolore unde dolorum! Minus, aperiam. Quod, totam."
                        }} />
                    <Sprint details={
                        {
                            title: "Sprint 2",
                            tasks: 'progress',
                            deadline: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus in, reprehenderit pariatur nesciunt facere dolor ullam minima nulla sint, numquam necessitatibus vitae quas dolore unde dolorum! Minus, aperiam. Quod, totam."
                        }} />
                    <Sprint details={
                        {
                            title: "Sprint 3",
                            tasks: 'testing',
                            deadline: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus in, reprehenderit pariatur nesciunt facere dolor ullam minima nulla sint, numquam necessitatibus vitae quas dolore unde dolorum! Minus, aperiam. Quod, totam."
                        }} />

                </div>
            </div>
        </>
    )
}

export default Allsprints