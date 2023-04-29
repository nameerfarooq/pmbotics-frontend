import React from 'react'

function Milestone(props) {
    const {milestone_name, milestone_details, id} = props.details
    const viewMilestone = props.viewMilestone
    return (
        <div className='MS-Card'>
            <h2 className='MS-Card-heading'>
                {milestone_name}
            </h2>
            <p className='MS-Card-para'>
                {milestone_details}
            </p>
            <div className='MS-Card-btns'>
                
                <button className='MS-Card-btn2'onClick={()=>viewMilestone(id)} >
                    View
                </button>
            </div>
        </div>
    )
}

export default Milestone