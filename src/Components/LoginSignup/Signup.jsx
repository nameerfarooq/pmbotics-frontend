import React, { useContext, useState } from 'react'
import './LoginSignup.css'
import Header from '../Dashboard/Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Alert from 'react-bootstrap/Alert';
import GlobalContext from '../../Context/GlobalContext';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const { departments } = useContext(GlobalContext)
    const [data, setdata] = useState({
        "email": "",
        "password": "",
        "name": "",
        "facultyid": "",
        "designation": "",
        "phoneno": "",
        "department": '1'
    })
    const navigate = useNavigate()
    const Navigate = () => {
        navigate('/login')
    }
    async function createuser(e) {
        e.preventDefault()
        console.log(data)
        const response = await axios.post("https://pmbotics.herokuapp.com/registerpmo", data)
            .then((res) => {
                console.log(res)
                if (res.data.message === "Success") {
                    alert("Success")
                    setdata({
                        "email": "",
                        "password": "",
                        "name": "",
                        "facultyid": "",
                        "designation": "",
                        "phoneno": "",
                        "department": '1'
                    })
                    Navigate()
                }
            }


            )
            .catch(
                err => console.log("Error Got", err)
            )

    }

    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    };



    return (
        <div>
            <Header />
            <h2 className='Heading1'>
                Register as FYP Coordinator
            </h2>
            <div className="formsHolder">
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" id='email' name='email' value={data.email} onChange={handleChange} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" id='name' name='name' value={data.name} onChange={handleChange} placeholder="name" />
                    </Form.Group>


                    <div className="fieldHolder">

                        <Form.Group className="mb-3" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" id='password' name='password' value={data.password} onChange={handleChange} placeholder="Password" />
                        </Form.Group>
                        <span className='spacer'></span>

                    </div>




                    <div className="fieldHolder">

                        <Form.Group className="mb-3" >
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text" name='designation' id='designation' value={data.designation} onChange={handleChange} placeholder="Designation" />
                        </Form.Group>

                        <span className='spacer'></span>

                        <Form.Group className="mb-3" >
                            <Form.Label>FacultyID</Form.Label>
                            <Form.Control type="text" id='facultyid' name='facultyid' value={data.facultyid} onChange={handleChange} placeholder="faculty id" />
                        </Form.Group>

                    </div>
                    <div className="fieldHolder">

                        <Form.Group className="mb-3" >
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="tel" id='phoneno' name='phoneno' value={data.phoneno} onChange={handleChange} placeholder="Phone no" />
                        </Form.Group>

                        <span className='spacer'></span>

                        <Form.Group className="mb-3" >
                            <Form.Label>Department</Form.Label>

                            <Form.Select required value={data.department} name='department' id='department' onChange={handleChange} aria-label="Department">
                                {
                                    departments.map((depart) => {
                                        return <option key={depart.id} value={depart.id}>{depart.name}</option>
                                    })

                                }
                            </Form.Select>

                        </Form.Group>

                    </div>


                    <Button variant="primary" onClick={createuser}>
                        Submit
                    </Button>

                </Form>


            </div>
        </div>
    )
}

export default Signup