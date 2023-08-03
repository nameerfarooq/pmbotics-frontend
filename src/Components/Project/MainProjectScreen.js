import { useContext, useEffect, useState } from 'react'
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

  useEffect(() => {
    refreshProjects()
  }, [])

  const ClikedProject = (e) => {
    navigate(`/fyp_panel/project/${e}`)
  }

  // search 

  const [searchQuery, setSearchQuery] = useState("");
  const filteredProjects = projects ? projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  )
    :
    null;

  const CurrentProjects = filteredProjects?.filter((project) => project?.status === "ongoing")
  const PreviousProjects = filteredProjects?.filter((project) => project?.status === "completed")

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
              <div className="searchbar-container">
                <input type="text" placeholder='Search projects by title' className="searchbar" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

              </div>
              <br />
              <h3>On Going Projects</h3>
              <br />
              <div className="ProjectsHolder">

                {
                  CurrentProjects.length > 0 ?
                    CurrentProjects.map((project, Index) => (

                      <div className='project-cards-container' key={Index} onClick={() => { ClikedProject(project.id) }}>
                        <ProjectsCards details={project} />
                      </div>

                    ))
                    :
                    <h5>No Current projects to show</h5>}


              </div>
              <br />
              <h3>Previous Projects</h3>
              <br />
              <div className="ProjectsHolder">
                {
                  PreviousProjects.length > 0 ?
                    PreviousProjects.map((project, Index) => (
                      <div className='project-cards-container' key={Index} onClick={() => { ClikedProject(project.id) }}>
                        <ProjectsCards details={project} />
                      </div>
                    ))
                    :
                    <h5>No previous projects to show</h5>
                }


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