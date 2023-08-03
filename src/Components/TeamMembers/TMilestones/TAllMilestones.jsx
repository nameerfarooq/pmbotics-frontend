// import { useState, useEffect } from 'react'
// import TMilestone from './TMilestone'
// import './Tmilestone.css'
// import '../../Project/projects.css'
// import axios from '../../../axiosConfig'
// function TAllMilestones() {

//     const [milestones, setmilestones] = useState([])

//     const getAllMilestones = async () => {
//         const response = await axios.get(`getallmilestone`)
//             .then((res) => {
//                 if (res.data.status == 200) {
//                     console.log(res, "Mubaraka")
//                     setmilestones(res.data.data)
//                 }
//             })
//             .then((err) => {
//                 console.log(err)
//             })
//     }
//     useEffect(() => {
//         getAllMilestones()
//     }, [])
//     return (
//         <>
//             <div className='ProjectHeader'>


//                 <h2 className='ProjectHeading'>MILESTONES</h2>


//             </div>


//             <div className='MilestoneContainer'>

//                 <div className='MSHolder'>
//                     {
//                         milestones?.length > 0 ?
//                             milestones.map((milestone) => (
//                                 <TMilestone details={
//                                     {
//                                         title: milestone.milestone_name,
//                                         title: milestone.milestone_details,
//                                         title: milestone.document_submission_date,
//                                         title: milestone.milestone_defending_date,
//                                         title: milestone.milestone_defending_date,
//                                         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus in, reprehenderit pariatur nesciunt facere dolor ullam minima nulla sint, numquam necessitatibus vitae quas dolore unde dolorum! Minus, aperiam. Quod, totam."
//                                     }} />

//                             ))

//                             :
//                             <p>No Milestones created yet</p>
//                     }

//                 </div>
//             </div>
//         </>
//     )
// }

// export default TAllMilestones
import React, { useContext, useState, useEffect } from 'react'
import Milestone from '../../Milestone/Milestone'
import '../../Milestone/milestone.css'
import '../../Project/projects.css'
import { useNavigate } from 'react-router-dom'
import axios from '../../../axiosConfig'
function TAllMilestones(props) {

    const [milestones, setMilestones] = useState([])

    // navigation for create milestone screen
    const navigate = useNavigate()
  
    const viewMilestone = (e) => {

        navigate(`/student/milestone/${e}`)
    }

    const getAllMilestones = async () => {
        await axios.get('getallmilestone')
            .then((res) => {
                if (res.data.message) {
                    console.log(res, "reds")
                    setMilestones(res.data.body)
                }
            })
    }
    useEffect(() => {
        getAllMilestones()
    }, [])
    return (
        <>
            <div className='ProjectHeader'>

                <h2 className='ProjectHeading'>MILESTONES</h2>
            </div>
            <div className='MilestoneContainer'>

                <div className='MSHolder'>

                    {
                        milestones.map((milestone) => (
                            <Milestone
                                key={milestone.id}
                                details={milestone}
                                viewMilestone={viewMilestone}
                            />
                        ))
                    }


                </div>
            </div>
        </>
    )
}

export default TAllMilestones