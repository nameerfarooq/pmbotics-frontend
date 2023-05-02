import { useState, useEffect } from "react";
import MyContext from "./MyContext";
import axios from "../axiosConfig";
const PMOProvider = (props) => {
    const [milestones, setMilestones] = useState([])
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
        getAllMilestones()
    }, [])
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