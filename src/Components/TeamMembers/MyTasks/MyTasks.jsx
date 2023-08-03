import React from 'react'
import './MyTasks.css'
import Backlog from '../BacklogScreen/Backlog'
function MyTasks({ projectStatus,projectId }) {
  return (
    <div className='MainDiv'>
      <Backlog projectStatus={projectStatus} projectId={projectId} />
    </div>
  )
}

export default MyTasks