import { useState, useEffect } from 'react'
import { Table, Button, Form } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import axios from '../../../../axiosConfig'
const TasksInner = ({ projectId }) => {
    const [newTask, setnewTask] = useState(
        {
            "sprint": "",
            "title": "",
            "description": "",
            "start_date": "",
            "end_date": "",
            "status": "todo",
            "assignee": "",
            "creator": localStorage.getItem('userId')
        }
    )
    const [availableMembers, setavailableMembers] = useState([])
    const [availableSprints, setavailableSprints] = useState([])
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [allTasks, setAllTasks] = useState([])
    const [selectedTask, setselectedTask] = useState('')
    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
        setselectedTask('')
    }
    const handlechange = (e) => {
        setselectedTask({ ...selectedTask, [e.target.name]: e.target.value })
    }
    const handlechange2 = (e) => {
        setnewTask({ ...newTask, [e.target.name]: e.target.value })
    }
    const handleDelete = async (id) => {

        await axios.delete(`deleteticket/${id}`)
            .then((res) => {
                console.log(res, "all tasks")
                if (res.data.status === 200) {
                    alert("Task Deleted Successfully")
                    getAllTasks()
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const hideCreateTask = () => {
        setShow2(false)
        setnewTask({
            "sprint": "",
            "title": "",
            "description": "",
            "start_date": "",
            "end_date": "",
            "status": "todo",
            "assignee": "",
            "creator": localStorage.getItem('userId')
        })
    }


    // API INTEGRATIONS

    const getAllTasks = async () => {
        await axios.get(`ticket?pro_id=${projectId}`)
            .then((res) => {
                console.log(res, "all tasks")
                if (res.data.status === 200) {
                    setAllTasks(res.data.data)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        if (projectId) {
            getAllTasks()
            getSprints()
            getMembers()
        }
    }, [projectId])


    const createNewTask = async () => {
        let data = {
            "sprint": Number(newTask.sprint),
            "title": newTask.title,
            "description": newTask.description,
            "start_date": newTask.start_date,
            "end_date": newTask.end_date,
            "status": "todo",
            "assignee": parseInt(newTask.assignee, 10),
            "creator": Number(localStorage.getItem('userId'))
        }
        console.log(data, "data")
        await axios.post('createticket', data)
            .then((res) => {
                console.log(res, "tasssssssss")
                if (res.data.status === 200) {
                    alert("Task Created Successfully")
                    hideCreateTask()
                    getAllTasks()
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const [selectedSprint, setselectedSprint] = useState('')
    const [selectedSprint2, setselectedSprint2] = useState('')

    useEffect(() => {
        setselectedSprint2((availableSprints.filter((sprint) => sprint.id == selectedTask.sprint))[0])
        console.log(selectedSprint2, "me agaya hun")
    }, [selectedTask])
    useEffect(() => {
        setselectedSprint((availableSprints.filter((sprint) => sprint.id == newTask.sprint))[0])
        console.log(selectedSprint, "me don hun")
    }, [newTask])


    useEffect(() => {
        if (availableSprints) {
            setselectedSprint(availableSprints[0]?.id)
            setnewTask({ ...newTask, 'sprint': availableSprints[0]?.id })
        }
    }, [availableSprints])


    useEffect(() => {
        if (availableMembers) {

            setnewTask({ ...newTask, 'assignee': availableMembers[0]?.u_id })
        }
    }, [availableMembers])


    const getSprints = async () => {
        await axios.get(`supervisorsprint?pro_id=${projectId}`)
            .then((res) => {
                console.log(res, "all sprints")
                if (res.data.status === 200) {
                    setavailableSprints(res.data.data)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const getMembers = async () => {
        await axios.get(`studentprojectwise?pro_id=${projectId}`)
            .then((res) => {
                console.log(res, "all members")
                if (res.data.status === 200) {
                    setavailableMembers(res.data.body)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const selectThisTask = (thisId) => {
        setselectedTask((allTasks.filter((task) => task.id == thisId))[0])
        handleShow()
        console.log(selectedTask, "mujhy select kiya haai")
    }


    const updateThisTask = async () => {
        await axios.patch('updateticket', selectedTask)
            .then((res) => {
                console.log(res, "ticket data")
                if (res.data.status === 200) {
                    alert("Task Updated Successfully")
                    handleClose()
                    getAllTasks()
                }
            })
            .catch((err) => {
                console.log(err)
            })

    }



    return (
        <div className='main-inner-for-tasks'>
            <br /><br />
            <h2>All Tasks</h2>


            <Table striped hover>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Title</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {allTasks.length > 0 ?
                        allTasks.map((task, Index) => (
                            <tr>
                                <th>{Index + 1}</th>
                                <th>{task.title.length > 40 ? `${(task.title).slice(0, 40)}...` : task.title}</th>
                                <th>{task.start_date}</th>
                                <th>{task.end_date}</th>
                                <th>
                                    <span className='notispanright no-float'>
                                        <button onClick={() => selectThisTask(task.id)} className='Icon-btn-EM'>
                                            <img alt='iconsimages' src={require('../../../../Images/pencil.png')} className="Icons-EM" />
                                        </button>
                                        <button onClick={() => handleDelete(task.id)} className='Icon-btn-EM'>
                                            <img alt='iconsimages' src={require('../../../../Images/delete.png')} className="Icons-EM" />
                                        </button>
                                    </span>
                                </th>
                            </tr>
                        ))
                        :
                        <>
                            <br />
                            <tr>
                                <td colSpan={5}>There are no tasks created yet !</td>
                            </tr>
                        </>
                    }
                </tbody>
            </Table>











            <div onClick={() => setShow2(true)} className="addTask">
                + Add Task
            </div>












            {/* edit current task */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >

                        <div className="form-group">
                            <label htmlFor="title">title</label>
                            <input required type="title" className="form-control" id="title" name="title" value={selectedTask.title} onChange={handlechange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">description</label>
                            <input required type="text" className="form-control" id="description" name="description" value={selectedTask.description} onChange={handlechange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sprint">Sprint</label>
                            <Form.Select required id="sprint" name="sprint" value={selectedTask.sprint} onChange={handlechange} aria-label="Default select example">
                                {
                                    availableSprints?.length > 0 && availableSprints.map((sprint) => {
                                        return <option key={sprint.id} value={sprint.id}>{sprint.title}</option>
                                    })

                                }
                            </Form.Select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="rollno">start date</label>
                            <input min={selectedSprint2?.start_date} max={selectedSprint2?.end_date} required type="date" className="form-control" id="start_date" name="start_date" value={selectedTask.start_date} onChange={handlechange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="end_date">end date</label>
                            <input min={selectedTask?.start_date} max={selectedSprint2?.end_date} required type="date" className="form-control" id="end_date" name="end_date" value={selectedTask.end_date} onChange={handlechange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="sprint">Assign to</label>
                            <Form.Select required id="assignee" name="assignee" value={selectedTask.assignee} onChange={handlechange} aria-label="Default select example">
                                {
                                    availableMembers?.length > 0 && availableMembers.map((member) => {
                                        return <option key={member.u_id} value={member.u_id}>{member.name}</option>
                                    })

                                }
                            </Form.Select>
                        </div>

                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={updateThisTask} variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>











            {/* Create new task */}
            <Modal show={show2} onHide={() => setShow2(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >

                        <div className="form-group">
                            <label htmlFor="title">title</label>
                            <input required type="title" className="form-control" id="title" name="title" value={newTask.title} onChange={handlechange2} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">description</label>
                            <input required type="text" className="form-control" id="description" name="description" value={newTask.description} onChange={handlechange2} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sprint">Sprint</label>
                            <Form.Select required id="sprint" name="sprint" value={newTask.sprint} onChange={handlechange2} aria-label="Default select example">
                                {
                                    availableSprints?.length > 0 && availableSprints.map((sprint) => {
                                        return <option key={sprint.id} value={sprint.id}>{sprint.title}</option>
                                    })

                                }
                            </Form.Select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="rollno">start_date</label>
                            <input min={new Date().toISOString().split('T')[0] < selectedSprint?.start_date ? selectedSprint?.start_date : new Date().toISOString().split('T')[0]} max={selectedSprint?.end_date} required type="date" className="form-control" id="start_date" name="start_date" value={newTask.start_date} onChange={handlechange2} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="end_date">end_date</label>
                            <input min={newTask.start_date} max={selectedSprint?.end_date} required type="date" className="form-control" id="end_date" name="end_date" value={newTask.end_date} onChange={handlechange2} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="sprint">Assign to</label>
                            <Form.Select required id="assignee" name="assignee" value={newTask.assignee} onChange={handlechange2} aria-label="Default select example">
                                {
                                    availableMembers?.length > 0 && availableMembers.map((member) => {
                                        return <option key={member.u_id} value={member.u_id}>{member.name}</option>
                                    })

                                }
                            </Form.Select>
                        </div>

                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={hideCreateTask}>
                        Close
                    </Button>
                    <Button onClick={createNewTask} variant="primary">
                        Create Task
                    </Button>
                </Modal.Footer>
            </Modal>
            <br /><br /><br /><br />
        </div >
    )
}

export default TasksInner