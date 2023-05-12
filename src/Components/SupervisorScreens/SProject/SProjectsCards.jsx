import React from 'react'
import '../../Dashboard/style.css'
function SProjectsCards(props) {
  const project = props.details
  
  
  return (
    <>
      {project ?

        <div className='ProjectsCards'>
          <p className='PNo'>{project.batch}</p>
          <h3 className='PTitle'>{project.title.length > 18 ? project.title.slice(0,18)+'...' : project.title}</h3>
          <p className='PDesc'>{project.description.length > 75 ? project.description.slice(0,75)+'...' : project.description}</p>
        </div>
        :
        null}
    </>
  )
}

export default SProjectsCards