import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function CreateProject() {


    // GET API, getting supervisors list from database
    const [supervisors, setSupervisors] = useState([])
    const API_URI_supervisorslist = 'https://pmbotics.herokuapp.com/supervisorlist'
    const getSupervisors = async () => {
        try {
            const fetchData = await axios.get(API_URI_supervisorslist, {

            })
            setSupervisors(fetchData.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        window.addEventListener('load', getSupervisors)
        return () => {
            window.removeEventListener('load', getSupervisors)
        }
    }, [supervisors])





    const supervisorsList = {}
    // eslint-disable-next-line
    supervisors.map((value) => {
        supervisorsList[value.id] = value.name
    })
    let supervisorsArray = Object.entries(supervisorsList)
    
    
    
    const [Batch, setBatch] = useState("")
    const [Program, setProgram] = useState("")
    const [ProjectName, setProjectName] = useState("")
    const [ProjectDescription, setProjectDescription] = useState("")
    const [NoGroupMembers, setNoGroupMembers] = useState("")
    const [ProjectType, setProjectType] = useState("")
    const [Supervisor, setSupervisor] = useState("")
    // const projTitle = []
    const item = {
        "title": ProjectName,
        "batch": Batch,
        "description": ProjectDescription,
        "domain": ProjectType,
        "no_of_group_members": NoGroupMembers,
        "supervisor": Supervisor,
        "department": Program,
    }




    async function Submit(e) {
        e.preventDefault()

        // getProjectList(e)





        // API integration


// eslint-disable-next-line
        const response = await axios.post("https://pmbotics.herokuapp.com/project", item)

            .then(res => {
                console.log(res)
                if (res.data.message === "success") {
                    alert(res.data.message)
                    ClearForm(e)
                }
                else {
                    alert("Error occured")

                }
                ;
            }

            )


    }
    function ClearForm(e) {
        e.preventDefault()
        setBatch("")
        setProgram("")
        setProjectName("")
        setProjectDescription("")
        setNoGroupMembers("")
        setProjectType("")
        setSupervisor("")

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

                    <label >Batch</label>
                    <Form.Select required value={Batch} onChange={(e) => setBatch(e.target.value)} aria-label="Default select example">
                        <option>select</option>
                        <option value="19b">19b</option>
                        <option value="18b">18b</option>
                        <option value="17b">17b</option>
                        <option value="16b">16b</option>
                        <option value="15b">15b</option>
                        <option value="14b">14b</option>
                        <option value="13b">13b</option>
                        <option value="12b">12b</option>
                        <option value="11b">11b</option>
                        <option value="10b">10b</option>
                    </Form.Select>



                    <label >Program</label>
                    <Form.Select required value={Program} onChange={(e) => setProgram(e.target.value)} aria-label="Default select example">
                        <option>select</option>
                        <option value="1">Computer Science</option>
                        <option value="3">Software Engineering</option>
                        <option value="2">Electrical Engineering</option>
                        <option value="4">Power Engineering</option>
                        <option value="5">Electronics Engineering</option>
                        <option value="6">Computer Engineering</option>

                    </Form.Select>




                    <label >Project Name</label>
                    <Form.Control required value={ProjectName} onChange={(e) => setProjectName(e.target.value)} type="text" />

                    <label >Project Description</label>
                    <Form.Control required value={ProjectDescription} onChange={(e) => setProjectDescription(e.target.value)} type="text" />


                    <label >Number of group members</label>
                    <Form.Select required value={NoGroupMembers} onChange={(e) => setNoGroupMembers(e.target.value)} aria-label="Default select example">
                        <option>select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>

                    </Form.Select>




                    <label >Project type</label>
                    <Form.Control required value={ProjectType} onChange={(e) => setProjectType(e.target.value)} type="text" />




                    <label >Assign Supervisor</label>
                    <Form.Select required value={Supervisor} onChange={(e) => setSupervisor(e.target.value)} aria-label="Default select example">
                    
                        {
                            supervisorsArray.map((value, key) => {
                                const a = value[0]
                                const b = value[1]

                                return <option key={key} value={a}>{b}</option>
                            })

                        }


                    </Form.Select>







                    <div className='PC-btnHolder'>
                        <Button onClick={ClearForm} className='PC-btn1' variant="secondary" type="submit">
                            Cancel
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