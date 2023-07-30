import { useState, useEffect } from "react";
import MyContext from "./MyContext";
import axios from "../axiosConfig";
const PMOProvider = (props) => {
    const [milestones, setMilestones] = useState([])
    const [accessTokenAvailable, setAccessTokenAvailable] = useState(false)
    const [accessToken] = useState(localStorage.getItem('access_token'))
    const [supervisors, setSupervisors] = useState('')
    const [fypPanel, setFypPanel] = useState('')
    const [projects, setProjects] = useState('')
    const refreshProjects = () => {
        getAllProjects()
    }
    const refreshSupervisors = () => {
        getAllSupervisors()
    }
    const getAllProjects = async () => {
        await axios.get('projects')
            .then((res) => {
                if (res.data.message === "Success") {
                    setProjects(res.data.body)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }



    const getAllSupervisors = async () => {
        await axios.get('alluser/?role=supervisor')
            .then((res) => {
                if (res.data.message === "Success") {
                    setSupervisors(res.data.data)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const getAllFYPPanel = async () => {
        await axios.get(`allfyppanel?dep_id=${localStorage.getItem('departmentId')}`)
            .then((res) => {
                if (res.data.message === "Success") {
                    setFypPanel(res.data.data)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getAllMilestones = async () => {
        await axios.get('allmilestone')
            .then((res) => {
                if (res.data.message === "Success") {
                    setMilestones(res.data.data)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        if (accessTokenAvailable && accessToken) {
            getAllMilestones()
            getAllSupervisors()
            getAllProjects()
            getAllFYPPanel()
        }
    }, [accessToken, accessTokenAvailable])

    useEffect(() => {
        if (accessToken) {
            setAccessTokenAvailable(true)
        }
    }, [accessToken])

    const refreshmilestone = () => {
        getAllMilestones()
    }
    const refreshfypPanel = () => {
        getAllFYPPanel()
    }
    const state = { fypPanel, refreshfypPanel, milestones, setMilestones, refreshmilestone, supervisors, projects, refreshProjects, refreshSupervisors }

    return (
        <MyContext.Provider value={state}>
            {props.children}
        </MyContext.Provider>
    )

}
export default PMOProvider