import React from 'react'
import '../Dashboard/style.css'
import { useContext } from 'react'
import MyContext from '../../Context/MyContext'
function ProjectsCards(props) {
  const project = props.details
  const { supervisors } = useContext(MyContext)
  const filteredSupervisor = supervisors ? supervisors.filter(supervisor => supervisor.id == project.supervisor) : null;
  const mySupervisor = filteredSupervisor ? filteredSupervisor[0] : null;
  return (
    <>
      {project && mySupervisor ?

        <div className='ProjectsCards'>
          <p className='PNo'>{project.batch}</p>
          <h3 className='PTitle'>{project.title.length > 15 ? project.title.slice(0,15)+'...' : project.title}</h3>
          <p className='PDesc'>{project.description.length > 75 ? project.description.slice(0,75)+'...' : project.description}</p>
          <p className='PSup'>Supervisor: <span className='Ps2'>{mySupervisor.name.length > 12 ? mySupervisor.name.slice(0,12)+'...' : mySupervisor.name}</span></p>
        </div>
        :
        null}
    </>
  )
}

export default ProjectsCards