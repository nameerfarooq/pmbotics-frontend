import React from 'react'
import TMilestone from './TMilestone'
import './Tmilestone.css'
import '../../Project/projects.css'
function TAllMilestones(props) {
    var UserRole = props.UserRole
    return (
        <>
            <div className='ProjectHeader'>


                <h2 className='ProjectHeading'>MILESTONES</h2>


            </div>

            
            <div className='MilestoneContainer'>

                <div className='MSHolder'>

                    <TMilestone details={
                        {
                            title: "Milestone1",
                            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus in, reprehenderit pariatur nesciunt facere dolor ullam minima nulla sint, numquam necessitatibus vitae quas dolore unde dolorum! Minus, aperiam. Quod, totam."
                        }} />
                    <TMilestone details={
                        {
                            title: "Milestone2",
                            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus in, reprehenderit pariatur nesciunt facere dolor ullam minima nulla sint, numquam necessitatibus vitae quas dolore unde dolorum! Minus, aperiam. Quod, totam."
                        }} />
                    <TMilestone details={
                        {
                            title: "Milestone3",
                            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus in, reprehenderit pariatur nesciunt facere dolor ullam minima nulla sint, numquam necessitatibus vitae quas dolore unde dolorum! Minus, aperiam. Quod, totam."
                        }} />
                    <TMilestone details={
                        {
                            title: "Milestone4",
                            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus in, reprehenderit pariatur nesciunt facere dolor ullam minima nulla sint, numquam necessitatibus vitae quas dolore unde dolorum! Minus, aperiam. Quod, totam."
                        }} />
                </div>
            </div>
        </>
    )
}

export default TAllMilestones