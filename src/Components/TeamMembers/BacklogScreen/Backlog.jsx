import { useState, useEffect } from 'react'
import './Backlog.css'
import axios from '../../../axiosConfig'

function Backlog({ projectStatus, projectId }) {
    const [tickets, setTickets] = useState([])
    const [selectedTodo, setselectedTodo] = useState('')
    const [selectedInprogress, setselectedInprogress] = useState('')
    const [selectedReview, setselectedReview] = useState('')
    const getAlltickets = async () => {
        const response = await axios.get(`studentticket`)
            .then((res) => {
                if (res.data.status == 200) {
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

    }, [projectId])

    const MovetoInprogress = async () => {
        let data = {
            "id": selectedTodo?.ticket_id,
            "sprint": selectedTodo.sprint,
            "title": selectedTodo.ticket_name,
            "description": selectedTodo.description,
            "start_date": selectedTodo.start_date,
            "end_date": selectedTodo.end_date,
            "status": "inprogress",
            "github_link": null,
            "assignee": selectedTodo.assignee,
            "creator": selectedTodo.creator
        }
        console.log(data, 'ehem')
        await axios.patch(`updateticket`, data)
            .then((res) => {
                console.log(res, 'oooooo')
                if (res.data.status == 200) {
                    alert("Ticket Updated!")
                    getAlltickets()
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const MovetoReview = async () => {
        let data = {
            "id": selectedInprogress?.ticket_id,
            "sprint": selectedInprogress.sprint,
            "title": selectedInprogress.ticket_name,
            "description": selectedInprogress.description,
            "start_date": selectedInprogress.start_date,
            "end_date": selectedInprogress.end_date,
            "status": "review",
            "github_link": null,
            "assignee": selectedInprogress.assignee,
            "creator": selectedInprogress.creator
        }
        console.log(data, 'ehem')
        await axios.patch(`updateticket`, data)
            .then((res) => {
                console.log(res, 'oooooo')
                if (res.data.status == 200) {
                    alert("Ticket Updated!")
                    getAlltickets()
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const MovetoCompleted = async () => {
        let data = {
            "id": selectedReview?.ticket_id,
            "sprint": selectedReview.sprint,
            "title": selectedReview.ticket_name,
            "description": selectedReview.description,
            "start_date": selectedReview.start_date,
            "end_date": selectedReview.end_date,
            "status": "completed",
            "github_link": null,
            "assignee": selectedReview.assignee,
            "creator": selectedReview.creator
        }
        console.log(data, 'ehem')
        await axios.patch(`updateticket`, data)
            .then((res) => {
                console.log(res, 'oooooo')
                if (res.data.status == 200) {
                    alert("Ticket Updated!")
                    getAlltickets()
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const selectForInprogress = (id) => {
        const filtered = (tickets?.todo?.filter((task) => task.ticket_id == id))[0]
        console.log(filtered, "filered inprogress")
        setselectedTodo(filtered)
    }
    useEffect(() => {
        MovetoInprogress()
    }, [selectedTodo])
    const selectForReview = (id) => {
        const filtered = (tickets?.inprogress?.filter((task) => task.ticket_id == id))[0]
        console.log(filtered, "filered inprogress")
        setselectedInprogress(filtered)
    }
    useEffect(() => {
        MovetoReview()
    }, [selectedInprogress])
    const selectForComplete = (id) => {
        const filtered = (tickets?.review?.filter((task) => task.ticket_id == id))[0]
        console.log(id, "filered in review")
        setselectedReview(filtered)
    }
    useEffect(() => {
        MovetoCompleted()
    }, [selectedReview])

    return (
        <div className='MainDiv'>
            <h2 className='Heading'>
                My Tasks
            </h2>

            {
                tickets.todo?.length > 0 || tickets.inprogress?.length > 0 || tickets.review?.length > 0 || tickets.completed?.length > 0 ?
                    (
                        <div className='BacklogArea'>




                            <div className='BacklogLane'>
                                <h3 className='HeadingBacklog Yellow'>
                                    Todo
                                </h3>
                                <div className='BacklogStream'>
                                    {tickets?.todo.map((todo, Index) => (
                                        <div key={Index} className="backlogTasks Yellow">
                                            <p>
                                                {todo.ticket_name}
                                            </p>
                                            {projectStatus === "ongoing" &&
                                                <button onClick={() => {

                                                    selectForInprogress(todo.ticket_id)
                                                }} className='BtnTask'>In Progress</button>
                                            }
                                        </div>
                                    ))}


                                </div>
                            </div>

                            <div className='BacklogLane'>
                                <h3 className='HeadingBacklog Pink'>
                                    In Progress
                                </h3>
                                <div className='BacklogStream'>
                                    {tickets?.inprogress.map((inprogress, Index) => (
                                        <div key={Index} className="backlogTasks Pink">
                                            <p>
                                                {inprogress.ticket_name}
                                            </p>
                                            {projectStatus === "ongoing" &&
                                                <button onClick={() => {

                                                    selectForReview(inprogress.ticket_id)
                                                }} className='BtnTask'>Review</button>
                                            }
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
                                        <div key={Index} className="backlogTasks Blue">
                                            <p>
                                                {review.ticket_name}
                                            </p>
                                            {projectStatus === "ongoing" &&
                                                <button onClick={() => {
                                                    selectForComplete(review.ticket_id)
                                                }} className='BtnTask'>Approve</button>
                                            }
                                        </div>
                                    ))}

                                </div>
                            </div>






                            <div className='BacklogLane'>
                                <h3 className='HeadingBacklog Green' >
                                    Completed !
                                </h3>
                                <div className='BacklogStream'>

                                    {tickets?.completed.map((completed, Index) => (
                                        <div key={Index} className="backlogTasks Green">
                                            <p>
                                                {completed.ticket_name}
                                            </p>

                                        </div>
                                    ))}


                                </div>
                            </div>
                        </div>)
                    :
                    <h5>No tickets available to show</h5>
            }
        </div>
    )
}

export default Backlog