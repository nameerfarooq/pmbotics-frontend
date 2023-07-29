import React, { useState, useEffect } from 'react';
import axios from '../../../axiosConfig';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';

function AllDepartments({ setshowScreen }) {
    const [hodsList, sethodsList] = useState([])
    const [departments, setDepartments] = useState([])
    const [selectedDepartment, setselectedDepartment] = useState('')
    const [show, setShow] = useState(false)

    const handleShow = () => { setShow(true) }
    const handleClose = () => { setShow(false) }
    const API_URI_departments = 'departmentcrud'
    const getDepartments = async () => {
        try {
            const fetchData = await axios.get(API_URI_departments)
            setDepartments(fetchData.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    const getHods = async () => {
        await axios.get(`/allfyppanel?dep_id=${selectedDepartment.id}`)
            .then((res) => {
                if (res.data.status === 200) {
                    sethodsList(res.data.data)
                }
            })
            .catch((err) => {
                alert(err)
            })
    }

    useEffect(() => {
        getDepartments()
    }, [])

    // const DeleteDepartment = async (e) => {
    //     await axios.delete(API_URI_departments, { data: { id: e } })
    //         .then(res => {
    //             alert('Department deleted successfully:', res.data);
    //             if (res.data.message === "Successfuly deleted") {
    //                 setDepartments(prevDepartments => prevDepartments.filter(department => department.id !== e))
    //             }
    //             else {
    //                 alert(res.data.message)
    //             }

    //         })
    //         .catch(error => {
    //             alert('An error occurred while deleting department:', error);
    //         });

    // }

    const updateClicked = (e) => {
        setselectedDepartment(e)
        handleShow()

    }
    useEffect(() => {
        getHods()
    }, [selectedDepartment])
    const handleChange = (e) => {
        setselectedDepartment({ ...selectedDepartment, [e.target.name]: e.target.value });
    };



    const updateDepartment = async () => {
        console.log(selectedDepartment, "department is sleected")
        await axios.patch(API_URI_departments, {
            "dep_id": selectedDepartment.id,
            "name": selectedDepartment.name,
            "hod_id": selectedDepartment.hod
        })
            .then(res => {
                if (res.data.message === "Success") {
                    setselectedDepartment('')
                    handleClose()
                    getDepartments()
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
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <>


            <div className='MainContainerFP'>

                {/* showing popup for editing a student */}

                {/* model started for editing selected student */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Department</Modal.Title>
                    </Modal.Header>



                    <Modal.Body>
                        <form >

                            <div className="form-group">
                                <label htmlFor="name">Department Name</label>
                                <input required type="text" className="form-control" id="name" name="name" value={selectedDepartment.name} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="hod">HOD</label>
                                {/* <input required type="text" className="form-control" id="hod" name="hod" value={selectedDepartment.hod} onChange={handleChange} /> */}
                            </div>
                            <Form.Select required value={selectedDepartment.hod} name='hod' id='hod' onChange={handleChange} aria-label="Department">
                                {
                                    hodsList.map((hod) => {
                                        return <option key={hod.id} value={hod.id}>{hod.name}</option>
                                    })

                                }
                            </Form.Select>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={updateDepartment}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Model ended */}
                <h2 className='Heading BlueTxt'>
                    All Departments
                </h2>
                <div>
                    <Table striped bordered variant="light">
                        <thead>
                            <tr key={'header-row'}>
                                <th>#</th>
                                <th>Department Name</th>
                                <th>HOD</th>
                                <th style={{ textAlign: "center" }}>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {departments.length > 0 &&

                                departments.map((department, Index) => (

                                    <tr key={department.id}>
                                        <td>{Index + 1}</td>
                                        <td>{department.name}</td>
                                        <td>{department.hod}</td>
                                        <td style={{ textAlign: "center" }}>
                                            <button className='Icon-btn-EM'>
                                                <img alt='iconsimages' onClick={() => {
                                                    updateClicked(department)

                                                }} src={require('../../../Images/pencil.png')} className="Icons-EM" />
                                            </button>
                                            {/* <button className='Icon-btn-EM'>
                                                <img alt='iconsimages' onClick={() => DeleteDepartment(department.id)} src={require('../../../Images/delete.png')} className="Icons-EM" />
                                            </button> */}
                                        </td>
                                    </tr>
                                ))

                            }

                            <tr>
                                <td>

                                </td>
                                <td colSpan={3}>
                                    <button onClick={() => setshowScreen(1)} className='Icon-btn-EM'>
                                        Add new <span style={{ 'marginLeft': '5px' }}><img alt='iconsimages' src={require('../../../Images/plus.png')} className="Icons-EM" /></span>
                                    </button>
                                </td>

                            </tr>

                        </tbody>
                    </Table>
                </div>
            </div>

        </>
    )
}

export default AllDepartments