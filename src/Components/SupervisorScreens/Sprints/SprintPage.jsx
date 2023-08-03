import './TaskManagement/Task.css'
import { useState, useEffect } from 'react'
import axios from '../../../axiosConfig'
import SprintInner from './SprintInner'
const SprintPage = () => {
    const [selectedTab, setSelectedTab] = useState(0)
    const [myProjects, setmyProjects] = useState([])



    // API INTEGRATIONS

    const getmyProjects = async () => {
        await axios.get('projectlist')
            .then((res) => {
                console.log("my all projects are", res)
                if (res.data.status === 200) {
                    let allProjects = res.data.data
                    let currentProjects = allProjects.filter((project) => project.status === "ongoing")
                    setmyProjects(currentProjects)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getmyProjects()

    }, [])

    useEffect(() => {
        setSelectedTab(myProjects[0]?.id)
    }, [myProjects])






    return (
        <div className='TaskPageMain'>
            <div className='Tabs-holder'>
                {myProjects.length > 0 ?
                    myProjects.map((project) => (
                        <>
                            <div onClick={() => setSelectedTab(project.id)} className={`tabsForTask ${selectedTab === project.id && "activeTab"}`}>
                                {project.title.length > 20 ? `${(project.title).slice(0, 20)}...` : project.title}
                            </div>
                        </>
                    ))
                    :
                    <h2>You are not assigned in any ongoing project</h2>
                }



            </div>
            {myProjects.length > 0 &&
                <div className="tasksInner">
                    <SprintInner projectId={selectedTab} />
                </div>
            }
        </div>
    )
}

export default SprintPage