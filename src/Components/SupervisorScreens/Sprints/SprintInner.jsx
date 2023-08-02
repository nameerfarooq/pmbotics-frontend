import { useState, useEffect } from 'react'
import { Table, Button, Form } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import axios from '../../../axiosConfig'
const SprintInner = ({ projectId }) => {
    const [newSprint, setnewSprint] = useState(
        {
            "title": "",
            "start_date": "",
            "end_date": "",
            "project": projectId,
            "milestone": ''
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
        setnewSprint({ ...newSprint, [e.target.name]: e.target.value })
    }
    const handleDelete = async (id) => {

        await axios.delete(`deletesprint/${id}`)
            .then((res) => {
                if (res.data.message === "Success") {
                    alert("Sprint Deleted Successfully")
                    getAllTasks()
                }
                else {
                    alert(res.data.message)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const hideCreateTask = () => {
        setShow2(false)
        setnewSprint({
            "title": "",
            "start_date": "",
            "end_date": "",
            "project": projectId,
            "milestone": ''
        })
    }


    // API INTEGRATIONS

    const getAllTasks = async () => {
        await axios.get(`/supervisorsprint?pro_id=${projectId}`)
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


    const createnewSprint = async () => {
        let data = {
            "title": newSprint.title,
            "start_date": newSprint.start_date,
            "end_date": newSprint.end_date,
            "project": projectId,
            "milestone": newSprint.milestone
        }
        console.log(data, "data")
        await axios.post('createsprint', data)
            .then((res) => {
                console.log(res, "tasssssssss")
                if (res.data.status === 200) {
                    alert("Sprint Created Successfully")
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
        setselectedSprint2((availableSprints.filter((sprint) => sprint.id == selectedTask.milestone))[0])
        console.log(selectedSprint2, "me agaya hun")
    }, [selectedTask])
    useEffect(() => {
        setselectedSprint((availableSprints.filter((sprint) => sprint.id == newSprint.milestone))[0])
        console.log(selectedSprint, "me don hun")
    }, [newSprint])


    useEffect(() => {
        if (availableSprints) {
            setselectedSprint(availableSprints[0]?.id)
            setnewSprint({ ...newSprint, 'milestone': availableSprints[0]?.id })
        }
    }, [availableSprints])


    useEffect(() => {
        if (availableMembers) {

            setnewSprint({ ...newSprint, 'assignee': availableMembers[0]?.u_id })
        }
    }, [availableMembers])


    const getSprints = async () => {
        await axios.get(`getallmilestone`)
            .then((res) => {
                console.log(res, "all milestones")
                if (res.data.status === 200) {
                    let allMilestones = res.data.body
                    let today = new Date().toISOString().split('T')[0]
                    let ValidMilestones = allMilestones.filter((milestone) => milestone.document_submission_date >= today)
                    setavailableSprints(ValidMilestones)
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
        console.log("meri bari", selectedTask)
        let data = {
            "id": selectedTask.id,
            "title": selectedTask.title,
            "start_date": selectedTask.start_date,
            "end_date": selectedTask.end_date,
            "project": selectedTask.project,
            "milestone": selectedTask.milestone
        }
        await axios.patch('updatesprint', data)
            .then((res) => {
                console.log(res, "sprints updated")
                if (res.data.status === 200) {
                    alert("Sprint Updated Successfully")
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
            <h2>All Sprints</h2>


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

                    {allTasks.length > 0 && allTasks.map((task, Index) => (
                        <tr>
                            <th>{Index + 1}</th>
                            <th>{task.title.length > 40 ? `${(task.title).slice(0, 40)}...` : task.title}</th>
                            <th>{task.start_date}</th>
                            <th>{task.end_date}</th>
                            <th>
                                <span className='notispanright no-float'>
                                    <button onClick={() => selectThisTask(task.id)} className='Icon-btn-EM'>
                                        <img alt='iconsimages' src={require('../../../Images/pencil.png')} className="Icons-EM" />
                                    </button>
                                    <button onClick={() => handleDelete(task.id)} className='Icon-btn-EM'>
                                        <img alt='iconsimages' src={require('../../../Images/delete.png')} className="Icons-EM" />
                                    </button>
                                </span>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </Table>











            <div onClick={() => setShow2(true)} className="addTask">
                + Add Sprint
            </div>












            {/* edit current task */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Sprint</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >

                        <div className="form-group">
                            <label htmlFor="title">title</label>
                            <input required type="title" className="form-control" id="title" name="title" value={selectedTask.title} onChange={handlechange} />
                        </div>


                        <div className="form-group">
                            <label htmlFor="milestone">Milestones</label>
                            <Form.Select required id="milestone" name="milestone" value={selectedTask.milestone} onChange={handlechange} aria-label="Default select example">
                                {
                                    availableSprints?.length > 0 && availableSprints.map((sprint) => {

                                        return <option key={sprint.id} value={sprint.id}>{sprint.milestone_name}</option>
                                    })

                                }
                            </Form.Select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="rollno">start date</label>
                            <input min={new Date().toISOString().split('T')[0]} max={selectedSprint2?.document_submission_date} required type="date" className="form-control" id="start_date" name="start_date" value={selectedTask.start_date} onChange={handlechange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="end_date">end date</label>
                            <input min={selectedTask?.start_date} max={selectedSprint2?.document_submission_date} required type="date" className="form-control" id="end_date" name="end_date" value={selectedTask.end_date} onChange={handlechange} />
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
                    <Modal.Title>Create New Sprint</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form >

                        <div className="form-group">
                            <label htmlFor="title">title</label>
                            <input required type="title" className="form-control" id="title" name="title" value={newSprint.title} onChange={handlechange2} />
                        </div>


                        <div className="form-group">
                            <label htmlFor="milestone">Milestone</label>
                            <Form.Select required id="milestone" name="milestone" value={newSprint.milestone} onChange={handlechange2} aria-label="Default select example">
                                {
                                    availableSprints?.length > 0 && availableSprints.map((sprint) => {
                                        return <option key={sprint.id} value={sprint.id}>{sprint.milestone_name}</option>
                                    })

                                }
                            </Form.Select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="rollno">start_date</label>
                            <input min={new Date().toISOString().split('T')[0]} max={selectedSprint?.document_submission_date} required type="date" className="form-control" id="start_date" name="start_date" value={newSprint.start_date} onChange={handlechange2} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="end_date">end_date</label>
                            <input min={newSprint.start_date} max={selectedSprint?.document_submission_date} required type="date" className="form-control" id="end_date" name="end_date" value={newSprint.end_date} onChange={handlechange2} />
                        </div>



                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={hideCreateTask}>
                        Close
                    </Button>
                    <Button onClick={createnewSprint} variant="primary">
                        Create Sprint
                    </Button>
                </Modal.Footer>
            </Modal>
            <br /><br /><br /><br />
        </div >
    )
}

export default SprintInner