import React from 'react'
import './SBacklog.css'
import SBTask from './SBTask'
import axios from '../../../axiosConfig'
import { useState, useEffect, useParams } from 'react'
function SBacklog(props) {
    const id = props.id
    const [tickets, setTickets] = useState([])

    const getAlltickets = async () => {
        const response = await axios.get(`getspecificticket?pro_id=${id}`)
            .then((res) => {
                if (res.data.message == "Success") {
                    console.log(res, "Mubaraka")
                    setTickets(res.data.data)
                }
            })
            .then((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getAlltickets()

    }, [])
    return (
        <>
            {
                tickets.todo?.length > 0 || tickets.inprogress?.length > 0 || tickets.review?.length > 0 || tickets.completed?.length > 0 ?
                    (
                        <div className='MainDiv'>
                            <div className='download-task-log-btn'>
                                <a href={`https://usamaali.pythonanywhere.com/ticketlog?id=${id}`}>
                                    <button className='btn'>Download Tasks Log</button>
                                </a>
                            </div>
                            <div className='BacklogArea'>


                                <div className='BacklogLane'>
                                    <h3 className='HeadingBacklog Yellow'>
                                        Todo
                                    </h3>

                                    <div className='BacklogStream'>




                                        {tickets?.todo.map((todo, Index) => (
                                            <SBTask key={Index} details={[todo.ticket_name, todo.assignee_name, "Yellow"]} />
                                        ))}

                                    </div>
                                </div>






                                <div className='BacklogLane'>
                                    <h3 className='HeadingBacklog Pink'>
                                        In Progress
                                    </h3>
                                    <div className='BacklogStream'>
                                        {tickets?.inprogress.map((todo, Index) => (

                                            <SBTask key={Index} details={[todo.ticket_name, todo.assignee_name, "Pink"]} />
                                        ))}

                                    </div>
                                </div>










                                <div className='BacklogLane'>
                                    <h3 className='HeadingBacklog Blue'>
                                        Review
                                    </h3>
                                    <div className='BacklogStream'>
                                        {tickets?.review.map((todo, Index) => (

                                            <SBTask key={Index} details={[todo.ticket_name, todo.assignee_name, "Blue"]} />
                                        ))}

                                    </div>
                                </div>






                                <div className='BacklogLane'>
                                    <h3 className='HeadingBacklog Green' >
                                        Completed !
                                    </h3>
                                    <div className='BacklogStream'>

                                        {tickets?.completed.map((todo, Index) => (

                                            <SBTask key={Index} details={[todo.ticket_name, todo.assignee_name, "Green"]} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    <h5>This Project Doesnt have any tasks created till now.</h5>
            }
        </>
    )
}

export default SBacklog