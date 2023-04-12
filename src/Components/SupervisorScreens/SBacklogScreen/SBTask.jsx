import React from 'react'
import './SBacklog.css'
function SBTask(props) {
    const [TaskTitle, AssignedTo, ColorTheme] = props.details
    return (
        <div className={`backlogTasks ${ColorTheme}`}>
            <p className='backlogtasktitle'>
                {TaskTitle}
            </p>
            <p className='backlogtasktitle2'>
                Assigned to
            </p>
            <span className='backlogtasktitle3'>
                {AssignedTo}
            </span>
        </div>
    )
}

export default SBTask