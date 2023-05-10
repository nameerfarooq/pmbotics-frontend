import React from 'react'
import '../Dashboard/style.css'
import { useContext } from 'react'
import MyContext from '../../Context/MyContext'
function ProjectsCards(props) {
  const project = props.details
  const { supervisors } = useContext(MyContext)
  const filteredSupervisor = supervisors.filter(supervisor => supervisor.id == project.supervisor);
  const mySupervisor = filteredSupervisor[0]
  console.log('oho', mySupervisor)
  return (
    <>
      {project && mySupervisor ?

        <div className='ProjectsCards'>
          <p className='PNo'>{project.batch}</p>
          <h3 className='PTitle'>{project.title}</h3>
          <p className='PDesc'>{project.description}</p>
          <p className='PSup'>Supervisor: <span className='Ps2'>{mySupervisor.name}</span></p>
        </div>
        :
        null}
    </>
  )
}

export default ProjectsCards