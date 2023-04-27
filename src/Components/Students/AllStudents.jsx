import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../Project/projects.css'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function AllStudents() {

  const [students, setStudents] = useState([])
  const [selectedStudent, setselectedStudent] = useState('')
  const [show, setShow] = useState(false);
  const [departments, setDepartments] = useState([])
  const navigate = useNavigate()
  const gotoaddstudent = () => {
    navigate('/add-student')
  }




  const API_URI_studentslist = 'https://pmbotics.herokuapp.com/alluser/?role=student'
  const getStudents = async () => {
    try {
      const fetchData = await axios.get(API_URI_studentslist)
      setStudents(fetchData.data.data)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getDepartments()
    getStudents()
  }, [])

  // getting all departments

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


  // deleting student

  const DeleteStudent = async (e) => {
    await axios.delete(`https://pmbotics.herokuapp.com/deletestudent/${e}`)
      .then(response => {
        alert('Student deleted successfully:', response.data);
        console.log(response)
        if (response.data.message === "Successfuly deleted") {
          setStudents(prevStudents => prevStudents.filter(student => student.id !== e))

        }
      })
      .catch(error => {
        alert('An error occurred while deleting student:', error);
      });

  }



  // Updating selected student

  // Update Supervisor
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const updateClicked = (ClickedStudent) => {
    setselectedStudent(ClickedStudent)
    handleShow()

  }

  const UpdateStudent = async () => {
    // eslint-disable-next-line
    const response = await axios.patch('https://pmbotics.herokuapp.com/updatestudent',
      selectedStudent)
      .then(res => {
        console.log(res.data);
        if (res.data.message === "Success") {
          // setStudents(prevStudents => prevStudents.map(student => student.id === selectedStudent.id ? res.data : student));
          // console.log(res.data)
          setselectedStudent('')
          handleClose()
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleChange = (e) => {
    setselectedStudent({ ...selectedStudent, [e.target.name]: e.target.value });
  };







  return (
    <div>



      {/* showing popup for editing a student */}

      {/* model started for editing selected student */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Student</Modal.Title>
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
              <label htmlFor="rollno">Roll Number</label>
              <input required type="text" className="form-control" id="rollno" name="rollno" value={selectedStudent.rollno} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="seatno">Seat Number</label>
              <input required type="text" className="form-control" id="seatno" name="seatno" value={selectedStudent.seatno} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="enrollmentno">Enrollement Number</label>
              <input required type="text" className="form-control" id="enrollmentno" name="enrollmentno" value={selectedStudent.enrollmentno} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <Form.Select required id="department" name="department" value={selectedStudent.department} onChange={handleChange} aria-label="Default select example">

                {
                  departments.map((depart) => {
                    return <option key={depart.id} value={depart.id}>{depart.name}</option>
                  })

                }


              </Form.Select>
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
          <Button variant="primary" onClick={UpdateStudent}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Model ended */}


      <div className='MainContainerFP'>
        <h2 className='Heading BlueTxt'>
          All Students
        </h2>
        <div>
          <Table striped bordered variant="light">
            <thead>
              <tr key={'header-row'}>
                <th>#</th>
                <th>Name</th>
                <th>Roll #</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {console.log(students)}
              {students.map((student) => (

                <tr key={student.rollno}>
                  <td>1</td>
                  <td>{student.name}</td>
                  <td>{student.rollno}</td>
                  <td>
                    <button className='Icon-btn-EM'>
                      <img alt='iconsimages' onClick={() => updateClicked(student)} src={require('../../Images/pencil.png')} className="Icons-EM" />
                    </button>
                    <button className='Icon-btn-EM'>
                      <img alt='iconsimages' onClick={() => DeleteStudent(student.id)} src={require('../../Images/delete.png')} className="Icons-EM" />
                    </button>
                  </td>
                </tr>
              ))}


              <tr>
                <td>

                </td>
                <td colSpan={3}><button className='Icon-btn-EM' onClick={() => { gotoaddstudent() }}>
                  Add new <span style={{ 'marginLeft': '5px' }}><img alt='iconsimages' src={require('../../Images/plus.png')} className="Icons-EM" /></span>

                </button></td>

              </tr>

            </tbody>
          </Table>
        </div>
      </div>







    </div>
  )
}

export default AllStudents