import React, { useContext, useState, useEffect } from 'react'
import Milestone from '../../Milestone/Milestone'
import './milestone.css'
// import '../Project/projects.css'
import { useNavigate } from 'react-router-dom'
import MyContext from '../../../Context/MyContext'
import axios from '../../../axiosConfig'
function SAllMilestones() {

    const [milestones, setMilestones] = useState('')

    // navigation for create milestone screen
    const navigate = useNavigate()
    // const gotocreatemilestone = () => {
    //     navigate('/fyp_panel/create-milestone')
    // }


const getAllMilestones = async ()=>{
    await axios.get('getallmilestone')
    .then((res)=>{
        if(res.data.message){
            setMilestones(res.data.body)
        }
    })
}
useEffect(() => {
  getAllMilestones()
}, [])


    const viewMilestone = (e) => {

        navigate(`/supervisor/view-milestone/${e}`)
    }


    return (
        <>
            <div className='ProjectHeader'>

                <h2 className='ProjectHeading'>MILESTONES</h2>
            </div>
            <div className='MilestoneContainer'>

                <div className='MSHolder'>

                    {
                        milestones? 
                        milestones.map((milestone) => (
                            <Milestone
                                key={milestone.id}
                                details={milestone}
                                viewMilestone={viewMilestone}
                            />
                        ))
                        :
                        null
                    }


                </div>
            </div>
        </>
    )
}

export default SAllMilestones