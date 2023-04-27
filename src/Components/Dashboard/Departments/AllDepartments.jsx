import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function AllDepartments() {
    const [departments, setDepartments] = useState([])
    const [selectedDepartment, setselectedDepartment] = useState('')
    const [show, setShow] = useState(false)

    const handleShow = () => { setShow(true) }
    const handleClose = () => { setShow(false) }
    const API_URI_departments = 'https://pmbotics.herokuapp.com/departmentcrud'
    const getDepartments = async () => {
        try {
            const fetchData = await axios.get(API_URI_departments, {

            })
            setDepartments(fetchData.data.data)



        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        getDepartments()


    }, [])


    const DeleteDepartment = async (e) => {
        console.log(e)
        await axios.delete('https://pmbotics.herokuapp.com/departmentcrud', { data: { id: e } })
            .then(response => {
                alert('Department deleted successfully:', response.data);
                console.log(response)
                if (response.data.message === "Successfuly deleted") {
                    setDepartments(prevDepartments => prevDepartments.filter(department => department.id !== e))

                }
            })
            .catch(error => {
                alert('An error occurred while deleting department:', error);
            });

    }

    const updateClicked = (e) => {
        setselectedDepartment(e)
        handleShow()

    }

    const handleChange = (e) => {
        setselectedDepartment({ ...selectedDepartment, [e.target.name]: e.target.value });
    };



    const updateDepartment = async () => {
        await axios.patch('https://pmbotics.herokuapp.com/departmentcrud', selectedDepartment)
            .then(res => {
                console.log(res.data);
                if (res.data.message === "Success") {
                    // setDepartments(prevDepartments => prevDepartments.map(dept => dept.id === selectedDepartment.id ? res.data : dept));
                    console.log(departments)
                    setselectedDepartment('')
                    handleClose()
                    getDepartments()
                }
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className='MainContainerFP'>

            {/* showing popup for editing a student */}

            {/* model started for editing selected student */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Department</Modal.Title>
                </Modal.Header>



                <Modal.Body>
                    <form >
                        {/* <div className="form-group">
                <label htmlFor="email">Email</label>
                <input required type="email" className="form-control" id="email" name="email" value={selectedSupervisor.email} onChange={handleChange} />
              </div> */}
                        {/* <div className="form-group">
                <label htmlFor="password">Password</label>
                <input required type="password" className="form-control" id="password" name="password" value={selectedSupervisor.password} onChange={handleChange} />
              </div> */}
                        {/* <div className="form-group">
                <label htmlFor="name">Name</label>
                <input required type="text" className="form-control" id="name" name="name" value={selectedSupervisor.name} onChange={handleChange} />
              </div> */}
                        <div className="form-group">
                            <label htmlFor="name">Department Name</label>
                            <input required type="text" className="form-control" id="name" name="name" value={selectedDepartment.name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="hod">HOD</label>
                            <input required type="text" className="form-control" id="hod" name="hod" value={selectedDepartment.hod} onChange={handleChange} />
                        </div>

                        {/* <div className="form-group">
                <label htmlFor="phone_no">Phone Number</label>
                <input required type="text" className="form-control" id="phone_no" name="phone_no" value={selectedSupervisor.phone_no} onChange={handleChange} />
              </div> */}


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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {departments.map((department) => (

                            <tr key={department.id}>
                                <td>1</td>
                                <td>{department.name}</td>
                                <td>{department.hod}</td>
                                <td>
                                    <button className='Icon-btn-EM'>
                                        <img alt='iconsimages' onClick={() => updateClicked(department)} src={require('../../../Images/pencil.png')} className="Icons-EM" />
                                    </button>
                                    <button className='Icon-btn-EM'>
                                        <img alt='iconsimages' onClick={() => DeleteDepartment(department.id)} src={require('../../../Images/delete.png')} className="Icons-EM" />
                                    </button>
                                </td>
                            </tr>
                        ))}


                        <tr>
                            <td>

                            </td>
                            <td colSpan={3}><button className='Icon-btn-EM'>
                                Add new <span style={{ 'marginLeft': '5px' }}><img alt='iconsimages' src={require('../../../Images/plus.png')} className="Icons-EM" /></span>

                            </button></td>

                        </tr>

                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default AllDepartments