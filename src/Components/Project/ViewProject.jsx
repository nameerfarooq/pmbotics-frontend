import React, { useContext, useEffect } from 'react'
import './projects.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import { useNavigate, useParams } from 'react-router-dom';
import MyContext from '../../Context/MyContext';
import { Table } from 'react-bootstrap';
import axios from '../../axiosConfig';
import PMOBoard from './PMOBoard';
import Modal from 'react-bootstrap/Modal';
import '../Project/projects.css'
import Form from 'react-bootstrap/Form';
import GlobalContext from '../../Context/GlobalContext';
import ProjectChart from '../ProjectChart';


function ViewProject() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [milestoneMarkings, setMilestoneMarkings] = useState('')
    const [milestone_marks, setMilestone_marks] = useState('')
    const { projects, supervisors, refreshProjects } = useContext(MyContext);
    const { departments } = useContext(GlobalContext)
    const [students, setStudents] = useState('')
    const [milestoneWork, setMilestoneWork] = useState('')
    const [loaded, setLoaded] = useState(false);
    const [myProject, setMyProject] = useState(null);
    const [mySupervisor, setMySupervisor] = useState(null);
    const [selectedProject, setSelectedProject] = useState({
        "id": '',
        "title": "",
        "year": "",
        "batch": "",
        "description": "",
        "domain": "",
        "no_of_group_members": '',
        "supervisor": '',
        "department": ''
    })
    const assignMarks = async (e) => {
        let data = {
            "comments": "satisfied",
            "marks": Number(milestone_marks),
            "project": Number(id),
            "milestone": Number(e),
            "m_distributor": localStorage.getItem('userId')
        }
        await axios.post('givemarks', data)
            .then((res) => {
                console.log(res, 'marks')
                console.log(data, 'data')
                if (res.data.message === "Success") {
                    alert("Marks posted Successfully")
                    setMilestone_marks('')
                    document.getElementById("milestone-marks").value = "";

                    getMilestoneMarkings()
                }
                else {
                    alert(res.data.message)
                    setMilestone_marks('')
                    document.getElementById("milestone-marks").value = "";

                }

            })
            .catch((err) => {
                console.log(err)
            })
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const getMilestoneMarkings = async () => {
        await axios.get(`marks?project_id=${id}`)
            .then((res) => {
                if (res.data.message == "Success") {

                    setMilestoneMarkings(res.data.data)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const getMilestoneWork = async () => {
        await axios.get(`work?pro_id=${id}`)
            .then((res) => {
                if (res.data.message == "Success") {

                    setMilestoneWork(res.data.body)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const getProjectMembers = async () => {
        await axios.get(`studentprojectwise?pro_id=${id}`)
            .then((res) => {
                if (res.data.message == "Success") {
                    setStudents(res.data.body)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        if (projects && supervisors) {

            const filteredProject = projects.filter(project => project.id == id);
            const project = filteredProject.length ? filteredProject[0] : null;
            setMyProject(project);
            setLoaded(true);
        }
    }, [id, projects, supervisors]);

    useEffect(() => {
        if (myProject && supervisors) {
            const filteredSupervisor = supervisors.filter(supervisor => supervisor.id == myProject.supervisor);
            const supervisor = filteredSupervisor.length ? filteredSupervisor[0] : null;
            setMySupervisor(supervisor);
            getProjectMembers()
            getMilestoneWork()
            getMilestoneMarkings()
        }
    }, [myProject, supervisors]);


    // updating a project
    const updateClicked = () => {
        setSelectedProject({
            "id": myProject.id,
            "title": myProject.title,
            "year": myProject.year,
            "batch": myProject.batch,
            "description": myProject.description,
            "domain": myProject.domain,
            "no_of_group_members": parseInt(myProject.no_of_group_members, 10),
            "supervisor": myProject.supervisor,
            "department": localStorage.getItem("departmentId")
        })
        handleShow()

    }
    const deleteProject = async () => {
        await axios.delete(`deleteproject/${id}`)
            .then((res) => {
                if (res.data.message == "Successfuly deleted") {
                    alert("Project deleted successfully")
                    refreshProjects()
                    navigate('/fyp_panel/')

                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const updateProject = async () => {
        let data = {
            "id": selectedProject.id,
            "title": selectedProject.title,
            "year": selectedProject.year,
            "batch": selectedProject.batch,
            "description": selectedProject.description,
            "domain": selectedProject.domain,
            "no_of_group_members": parseInt(selectedProject.no_of_group_members, 10),
            "supervisor": selectedProject.supervisor,
            "department": localStorage.getItem("departmentId")
        }
        console.log(selectedProject, "yeh tha asal masla")
        await axios.patch('updateproject', data)
            .then((res) => {
                console.log(res, "maslay ki jarr")
                if (res.data.message == "Success") {
                    alert("Project updated successfully")
                    refreshProjects()
                    handleClose()
                }
                else if (res.data.message !== "Success") {
                    alert(res.data.message)
                }
                else if (res.data.exception === "some exception") {
                    let errorMessages = [];
                    if (typeof res.data.message === "object") {
                        // If the message is an object, extract the error messages from it
                        for (let field in res.data.message) {
                            if (Array.isArray(res.data.message[field])) {
                                errorMessages.push(...res.data.message[field]);
                            }
                        }
                    } else {
                        // Otherwise, add the message to the error messages array
                        errorMessages.push(res.data.message);
                    }
                    if (errorMessages.length > 0) {
                        // If there are error messages, show them in an alert box
                        alert(errorMessages[0]);
                    } else {
                        // Otherwise, show the exception message
                        alert(res.data.exception);
                    }
                } else {
                    alert(res.data.exception);
                }

            })
            .catch((err) => {
                console.log(err)
            })
    }



    const handleChange = (e) => {
        setSelectedProject({ ...selectedProject, [e.target.name]: e.target.value });
    };

    const MarkAsCompleted = async (e) => {
        let data = {
            "pro_id": id,
            "status": e
        }

        await axios.patch(`markasCompleted`, data)
            .then((res) => {
                console.log(res, 'kkkkk')
                if (res.data.status === 200) {
                    alert("Project Status Updated")
                    refreshProjects()
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            {myProject && mySupervisor ?


                <div className='ViewProjectMainDiv'>

                    {/* showing popup for editing a project */}

                    {/* model started for editing selected project */}
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Project</Modal.Title>
                        </Modal.Header>



                        <Modal.Body>
                            <form >
                                <div className="form-group">
                                    <label htmlFor="email">Title</label>
                                    <input required type="email" className="form-control" id="title" name="title" value={selectedProject.title} onChange={handleChange} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name">year</label>
                                    <input required type="text" className="form-control" id="year" name="year" value={selectedProject.year} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="rollno">batch</label>
                                    <input required type="text" className="form-control" id="batch" name="batch" value={selectedProject.batch} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="seatno">description</label>
                                    <input required type="text" className="form-control" id="description" name="description" value={selectedProject.description} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="enrollmentno">domain</label>
                                    <input required type="text" className="form-control" id="domain" name="domain" value={selectedProject.domain} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="department">No of group members</label>
                                    <Form.Select required id="department" name="no_of_group_members" value={selectedProject.no_of_group_members} onChange={handleChange} aria-label="Default select example">

                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>


                                    </Form.Select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="department">Supervisor</label>
                                    <Form.Select required id="department" name="supervisor" value={selectedProject.supervisor} onChange={handleChange} aria-label="Default select example">

                                        {
                                            supervisors.map((supervisor) => {
                                                return <option key={supervisor.id} value={supervisor.id}>{supervisor.name}</option>
                                            })

                                        }


                                    </Form.Select>
                                </div>

                                {/* <div className="form-group">
                                    <label htmlFor="department">Department</label>
                                    <Form.Select required id="department" name="department" value={selectedProject.department} onChange={handleChange} aria-label="Default select example">

                                        {
                                            departments.map((depart) => {
                                                return <option key={depart.id} value={depart.id}>{depart.name}</option>
                                            })

                                        }


                                    </Form.Select>
                                </div> */}




                            </form>





                        </Modal.Body>





                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={updateProject}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    {/* Model ended */}


                    <div className='view-project-row1'>
                        <div className="left">
                            <h4 className="projectTitleClasshead">Project Title</h4>
                            <h2 className='projectTitleClass'>{myProject.title}</h2>
                        </div>
                        <div className="right">
                            <ProjectChart projectId={id} />
                        </div>
                    </div>

                    <div className="line2">
                        <h5 className='projectTitleClasshead'>Project Description</h5>
                        {myProject.description}
                    </div>






                    <h5 className='title-of-table'>Project details</h5>

                    <Table bordered striped hover >
                        <thead >
                            <tr style={{ color: '#08c076' }} className='tr-td-bold'>
                                <td>Supervisor name</td>
                                <td>Year</td>
                                <td>Batch</td>
                                <td>Status</td>
                                <td>Total Marks</td>
                                <td>Domain</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ color: '#08c076' }}>
                                <td>{mySupervisor.name}</td>
                                <td>{myProject.year}</td>
                                <td>{myProject.batch}</td>
                                <td>{myProject.status}</td>
                                <td>{myProject.grade}</td>
                                <td>{myProject.domain}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <h5 className='title-of-table'>Team members</h5>
                    <Table bordered striped hover >
                        <thead >
                            <tr style={{ color: '#08c076' }} className='tr-td-bold'>
                                <td>S#</td>
                                <td>Team members</td>
                                <td>Roll #</td>

                            </tr>
                        </thead>
                        <tbody>
                            {students ? students.map((student, Index) => (
                                <tr key={Index}>
                                    <td>{Index + 1}</td>
                                    <td>{student.name}</td>
                                    <td>{student.rollno}</td>
                                </tr>
                            ))
                                :
                                <tr><td colSpan={3}>no students assigned yet</td></tr>
                            }
                        </tbody>
                    </Table>
                    <h5 className='title-of-table'>Milestones work</h5>
                    <Table bordered  >
                        <thead >
                            <tr style={{ color: '#08c076' }} className='tr-td-bold'>
                                <td>S#</td>
                                <td>Milestone Name</td>
                                <td>Milestone Work</td>
                                {myProject.status === "ongoing"
                                    &&
                                    <td>Marks</td>
                                }

                            </tr>
                        </thead>
                        <tbody>
                            {milestoneWork ? milestoneWork.map((milestone, Index) => (

                                <tr key={Index}>
                                    <td>{Index + 1}</td>
                                    <td>{milestone.milestone_title}</td>
                                    <td>
                                        <a href={milestone.document} target='_blank' >
                                            <img alt='iconsimages' src={require('../../Images/cloud.png')} className="Icons-EM" />
                                        </a>
                                    </td>
                                    {myProject.status === "ongoing"
                                        &&
                                        <td>
                                            <input type="number" id='milestone-marks' name="milestone-marks" onChange={(e) => { setMilestone_marks(e.target.value) }} />
                                            <a onClick={() => assignMarks(milestone.milestone)} target='_blank' >
                                                <img alt='iconsimages' src={require('../../Images/check-mark.png')} className="Icons-EM" />

                                            </a>
                                        </td>
                                    }
                                </tr>
                            ))
                                :
                                <tr><td colSpan={4}>no Milestone created yet</td></tr>
                            }
                        </tbody>
                    </Table>
                    <h5 className='title-of-table'>Milestones marks</h5>
                    <Table bordered striped hover >
                        <thead >
                            <tr style={{ color: '#08c076' }} className='tr-td-bold'>
                                <td>S#</td>
                                <td>Milestone Name</td>
                                <td>Milestone Marks</td>

                            </tr>
                        </thead>
                        <tbody>
                            {milestoneMarkings ? milestoneMarkings.map((milestone, Index) => (

                                <tr key={Index}>
                                    <td>{Index + 1}</td>
                                    <td>{milestone.title}</td>
                                    <td>
                                        {Math.round(milestone.marks)}

                                    </td>

                                </tr>
                            ))
                                :
                                <tr><td colSpan={4}>no Milestone created yet</td></tr>
                            }
                        </tbody>
                    </Table>
                    <h5 className='title-of-table'>Project Board</h5>
                    <PMOBoard id={id} />
                    <div>
                        <button className="dangerbtn" onClick={() => deleteProject()} >
                            Delete project
                        </button>
                        {myProject.status === "ongoing" &&
                            <button className="MS-Card-btn3" onClick={() => updateClicked()} >
                                Edit
                            </button>
                        }
                        {myProject.status === "ongoing" ?
                            <button className="MS-Card-btn3" onClick={() => MarkAsCompleted("completed")} >
                                Mark as Completed
                            </button>
                            :
                            <button className="MS-Card-btn3" onClick={() => MarkAsCompleted("ongoing")} >
                                Mark as Ongoing
                            </button>
                        }
                    </div>
                </div>



                :
                <p>Loading</p>
            }
        </>
    )
}

export default ViewProject