import { useState, useEffect } from "react";
import MyContext from "./MyContext";
import axios from "../axiosConfig";
const PMOProvider = (props) => {
    const [milestones, setMilestones] = useState([])
    const [accessTokenAvailable, setAccessTokenAvailable] = useState(false)
    const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token'))


    const getAllMilestones = async () => {
        await axios.get('allmilestone')
            .then((res) => {
                console.log(res.data.data)
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
            console.log("yeh status hai acess token available ka",accessTokenAvailable)
            console.log("yeh status hai acess token  ka",accessToken)
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