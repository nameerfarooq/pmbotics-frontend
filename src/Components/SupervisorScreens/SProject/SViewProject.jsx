import { useEffect } from 'react'
import '../../Project/projects.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import axios from '../../../axiosConfig';
// import PMOBoard from './PMOBoard';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import PMOBoard from '../../Project/PMOBoard';


function SViewProject() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [students, setStudents] = useState('')
    const [milestoneWork, setMilestoneWork] = useState('')
    const [myProject, setMyProject] = useState(null);
    const [projects, setProjects] = useState('')
    const getAllProjects = async () => {
        await axios.get('projectlist')
            .then((res) => {
                if (res.data.message === "Success") {
                    setProjects(res.data.data)
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
        if (projects) {

            const filteredProject = projects.filter(project => project.id == id);
            const project = filteredProject.length ? filteredProject[0] : null;
            setMyProject(project);


        }
    }, [id, projects]);

    useEffect(() => {

        if (myProject) {
            getProjectMembers()
            getMilestoneWork()

        }
    }, [myProject]);
    useEffect(() => {
        getAllProjects()
    }, [])

    // updating a project










    return (
        <>
            {myProject ?


                <div className='ViewProjectMainDiv'>

                    {/* showing popup for editing a project */}

                    {/* model started for editing selected project */}
                    {/* <Modal show={show} onHide={handleClose}>
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

                                <div className="form-group">
                                    <label htmlFor="department">Department</label>
                                    <Form.Select required id="department" name="department" value={selectedProject.department} onChange={handleChange} aria-label="Default select example">

                                        {
                                            departments.map((depart) => {
                                                return <option key={depart.id} value={depart.id}>{depart.name}</option>
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
                            <Button variant="primary" onClick={updateProject}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal> */}

                    {/* Model ended */}


                    <Table bordered style={{ backgroundColor: 'white' }} >
                        <thead >
                            <tr style={{ color: '#08c076', fontSize: '22px' }} className='tr-td-bold'>
                                <td>Project name</td>
                                <td>Description</td>

                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>{myProject.title}</td>
                                <td>{myProject.description}</td>

                            </tr>
                        </tbody>
                    </Table>

                    <h5 className='title-of-table'>Project details</h5>

                    <Table bordered striped hover >
                        <thead >
                            <tr style={{ color: '#08c076' }} className='tr-td-bold'>
                                <td>Supervisor name</td>
                                <td>Year</td>
                                <td>Batch</td>
                                <td>Status</td>
                                <td>Grade</td>
                                <td>Domain</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ color: '#08c076' }}>
                                <td>{localStorage.getItem('userName')}</td>
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
                    <Table bordered striped hover >
                        <thead >
                            <tr style={{ color: '#08c076' }} className='tr-td-bold'>
                                <td>S#</td>
                                <td>Milestone Name</td>
                                <td>Milestone Work</td>

                            </tr>
                        </thead>
                        <tbody>
                            {milestoneWork ? milestoneWork.map((milestone, Index) => (
                                <tr key={Index}>
                                    <td>{Index + 1}</td>
                                    <td>{milestone.milestone_title}</td>
                                    <td>
                                        <a href={milestone.document} target='_blank' >
                                            <img alt='iconsimages' src={require('../../../Images/cloud.png')} className="Icons-EM" />

                                        </a>

                                    </td>
                                </tr>
                            ))
                                :
                                <tr><td colSpan={3}>no Milestone created yet</td></tr>
                            }
                        </tbody>
                    </Table>
                    <h5 className='title-of-table'>Project Board</h5>
                    <PMOBoard id={id} />



                </div>



                :
                <p>Loading</p>
            }
        </>
    )
}

export default SViewProject