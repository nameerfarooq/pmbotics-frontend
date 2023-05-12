import React from 'react'
import axios from '../../axiosConfig'
import { useState, useEffect } from 'react'
function PMOBoard(props) {
    const id = props.id
    const [tickets, setTickets] = useState('')

    const getAlltickets = async () => {
        const response = await axios.get(`allticket?pro_id=${id}`)
            .then((res) => {
                if (res.data.message == "Success") {
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
            {tickets.todo?.length>0 || tickets.inprogress?.length>0 || tickets.review?.length>0 || tickets.completed?.length>0 ?

                <div className='MainDiv'>

                    <div className='BacklogArea'>




                        <div className='BacklogLane'>
                            <h3 className='HeadingBacklog Yellow'>
                                Todo
                            </h3>
                            <div className='BacklogStream'>
                                {tickets?.todo.map((todo, Index) => (
                                    <div key={Index} className={`backlogTasks ${tickets.todo ? 'Yellow' : ''}`}>
                                        <p>
                                            {todo.ticket_name}
                                        </p>
                                        <p className='board-ticket-p2'>
                                            <b> Created by </b>{todo.creator_name.length > 7 ? todo.creator_name.slice(0, 7) + '...' : todo.creator_name}
                                        </p>
                                        <p className='board-ticket-p2'>
                                            <b> Assigned to </b>{todo.assignee_name.length > 7 ? todo.assignee_name.slice(0, 7) + '...' : todo.assignee_name}
                                        </p>

                                    </div>
                                ))}


                            </div>
                        </div>






                        <div className='BacklogLane'>
                            <h3 className='HeadingBacklog Pink'>
                                Progress
                            </h3>
                            <div className='BacklogStream'>

                                {tickets?.inprogress.map((inprogress, Index) => (
                                    <div key={Index} className={`backlogTasks ${tickets.inprogress ? 'Pink' : ''}`}>
                                    <p>
                                        {inprogress.ticket_name}
                                    </p>
                                    <p className='board-ticket-p2'>
                                        <b> Created by </b>{inprogress.creator_name.length > 7 ? inprogress.creator_name.slice(0, 7) + '...' : inprogress.creator_name}
                                    </p>
                                    <p className='board-ticket-p2'>
                                        <b> Assigned to </b>{inprogress.assignee_name.length > 7 ? inprogress.assignee_name.slice(0, 7) + '...' : inprogress.assignee_name}
                                    </p>

                                </div>
                                ))}

                            </div>
                        </div>










                        <div className='BacklogLane'>
                            <h3 className='HeadingBacklog Blue'>
                                Review
                            </h3>
                            <div className='BacklogStream'>

                                {tickets?.review.map((review, Index) => (
                                   <div key={Index} className={`backlogTasks ${tickets.review ? 'Blue' : ''}`}>
                                   <p>
                                       {review.ticket_name}
                                   </p>
                                   <p className='board-ticket-p2'>
                                       <b> Created by </b>{review.creator_name.length > 7 ? review.creator_name.slice(0, 7) + '...' : review.creator_name}
                                   </p>
                                   <p className='board-ticket-p2'>
                                       <b> Assigned to </b>{review.assignee_name.length > 7 ? review.assignee_name.slice(0, 7) + '...' : review.assignee_name}
                                   </p>

                               </div>
                                ))}

                            </div>
                        </div>






                        <div className='BacklogLane'>
                            <h3 className='HeadingBacklog Green' >
                                Done !
                            </h3>
                            <div className='BacklogStream'>

                                {tickets?.completed.map((completed, Index) => (
                                    <div key={Index} className={`backlogTasks ${tickets.completed ? 'Green' : ''}`}>
                                    <p>
                                        {completed.ticket_name}
                                    </p>
                                    <p className='board-ticket-p2'>
                                        <b> Created by </b>{completed.creator_name.length > 7 ? completed.creator_name.slice(0, 7) + '...' : completed.creator_name}
                                    </p>
                                    <p className='board-ticket-p2'>
                                        <b> Assigned to </b>{completed.assignee_name.length > 7 ? completed.assignee_name.slice(0, 7) + '...' : completed.assignee_name}
                                    </p>
 
                                </div>
                                ))}



                            </div>
                        </div>
                    </div>
                </div>
                :
                <p>There are no tickets created in this project yet...</p>
            }
        </>
    )
}

export default PMOBoard