import { useEffect, useState } from 'react'
// import '../Dashboard/style.css'
import '../../Project/projects.css'
import SProjectsCards from './SProjectsCards'
import { useNavigate } from 'react-router-dom'
import axios from '../../../axiosConfig'


function SMainProjectScreen() {



    const navigate = useNavigate()



    const [projects, setProjects] = useState('')
    const getAllProjects = async () => {
        await axios.get('projectlist')
            .then((res) => {
                if (res.data.message === "Success") {
                    setProjects(res.data.data)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getAllProjects()
    }, [])

    const ClikedProject = (e) => {
        navigate(`/supervisor/view-project/${e}`)
    }

    // search 

    const [searchQuery, setSearchQuery] = useState("");
    const filteredProjects = projects ? projects.filter((project) =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
        :
        null;
    return (
        <>

            <div className='MainProjectScreen'>
                <div className='ProjectHeader'>
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

                                {filteredProjects.map((project, Index) => (
                                    project.status === 'ongoing' ?
                                        <div className='project-cards-container' key={Index} onClick={() => { ClikedProject(project.id) }}>
                                            <SProjectsCards key={'card'+Index} details={project} />
                                        </div>
                                        :
                                        <p key={'card'+Index}>No projects to display</p>
                                ))}


                            </div>
                            <br />
                            <h3>Previous Projects</h3>
                            <br />
                            <div className="ProjectsHolder">
                                {filteredProjects.map((project, Index) => (
                                    project.status === 'completed' ?
                                        <div className='project-cards-container' key={Index} onClick={() => { ClikedProject(project.id) }}>
                                            <SProjectsCards key={'card'+Index} details={project} />
                                        </div>
                                        :
                                        <p key={'card'+Index}>No projects to display</p>
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

export default SMainProjectScreen