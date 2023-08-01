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

                            <div className='BacklogArea'>


                                <div className='BacklogLane'>
                                    <h3 className='HeadingBacklog Yellow'>
                                        Todo
                                    </h3>

                                    <div className='BacklogStream'>




                                        {tickets?.todo.map((todo, Index) => (
                                            // <div key={Index} className={`backlogTasks ${tickets.todo ? 'Yellow' : ''}`}>
                                            //     <p>
                                            //         {todo.ticket_name}
                                            //     </p>
                                            //     <p className='board-ticket-p2'>
                                            //         <b> Created by </b>{todo.creator_name.length > 7 ? todo.creator_name.slice(0, 7) + '...' : todo.creator_name}
                                            //     </p>
                                            //     <p className='board-ticket-p2'>
                                            //         <b> Assigned to </b>{todo.assignee_name.length > 7 ? todo.assignee_name.slice(0, 7) + '...' : todo.assignee_name}
                                            //     </p>

                                            // </div>
                                            <SBTask key={Index} details={[todo.ticket_name, todo.assignee_name, "Yellow"]} />
                                            // <SBTask details={["Documentation", "Ushna Karim", "Yellow"]} />
                                        ))}
                                        {/* <SBTask details={["UI/UX", "Ushna Karim", "Yellow"]} />
                                        <SBTask details={["Frontend", "Muhammad Nameer", "Yellow"]} /> */}


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
                    <h1>a</h1>
            }
        </>
    )
}

export default SBacklog