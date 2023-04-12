import React, { useState } from 'react'
import './LoginSignup.css'
import Header from '../Dashboard/Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Alert from 'react-bootstrap/Alert';

function Signup() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [Confirmpassword, setConfirmpassword] = useState("")
    const [name, setname] = useState("")
    const [Designation, setDesignation] = useState("")
    const [FacultyID, setFacultyID] = useState("")

    function ValidatePassword(e) {
        if (password === Confirmpassword) {
            // console.log("Password Matched")
            SubmitForm(e)
        }
        else {
            console.log("password not matched");
            alert("password Unmatched, Enter Password Correctly !")
        }
    }

    async function SubmitForm(e) {
        e.preventDefault()

        let item = {
            "email": email,
            "password": password,
            "name": name,
            "facultyid": FacultyID,
            "designation": Designation
        }
        console.log(item)
        
        const response = await axios.post("http://127.0.0.1:8000/register", item)
            .then(
                res => console.log("response got", res)
            )
            .catch(
                err => console.log("Error Got", err)
            )

    }

    

    return (
        <div>
            <Header />
            <h2 className='Heading1'>
                Register as FYP Coordinator
            </h2>
            <div className="formsHolder">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder="name" />
                    </Form.Group>


                    <div className="fieldHolder">

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Password" />
                        </Form.Group>
                        <span className='spacer'></span>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="text" value={Confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} placeholder="Password" />
                        </Form.Group>
                    </div>




                    <div className="fieldHolder">

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text" value={Designation} onChange={(e) => setDesignation(e.target.value)} placeholder="name" />
                        </Form.Group>

                        <span className='spacer'></span>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>FacultyID</Form.Label>
                            <Form.Control type="text" value={FacultyID} onChange={(e) => setFacultyID(e.target.value)} placeholder="name" />
                        </Form.Group>

                    </div>


                    <Button onClick={ValidatePassword} variant="primary" >
                        Submit
                    </Button>
                    
                </Form>


            </div>
        </div>
    )
}

export default Signup