import React from 'react'
import './MyTasks.css'
import Backlog from '../BacklogScreen/Backlog'
function MyTasks({ projectId }) {
  return (
    <div className='MainDiv'>
      <Backlog projectId={projectId} />
    </div>
  )
}

export default MyTasks