import React, { useState, useEffect, useContext } from 'react';
import axios from '../../axiosConfig';
import '../Project/projects.css'
import Form from 'react-bootstrap/Form';
import GlobalContext from '../../Context/GlobalContext';
function AddStudents() {



  // Getting departments (GET API)
  const {departments} = useContext(GlobalContext)
  






  const [studentData, setStudentData] = useState({
    role: 'student',
    email: '',
    password: '',
    name: '',
    rollno: '',
    seatno: '',
    enrollmentno: '',
    phoneno: '',
    department: '1'
  });
  const handleSubmit = async e => {
    e.preventDefault();

    await axios.post('createUser', studentData)
      .then(response => {
        alert(JSON.stringify(response.data.message));
        console.log(response.data.message)
        if (response.data.message === "Success") {
          setStudentData({
            role: 'student',
            email: '',
            password: '',
            name: '',
            rollno: '',
            seatno: '',
            enrollmentno: '',
            phoneno: '',
            department: '1'
          });
        }
      })
      .catch(error => {
        alert(error)
        console.log(error)

      });

    // clear form data after successful submission




  };


  const handleChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className='CreateProjectScreen'>

        <h2 className='CP-Title'>
          Add Student
        </h2>
        <h3 className='CP-Title2'>
          Add Student details
        </h3>

        <div className='FormMainContainer'>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input required type="email" className="form-control" id="email" name="email" value={studentData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input required type="password" className="form-control" id="password" name="password" value={studentData.password} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input required type="text" className="form-control" id="name" name="name" value={studentData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="faculty_no">Roll Number</label>
              <input required type="text" className="form-control" id="rollno" name="rollno" value={studentData.rollno} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="field_of_interest">Seat Number</label>
              <input required type="text" className="form-control" id="seatno" name="seatno" value={studentData.seatno} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="field_of_interest">Enrollment  Number</label>
              <input required type="text" className="form-control" id="enrollmentno" name="enrollmentno" value={studentData.enrollmentno} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="phone_no">Phone Number</label>
              <input required type="text" className="form-control" id="phoneno" name="phoneno" value={studentData.phoneno} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <Form.Select required id="department" name="department" value={studentData.department} onChange={handleChange} aria-label="Default select example">

                {
                  departments.map((depart) => {
                    return <option key={depart.id} value={depart.id}>{depart.name}</option>
                  })

                }


              </Form.Select>
            </div>
            <button type="submit" className=" m-2 btn btn-primary">Submit</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default AddStudents