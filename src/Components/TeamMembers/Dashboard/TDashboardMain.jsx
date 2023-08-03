import React from 'react'
import Backlog from '../BacklogScreen/Backlog'
import FinalProjectSubmit from '../FinalProjectSubmit/FinalProjectSubmit'
import Grades from '../Grades/Grades'
import MyTasks from '../MyTasks/MyTasks'
// eslint-disable-next-line
import ProjectDetails from '../ProjectDetails/ProjectDetails'
// eslint-disable-next-line
import TAllsprints from '../Sprints/TAllsprints'
// eslint-disable-next-line
import TAllMilestones from '../TMilestones/TAllMilestones'
// eslint-disable-next-line
import TAllNotifications from '../TNotifications/TAllNotifications'
import { useState, useEffect } from 'react'
import axios from '../../../axiosConfig'
import './Tstyle.css'
import { Route, Routes } from 'react-router-dom'
import AllTask from '../AllTask/AllTask'
import TViewMilestone from '../TMilestones/TViewMilestone'

function TDashboardMain(props) {

    const [projectId, setprojectId] = useState('')
    const [projectStatus, setprojectStatus] = useState('')
    useEffect(() => {
        FindMyProject()
    }, []);


    const FindMyProject = async () => {
        await axios.get(`projectlist`)
            .then((res) => {
                console.log(res, "ppp")
                if (res.data.status == 200) {
                    setprojectId(res.data.data.id)
                    setprojectStatus(res.data.data.status)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }






    return (
        <div className='DashboardMain'>

            <Routes>

                <Route path='/' element={<ProjectDetails projectId={projectId} />} />
                <Route path='/Milestones' element={<TAllMilestones projectId={projectId} />} />
                <Route path='/milestone/:id' element={<TViewMilestone projectStatus={projectStatus}  projectId={projectId} />} />
                <Route path='/all-task' element={<AllTask projectId={projectId} />} />
                <Route path='/announcements' element={<TAllNotifications />} />
                <Route path='/my-task' element={<MyTasks projectStatus={projectStatus}  projectId={projectId} />} />

            </Routes>
        </div>
    )
}

export default TDashboardMain