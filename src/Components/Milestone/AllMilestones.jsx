import React, { useContext } from 'react'
import Milestone from './Milestone'
import './milestone.css'
import '../Project/projects.css'
import { useNavigate } from 'react-router-dom'
import MyContext from '../../Context/MyContext'
function AllMilestones(props) {
    var UserRole = props.UserRole
    
    const {milestones} = useContext(MyContext)
    
    // navigation for create milestone screen
    const navigate = useNavigate()
    const gotocreatemilestone = () => {
        navigate('/create-milestone')
    }


    

    
    const viewMilestone = (e) => {

        navigate(`/milestone/${e}`)
    }


    return (
        <>
            <div className='ProjectHeader'>
                {
                    UserRole === "PanelMember"
                }
                <button className='New-Project-btn' onClick={() => { gotocreatemilestone() }}>Create</button>
                <h2 className='ProjectHeading'>MILESTONES</h2>
            </div>
            <div className='MilestoneContainer'>

                <div className='MSHolder'>

                    {
                        milestones.map((milestone) => (
                            <Milestone
                                key={milestone.id}
                                details={milestone}
                                viewMilestone={viewMilestone}
                            />
                        ))
                    }


                </div>
            </div>
        </>
    )
}

export default AllMilestones