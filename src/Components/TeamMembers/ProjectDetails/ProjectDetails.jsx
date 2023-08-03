

import { useEffect } from 'react'
import '../../Project/projects.css'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import axios from '../../../axiosConfig';




function ProjectDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [milestoneMarkings, setMilestoneMarkings] = useState('')
    const [milestone_marks, setMilestone_marks] = useState('')
    const [projectId, setprojectId] = useState('')
    const [students, setStudents] = useState('')
    const [milestoneWork, setMilestoneWork] = useState('')
    const [myProject, setMyProject] = useState(null);


    const getMilestoneMarkings = async () => {
        await axios.get(`marks?project_id=${projectId}`)
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
        await axios.get(`work?pro_id=${projectId}`)
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
        await axios.get(`studentprojectwise?pro_id=${projectId}`)
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
        FindMyProject()
    }, []);


    const FindMyProject = async () => {
        await axios.get(`projectlist`)
            .then((res) => {
                console.log(res, "ppp")
                if (res.data.status == 200) {

                    setMyProject(res.data.data)
                    setprojectId(res.data.data.id)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {

        if (projectId) {
            getProjectMembers()
            getMilestoneWork()
            getMilestoneMarkings()
        }
    }, [projectId]);




    // updating a project


    const [ShowAddStudent, setShowAddStudent] = useState(false)
    const [allStudents, setallStudents] = useState([])


    const [searchQuery, setSearchQuery] = useState("");
    const filteredstudents = allStudents ? allStudents.filter((std) =>
        std.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
        :
        null;







    return (
        <>

            {myProject ?


                <div className='ViewProjectMainDiv'>




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
                                <tr><td colSpan={4}>no Milestone Marked yet</td></tr>
                            }
                        </tbody>
                    </Table>

                </div>



                :
                <p>Loading</p>
            }
        </>
    )
}

export default ProjectDetails