import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Project/projects.css'
import Form from 'react-bootstrap/Form';
function AddSupervisor() {

  // Getting departments (GET API)
  const [departments, setDepartments] = useState([])


  const API_URI_departments = 'https://pmbotics.herokuapp.com/departmentcrud'

  useEffect(() => {
    const getDepartments = async () => {
      try {
        const fetchData = await axios.get(API_URI_departments, {

        })
        setDepartments(fetchData.data.data)


      } catch (error) {
        console.log(error)

      }
    }
    getDepartments()
  }, [])

  // const deptList = {}
  // // eslint-disable-next-line
  // departments.map((value) => {
  //   deptList[value.id] = value.name
  // })
  // let deptArray = Object.entries(deptList)


  // creating supervisors (POST API)
  const [supervisorData, setSupervisorData] = useState({
    role: 'supervisor',
    email: '',
    password: '',
    name: '',
    faculty_no: '',
    field_of_interest: '',
    phone_no: '',
    department: '1',
  });
  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('https://pmbotics.herokuapp.com/createUser', supervisorData)
      .then(response => {
        alert(JSON.stringify(response.data.message));
        console.log(response.data.message)
        if (response.data.message === "Success") {
          setSupervisorData({
            role: 'supervisor',
            email: '',
            password: '',
            name: '',
            faculty_no: '',
            field_of_interest: '',
            phone_no: '',
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
              <input required type="email" className="form-control" id="email" name="email" value={supervisorData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input required type="password" className="form-control" id="password" name="password" value={supervisorData.password} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input required type="text" className="form-control" id="name" name="name" value={supervisorData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="faculty_no">Faculty Number</label>
              <input required type="text" className="form-control" id="faculty_no" name="faculty_no" value={supervisorData.faculty_no} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="field_of_interest">Field of Interest</label>
              <input required type="text" className="form-control" id="field_of_interest" name="field_of_interest" value={supervisorData.field_of_interest} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <Form.Select required id="department" name="department" value={supervisorData.department} onChange={handleChange} aria-label="Default select example">

                {
                  
              
                  departments.map((depart) => {
                    return <option key={depart.id} value={depart.id}>{depart.name}</option>
                  })
                  

                
                }


              </Form.Select>
            </div>
            <div className="form-group">
              <label htmlFor="phone_no">Phone Number</label>
              <input required type="text" className="form-control" id="phone_no" name="phone_no" value={supervisorData.phone_no} onChange={handleChange} />
            </div>
            <button type="submit" className=" m-2 btn btn-primary">Submit</button>

          </form>

        </div>
      </div>
    </div>
  )
}

export default AddSupervisor