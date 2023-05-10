import { useState, useEffect } from "react";
import MyContext from "./MyContext";
import axios from "../axiosConfig";
const PMOProvider = (props) => {
    const [milestones, setMilestones] = useState([])
    const [accessTokenAvailable, setAccessTokenAvailable] = useState(false)
    const [accessToken] = useState(localStorage.getItem('access_token'))


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
    const state = { milestones, setMilestones, refreshmilestone }

    return (
        <MyContext.Provider value={state}>
            {props.children}
        </MyContext.Provider>
    )

}
export default PMOProvider