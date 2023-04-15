import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import '../Project/projects.css'
import Form from 'react-bootstrap/Form';
function AddSupervisor() {


  // Getting departments (GET API)
  const [departments, setDepartments] = useState([])
  const API_URI_departments = 'https://pmbotics.herokuapp.com/departmentlist'

  useEffect(() => {
    const getDepartments = async () => {
      try {
        const fetchData = await axios.get(API_URI_departments, {

        })
        setDepartments(fetchData.data)
        
      } catch (error) {
        console.log(error)
      }
    }
    getDepartments()
  }, [])

  const deptList = {}
    // eslint-disable-next-line
    departments.map((value) => {
      deptList[value.id] = value.name
    })
    let deptArray = Object.entries(deptList)


  // creating supervisors (POST API)
  const [supervisorData, setSupervisorData] = useState({
    role: 'supervisor',
    email: '',
    password: '',
    name: '',
    faculty_no: '',
    field_of_interest: '',
    phone_no: '',
    department: '',
  });
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('https://pmbotics.herokuapp.com/createUser', supervisorData);
      console.log(res.data);
      // clear form data after successful submission
      setSupervisorData({
        role: 'supervisor',
        email: '',
        password: '',
        name: '',
        faculty_no: '',
        field_of_interest: '',
        phone_no: '',
        department: 3
      });
    } catch (err) {
      console.error(err);
    }
  };
  const handleChange = (e) => {
    setSupervisorData({ ...supervisorData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className='CreateProjectScreen'>

        <h2 className='CP-Title'>
          Add Supervisor
        </h2>
        <h3 className='CP-Title2'>
          Add Supervisor details
        </h3>

        <div className='FormMainContainer'>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" name="email" value={supervisorData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" name="password" value={supervisorData.password} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" name="name" value={supervisorData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="faculty_no">Faculty Number</label>
              <input type="text" className="form-control" id="faculty_no" name="faculty_no" value={supervisorData.faculty_no} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="field_of_interest">Field of Interest</label>
              <input type="text" className="form-control" id="field_of_interest" name="field_of_interest" value={supervisorData.field_of_interest} onChange={handleChange} />
            </div>
            <div className="form-group">
            <label htmlFor="department">Department</label>
              <Form.Select required id="department" name="department" value={supervisorData.department} onChange={handleChange} aria-label="Default select example">

                {
                  deptArray.map((depart) => {
                    return <option key={depart[0]} value={depart[0]}>{depart[1]}</option>
                  })

                }


              </Form.Select>
              </div>
            <div className="form-group">
              <label htmlFor="phone_no">Phone Number</label>
              <input type="text" className="form-control" id="phone_no" name="phone_no" value={supervisorData.phone_no} onChange={handleChange} />
            </div>
            <button type="submit" className=" m-2 btn btn-primary">Submit</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default AddSupervisor