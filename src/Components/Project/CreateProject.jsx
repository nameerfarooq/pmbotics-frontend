import axios from '../../axiosConfig';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalContext from '../../Context/GlobalContext';
import MyContext from '../../Context/MyContext';
function CreateProject() {

    const { departments } = useContext(GlobalContext)
    // GET API, getting supervisors list from database
    const {supervisors, refreshProjects} = useContext(MyContext)
const navigate = useNavigate()
 
    



    console.log(supervisors)



    const [project, setProject] = useState({
        "title": "",
        "year": "",
        "batch": "",
        "description": "",
        "domain": "",
        "no_of_group_members": '',
        "supervisor": '',
        "department": 1
    })



    async function Submit(e) {
        e.preventDefault()

       
        const response = await axios.post("createproject", project)
            .then(res => {
                console.log(res)
                if (res.data.message === "Success") {
                    alert(res.data.message)
                    ClearForm(e)
                    refreshProjects()
                    navigate('/fyp_panel/')
                }
                
                
            }

            )
            .catch((err)=>{
                console.log(err)
            })

    }
    const handleChange = (e) => {
        setProject({ ...project, [e.target.name]: e.target.value });
    };
    function ClearForm(e) {
        e.preventDefault()
        setProject({
            "title": "",
            "year": "",
            "batch": "",
            "description": "",
            "domain": "",
            "no_of_group_members": '',
            "supervisor": '',
            "department": 1
        })

    }
    return (
        <div className='CreateProjectScreen'>

            <h2 className='CP-Title'>
                Create Project
            </h2>
            <h3 className='CP-Title2'>
                Add project details
            </h3>

            {/* <button onClick={ getSupervisorList}>get supers</button> */}
            <div className='FormMainContainer'>
                <Form>






                    <label >Project Name</label>
                    <Form.Control required name='title' id='title' value={project.title} onChange={handleChange} type="text" />

                    <label >Project Description</label>
                    <Form.Control required name='description' id='description' value={project.description} onChange={handleChange} type="text" />

                    <label >year</label>
                    <Form.Control required name='year' id='year' value={project.year} onChange={handleChange} type="text" />

                    <label >Batch</label>
                    <Form.Control required name='batch' id='batch' value={project.batch} onChange={handleChange} type="text" />

                    <label >Number of group members</label>
                    <Form.Select required name='no_of_group_members' id='no_of_group_members' value={project.no_of_group_members} onChange={handleChange} aria-label="Default select example">
                        <option>select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>

                    </Form.Select>




                    <label >Project domain</label>
                    <Form.Control required name='domain' id='domain' value={project.domain} onChange={handleChange} type="text" />




                    <label >Assign Supervisor</label>
                    <Form.Select required name='supervisor' value={project.supervisor} onChange={handleChange} aria-label="Default select example">
                    <option  value=''>select</option>
                        {
                            supervisors.map((value, key) => {

                                return <option key={key} value={value.id}>{value.name}</option>
                            })

                        }


                    </Form.Select>
                    <label >Department</label>
                    <Form.Select required name='department' value={project.department} onChange={handleChange} aria-label="Default select example">

                        {
                            departments.map((value, key) => {
                                return <option key={key} value={value.id}>{value.name}</option>
                            })

                        }


                    </Form.Select>







                    <div className='PC-btnHolder'>
                        <Button onClick={ClearForm} className='PC-btn1' variant="secondary" type="submit">
                            Clear
                        </Button>
                        <Button onClick={Submit} className='PC-btn2' variant="primary" type="submit">
                            Create Project
                        </Button>
                    </div>
                </Form>

            </div>
        </div>
    )
}

export default CreateProject