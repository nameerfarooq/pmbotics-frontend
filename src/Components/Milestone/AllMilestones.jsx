import React from 'react'
import Milestone from './Milestone'
import './milestone.css'
import '../Project/projects.css'
import { useNavigate } from 'react-router-dom'
function AllMilestones(props) {
    var UserRole = props.UserRole
    const navigate = useNavigate()
    const gotocreatemilestone = ()=>{
        navigate('/create-milestone')
    }
    return (
        <>
            <div className='ProjectHeader'>
                {
                    UserRole === "PanelMember"
                }
                <button className='New-Project-btn' onClick={()=>{gotocreatemilestone()}}>Create</button>
                <h2 className='ProjectHeading'>MILESTONES</h2>
            </div>
        <div className='MilestoneContainer'>
          
            <div className='MSHolder'>

                <Milestone details={
                    {
                        title: "Milestone1",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus in, reprehenderit pariatur nesciunt facere dolor ullam minima nulla sint, numquam necessitatibus vitae quas dolore unde dolorum! Minus, aperiam. Quod, totam."
                    }} />
                <Milestone details={
                    {
                        title: "Milestone2",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus in, reprehenderit pariatur nesciunt facere dolor ullam minima nulla sint, numquam necessitatibus vitae quas dolore unde dolorum! Minus, aperiam. Quod, totam."
                    }} />
                <Milestone details={
                    {
                        title: "Milestone3",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus in, reprehenderit pariatur nesciunt facere dolor ullam minima nulla sint, numquam necessitatibus vitae quas dolore unde dolorum! Minus, aperiam. Quod, totam."
                    }} />
                <Milestone details={
                    {
                        title: "Milestone4",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus in, reprehenderit pariatur nesciunt facere dolor ullam minima nulla sint, numquam necessitatibus vitae quas dolore unde dolorum! Minus, aperiam. Quod, totam."
                    }} />
            </div>
        </div>
        </>
    )
}

export default AllMilestones