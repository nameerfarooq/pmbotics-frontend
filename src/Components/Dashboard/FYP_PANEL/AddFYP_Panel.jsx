import React, { useState, useContext } from 'react';
import axios from '../../../axiosConfig';
import '../../Project/projects.css'
import Form from 'react-bootstrap/Form';
import GlobalContext from '../../../Context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../../Context/MyContext';
function AddFYP_Panel() {

  // Getting departments (GET API)
  const { refreshSupervisors } = useContext(MyContext)
  const { departments } = useContext(GlobalContext)

  const navigate = useNavigate()
  const gotoallsupervisors = () => {
    navigate('/fyp_panel/all-fyp-panel')
  }

  // creating supervisors (POST API)
  const [supervisorData, setSupervisorData] = useState(
    {
      "email": "",
      "password": "",
      "name": "",
      "facultyid": "",
      "designation": "",
      "phoneno": "",
      "department": localStorage.getItem('departmentId'),
      "uni": localStorage.getItem('univeristyId')
    }

  );
  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('registerpmo', supervisorData)
      .then(res => {

        if (res.data.message === "PMO Registration successful.") {
          alert("FYP Panel member created successfully")
          setSupervisorData({
            "email": "",
            "password": "",
            "name": "",
            "facultyid": "",
            "designation": "",
            "phoneno": "",
            "department": localStorage.getItem('departmentId'),
            "uni": localStorage.getItem('univeristyId')
          });
          refreshSupervisors()
          gotoallsupervisors()
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
        console.log(res)

      })
      .catch(error => {
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
          Add FYP Panel Member
        </h2>
        <h3 className='CP-Title2'>
          Add details
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
              <label htmlFor="facultyid">Faculty Number</label>
              <input required type="text" className="form-control" id="facultyid" name="facultyid" value={supervisorData.facultyid} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="field_of_interest">Designation</label>
              <input required type="text" className="form-control" id="designation" name="designation" value={supervisorData.designation} onChange={handleChange} />
            </div>
            {/* <div className="form-group">
              <label htmlFor="department">Department</label>
              <Form.Select required id="department" name="department" value={supervisorData.department} onChange={handleChange} aria-label="Default select example">
                {
                  departments.map((depart) => {
                    return <option key={depart.id} value={depart.id}>{depart.name}</option>
                  })
                }
              </Form.Select>
            </div> */}
            <div className="form-group">
              <label htmlFor="phoneno">Phone Number</label>
              <input required type="text" className="form-control" id="phoneno" name="phoneno" value={supervisorData.phoneno} onChange={handleChange} />
            </div>
            <button type="submit" className=" m-2 btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddFYP_Panel