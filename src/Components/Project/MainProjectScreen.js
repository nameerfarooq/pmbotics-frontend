import { useContext, useEffect } from 'react'
// import '../Dashboard/style.css'
import './projects.css'
import ProjectsCards from './ProjectsCards.jsx'
import { useNavigate } from 'react-router-dom'
import MyContext from '../../Context/MyContext'


function MainProjectScreen() {



  const navigate = useNavigate()
  const gotocreateproject = () => {
    navigate('/fyp_panel/create-project')
  }


  const { projects, refreshProjects } = useContext(MyContext)
  console.log(projects)

  useEffect(() => {
    refreshProjects()
  }, [])

  const ClikedProject = (e) => {
    navigate(`/fyp_panel/project/${e}`)
  }


  return (
    <>

      <div className='MainProjectScreen'>
        <div className='ProjectHeader'>
          <button className='New-Project-btn' onClick={() => { gotocreateproject() }}>Create</button>
          <h2 className='ProjectHeading'>PROJECTS</h2>
        </div>
        {
          projects ?
            <div className='projectSection1'>
              <br />
              <h3>On Going Projects</h3>
              <br />
              <div className="ProjectsHolder">

                {projects.map((project, Index) => (
                  project.status === 'ongoing' ?
                    <div key={Index} onClick={() => { ClikedProject(project.id) }}>
                      <ProjectsCards details={project} />
                    </div>
                    :
                    null
                ))}


              </div>
              <br />
              <h3>Previous Projects</h3>
              <br />
              <div className="ProjectsHolder">
                {projects.map((project, Index) => (
                  project.status === 'completed' ?
                    <div key={Index} onClick={() => { ClikedProject(project.id) }}>
                      <ProjectsCards details={project} />
                    </div>
                    :
                    null
                ))}


              </div>
            </div>
            :
            <p>
              Loading
            </p>
        }
      </div>

    </>
  )
}

export default MainProjectScreen