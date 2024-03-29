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
import SBacklog from '../SBacklogScreen/SBacklog';
import ProjectChart from '../../ProjectChart';


function SViewProject() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [milestoneMarkings, setMilestoneMarkings] = useState('')
    const [milestone_marks, setMilestone_marks] = useState('')

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
    const getMilestoneMarkings = async () => {
        await axios.get(`marks?project_id=${id}`)
            .then((res) => {
                if (res.data.message == "Success") {
                    setMilestoneMarkings(res.data.data)
                }
                console.log(res, "pehla")
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


    const FindMyProject = () => {

    }

    useEffect(() => {

        if (myProject) {
            getProjectMembers()
            getMilestoneWork()

        }
    }, [myProject]);

    console.log(myProject, "this is my project")

    useEffect(() => {
        getAllProjects()
        getMilestoneMarkings()
        getAllAvailableStudents()
    }, [])

    // updating a project


    const [ShowAddStudent, setShowAddStudent] = useState(false)
    const [allStudents, setallStudents] = useState([])


    const [searchQuery, setSearchQuery] = useState("");
    const filteredstudents = allStudents ? allStudents.filter((std) =>
        std.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
        :
        null;


    const addThisStudentInProject = async (std_id) => {
        await axios.post('addteammember', {
            "project_id": id,
            "teammember_id": std_id
        })
            .then((res) => {
                if (res.data.status === 200) {
                    alert("Student Added in project Successfully")
                    getAllProjects()
                    getAllAvailableStudents()
                    getProjectMembers()
                    console.log("very important add", myProject)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const removeThisStudentInProject = async (std_id) => {
        console.log("hanaaaa", std_id)
        await axios.patch('addteammember', {
            "project_id": Number(id),
            "teammember_id": std_id
        })
            .then((res) => {
                console.log(res)
                if (res.data.status === 200) {
                    alert("Student Removed from project Successfully")
                    getAllProjects()
                    getAllAvailableStudents()
                    getProjectMembers()
                    console.log("very important remove", myProject)

                }
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const getAllAvailableStudents = async () => {
        await axios.get('studentlist')
            .then((res) => {
                if (res.data.status === 200) {
                    console.log(res)
                    setallStudents(res.data.data)

                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            {ShowAddStudent && myProject.current_no_of_group_members < myProject.no_of_group_members &&
                <div className='addStudentsInProject'>
                    <div className='addStudentsInner'>
                        <div onClick={() => setShowAddStudent(false)} className='close-btn'>X</div>
                        <div style={{ textAlign: "center", fontSize: "28px", fontWeight: "600" }}>
                            Add Students in project
                        </div>
                        <div className="searchbar-container">
                            <input type="text" placeholder='Search students by name' className="searchbar float_none" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

                        </div>
                        <div className='students-list-holder'>
                            {filteredstudents.length > 0 ?
                                filteredstudents.map((std) => (
                                    <div className='students-list-item'>
                                        <div className='name'>{std.name}<span className='roll'>{std.rollno}</span></div>
                                        <div onClick={() => addThisStudentInProject(std.id)} className='add'>Add</div>
                                    </div>
                                ))
                                :
                                <p>No students available</p>
                            }


                        </div>
                    </div>
                </div>
            }
            {myProject ?


                <div className='ViewProjectMainDiv'>


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
                                {myProject.status === "ongoing" &&
                                    <td>Remove</td>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {students ? students.map((student, Index) => (
                                <tr key={Index}>
                                    <td>{Index + 1}</td>
                                    <td>{student.name}</td>
                                    <td>{student.rollno}</td>
                                    {myProject.status === "ongoing" &&
                                        <td><button className='Icon-btn-EM' onClick={() => { removeThisStudentInProject(student.id) }}>
                                            <span style={{ 'marginLeft': '5px' }}><img alt='iconsimages' src={require('../../../Images/delete.png')} className="Icons-EM" /></span>
                                        </button></td>
                                    }
                                </tr>
                            ))

                                :
                                <tr><td colSpan={3}>no students assigned yet</td></tr>
                            }
                            {myProject.current_no_of_group_members < myProject.no_of_group_members &&
                                myProject.status === "ongoing" &&
                                <tr>
                                    <td>
                                        +
                                    </td>
                                    <td colSpan={3}>
                                        <button className='Icon-btn-EM' onClick={() => { setShowAddStudent(true) }}>
                                            Add new <span style={{ 'marginLeft': '5px' }}><img alt='iconsimages' src={require('../../../Images/plus.png')} className="Icons-EM" /></span>

                                        </button>
                                    </td>

                                </tr>
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
                                {myProject.status === "ongoing" &&
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
                                            <img alt='iconsimages' src={require('../../../Images/cloud.png')} className="Icons-EM" />
                                        </a>
                                    </td>

                                    {myProject.status === "ongoing" &&
                                        <td>
                                            <input type="number" id='milestone-marks' name="milestone-marks" onChange={(e) => { setMilestone_marks(e.target.value) }} />
                                            <a onClick={() => assignMarks(milestone.milestone)} target='_blank' >
                                                <img alt='iconsimages' src={require('../../../Images/check-mark.png')} className="Icons-EM" />

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
                    {/* <PMOBoard id={id} /> */}
                    <SBacklog id={id} />



                </div>



                :
                <p>Loading</p>
            }
        </>
    )
}

export default SViewProject