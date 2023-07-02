import React, { useContext, useState, useEffect, useRef } from 'react'
import './LoginSignup.css'
import Header from '../Dashboard/Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import GlobalContext from '../../Context/GlobalContext';
import { useNavigate } from 'react-router-dom';

function Register() {
    const { departments, handleLogout } = useContext(GlobalContext)
    const [show, setshow] = useState(0)
    const [data, setdata] = useState({
        "organization": "",
        "email": "",
        "password": "",
        "confirm_password": "",
        "name": "",
        "employeeId": "",
        "phoneno": ""
    })
    const navigate = useNavigate()
    const Navigate = () => {
        navigate('/login')
    }

    useEffect(() => {
        handleLogout()
    }, [])

    async function registerOrg(e) {
        // e.preventDefault()
        // if (data.password === data.confirm_password) {
        //     const response = await axios.post("https://pmbotics.herokuapp.com/registerpmo", data)
        //         .then((res) => {
        //             if (res.data.message === "Success") {
        //                 alert("Success")
        //                 setdata({
        //                     "organization": "",
        //                     "email": "",
        //                     "password": "",
        //                     "confirm_password": "",
        //                     "name": "",
        //                     "employeeId": "",
        //                     "phoneno": ""
        //                 })

        //             }
        //             else if (res.data.exception === "some exception") {
        //                 let errorMessages = [];
        //                 if (typeof res.data.message === "object") {
        //                     // If the message is an object, extract the error messages from it
        //                     for (let field in res.data.message) {
        //                         if (Array.isArray(res.data.message[field])) {
        //                             errorMessages.push(...res.data.message[field]);
        //                         }
        //                     }
        //                 } else {
        //                     // Otherwise, add the message to the error messages array
        //                     errorMessages.push(res.data.message);
        //                 }
        //                 if (errorMessages.length > 0) {
        //                     // If there are error messages, show them in an alert box
        //                     alert(errorMessages.join("\n"));
        //                 } else {
        //                     // Otherwise, show the exception message
        //                     alert(res.data.exception);
        //                 }
        //             } else {
        //                 alert(res.data.exception);
        //             }
        //         }


        //         )
        //         .catch(
        //             err => console.log("Error Got", err)
        //         )
        // }
        // else {
        //     alert("password not matched")
        // }
        setshow(1)
    }
    const verifyOTP = () => {
        setshow(2)
    }
    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    };
    const inputRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ];

    const handleChange1 = (index, e) => {
        const { value } = e.target;

        if (value.length === 1) {
            // Set the current digit in the current input field
            e.target.value = value;

            if (index < inputRefs.length - 1) {
                // Move focus to the next input field if the current input is filled
                inputRefs[index + 1].current.focus();
            }
        }

        if (!value && index > 0) {
            // Move focus to the previous input field if the current input is empty
            inputRefs[index - 1].current.focus();
        }
    };

    return (
        <div>
            <Header />
            {show === 0 &&
                <>
                    <h2 className='Heading1'>
                        Register Your Organization
                    </h2>
                    <div className="formsHolder">
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Organization Name</Form.Label>
                                <Form.Control type="text" id='organization' name='organization' value={data.organization} onChange={handleChange} placeholder="Enter organization name" />

                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Admin Email address</Form.Label>
                                <Form.Control type="email" id='email' name='email' value={data.email} onChange={handleChange} placeholder="Enter organization's Admin email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Admin Name</Form.Label>
                                <Form.Control type="text" id='name' name='name' value={data.name} onChange={handleChange} placeholder="name" />
                            </Form.Group>
                            <div className="fieldHolder">
                                <Form.Group className="mb-3" >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" id='password' name='password' value={data.password} onChange={handleChange} placeholder="Password" />
                                </Form.Group>
                                <span className='spacer'></span>
                                <Form.Group className="mb-3" >
                                    <Form.Label> Confirm Password</Form.Label>
                                    <Form.Control type="password" id='confirm_password' name='confirm_password' value={data.confirm_password} onChange={handleChange} placeholder="Re-enter your Password" />
                                </Form.Group>
                            </div>
                            <div className="fieldHolder">

                                {/* <Form.Group className="mb-3" >
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text" name='designation' id='designation' value={data.designation} onChange={handleChange} placeholder="Designation" />
                        </Form.Group> */}
                                <Form.Group className="mb-3" >
                                    <Form.Label>Employee ID</Form.Label>
                                    <Form.Control type="text" id='employeeId' name='employeeId' value={data.employeeId} onChange={handleChange} placeholder="faculty id" />
                                </Form.Group>

                                <span className='spacer'></span>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="tel" id='phoneno' name='phoneno' value={data.phoneno} onChange={handleChange} placeholder="Phone no" />
                                </Form.Group>

                            </div>
                            <div className="fieldHolder">

                                {/* <Form.Group className="mb-3" >
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="tel" id='phoneno' name='phoneno' value={data.phoneno} onChange={handleChange} placeholder="Phone no" />
                        </Form.Group> */}

                                <span className='spacer'></span>

                                {/* <Form.Group className="mb-3" >
                            <Form.Label>Department</Form.Label>

                            <Form.Select required value={data.department} name='department' id='department' onChange={handleChange} aria-label="Department">
                                {
                                    departments.map((depart) => {
                                        return <option key={depart.id} value={depart.id}>{depart.name}</option>
                                    })

                                }
                            </Form.Select>

                        </Form.Group> */}

                            </div>


                            <Button variant="primary" onClick={registerOrg}>
                                Register
                            </Button>

                        </Form>


                    </div>
                    <div className='centered-div' onClick={Navigate}>
                        Already have an account? <u>Login</u>
                    </div>
                </>
            }
            {show === 1 &&
                <>

                    <div className="formsHolder otp-form">
                        <h1>Email Verification</h1>
                        <p>We have sent code to your email
                            <br />
                            Nameerfarooq18@gmail.com
                        </p>

                        <div className='otp-input-holder'>
                            {inputRefs.map((inputRef, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength={1}
                                    ref={inputRef}
                                    onChange={(e) => handleChange1(index, e)}
                                    className='otp-input'
                                />
                            ))}

                        </div>
                        <p>Did'nt recieved code? <span>Resend</span></p>
                        <button onClick={verifyOTP}>Verify Email</button>
                    </div>

                </>
            }
            {show === 2 &&
                <>
                   
                    <div className="formsHolder otp-verified">

                        <svg width="299" height="181" viewBox="0 0 299 181" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="277.181" y="100.673" width="13.5077" height="4.82667" transform="rotate(0.547069 277.181 100.673)" fill="#05037C" fill-opacity="0.5" />
                            <rect x="245.457" y="154.805" width="13.5077" height="4.82667" transform="rotate(19.6012 245.457 154.805)" fill="#05037C" fill-opacity="0.5" />
                            <rect x="236.993" y="22.7409" width="13.5077" height="4.82667" transform="rotate(-31.4837 236.993 22.7409)" fill="#05037C" fill-opacity="0.5" />
                            <rect x="282.809" y="56.106" width="14.553" height="4.158" transform="rotate(-45 282.809 56.106)" fill="#05037C" fill-opacity="0.5" />
                            <rect x="293.1" y="59.046" width="14.553" height="4.158" transform="rotate(-135 293.1 59.046)" fill="#05037C" fill-opacity="0.5" />
                            <rect width="13.5077" height="4.82667" transform="matrix(-0.748429 0.663215 0.663215 0.748429 42.4864 118.92)" fill="#05037C" fill-opacity="0.5" />
                            <rect width="13.5077" height="4.82667" transform="matrix(-0.994341 -0.106239 -0.106239 0.994341 40.1409 30.4496)" fill="#05037C" fill-opacity="0.5" />
                            <rect width="14.553" height="4.158" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 16.0932 75.4127)" fill="#05037C" fill-opacity="0.5" />
                            <rect width="14.553" height="4.158" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 5.80266 78.3527)" fill="#05037C" fill-opacity="0.5" />
                            <circle cx="147.7" cy="90.5" r="90.5" fill="#05037C" fill-opacity="0.5" />
                            <circle cx="147.7" cy="90.5" r="62.7467" fill="#05037C" />
                            <path d="M134.385 99.1363C134.858 98.3379 135.301 97.5395 135.804 96.7707C139.654 90.7311 144.516 85.3996 150.176 81.0097C156.857 75.8748 164.135 71.5657 171.85 68.1762C174.047 67.0254 176.369 66.1324 178.77 65.5149C179.687 65.3375 180.662 65.2783 181.727 65.16V65.367L181.195 65.781C174.209 70.793 167.723 76.4672 161.826 82.7248C153.454 91.5839 146.313 101.53 140.595 112.295C140.238 112.999 139.822 113.671 139.353 114.306C138.803 115.123 137.979 115.716 137.029 115.977C136.079 116.237 135.067 116.148 134.178 115.725C132.351 114.917 130.717 113.727 129.387 112.236C126.13 108.751 123.373 104.83 121.196 100.585C120.225 98.8693 119.347 97.1024 118.565 95.2922C118.144 94.271 117.943 93.173 117.973 92.069C118.022 91.3434 118.214 90.6347 118.538 89.9838C118.863 89.3329 119.313 88.7529 119.863 88.2771C120.413 87.8014 121.052 87.4394 121.743 87.2122C122.433 86.985 123.162 86.897 123.887 86.9534C124.832 87.0458 125.747 87.3358 126.572 87.8044C127.397 88.2731 128.115 88.91 128.678 89.6738C129.921 91.376 130.973 93.2106 131.812 95.1443C132.522 96.5341 133.32 97.8944 134.06 99.2546L134.385 99.1363Z" fill="white" />
                        </svg>
                        <p>Verified!</p>
                        <p>Hurrah! You have successfully verified the account</p>


                    </div>

                </>
            }
        </div>
    )
}

export default Register