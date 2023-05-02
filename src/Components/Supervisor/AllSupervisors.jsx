import React, { useState, useEffect, useContext } from 'react';
import axios from '../../axiosConfig';
import '../Project/projects.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import GlobalContext from '../../Context/GlobalContext';

function AllSupervisors() {
  const [selectedSupervisor, setselectedSupervisor] = useState('')
  const [show, setShow] = useState(false);
  const { departments } = useContext(GlobalContext)
  const [supervisors, setSupervisors] = useState([])
  const navigate = useNavigate()
  const gotoaddsupervisor = () => {
    navigate('/fyp_panel/add-supervisor')
  }
  useEffect(() => {

    getSupervisors()

  }, [])



  const API_URI_supervisorslist = 'alluser/?role=supervisor'

  const getSupervisors = async () => {
    try {
      const fetchData = await axios.get(API_URI_supervisorslist)
      console.log(fetchData.data.data)
      setSupervisors(fetchData.data.data)
    } catch (error) {
      console.log(error)
    }
  }










  // deleting supervisors

  // deleting student

  const DeleteSupervisor = async (e) => {
    await axios.delete(`deletesupervisor/${e}`)
      .then(response => {
        alert('Supervisor deleted successfully:', response.data);
        if (response.data.message === "Successfuly deleted") {
          setSupervisors(prevSupervisors => prevSupervisors.filter(supervisor => supervisor.id !== e))
        }
      })
      .catch(error => {
        alert('An error occurred while deleting Supervisor:', error);
      });

  }


  // Update Supervisor
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const updateClicked = (ClickedSupervisor) => {
    console.log(ClickedSupervisor)
    setselectedSupervisor(ClickedSupervisor)
    handleShow()

  }
  const tobeUpdatedSupervisor = {

    "id": selectedSupervisor.id,
    "faculty_no": selectedSupervisor.faculty_no,
    "field_of_interest": selectedSupervisor.field_of_interest,
    "designation": selectedSupervisor.designation,
    "department": selectedSupervisor.department

  }
  const UpdateSupervisor = async () => {
    // eslint-disable-next-line
    const response = await axios.patch('updatesupervisor',
      tobeUpdatedSupervisor)
      .then(res => {
        console.log(res.data);
        if (res.data.message === "Success") {
          console.log(res.data)
          getSupervisors()
          setselectedSupervisor({
            "id": '',
            "faculty_no": '',
            "field_of_interest": '',
            "designation": '',
            "department": ''
          }
          )
          handleClose()
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleChange = (e) => {
    setselectedSupervisor({ ...selectedSupervisor, [e.target.name]: e.target.value });
  };


  return (
    <div>




      <div className='MainContainerFP'>
        {/* showing popup for editing a supervisor */}

        {/* model started for editing selected supervisor */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Supervisor</Modal.Title>
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
                <label htmlFor="faculty_no">Faculty Number</label>
                <input required type="text" className="form-control" id="faculty_no" name="faculty_no" value={selectedSupervisor.faculty_no} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="field_of_interest">Field of Interest</label>
                <input required type="text" className="form-control" id="field_of_interest" name="field_of_interest" value={selectedSupervisor.field_of_interest} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="department">Department</label>
                <Form.Select required id="department" name="department" value={selectedSupervisor.department} onChange={handleChange} aria-label="Default select example">
                  {departments.length > 0 ?
                    departments.map((depart) => {
                      return <option key={depart.id} value={depart.id}>{depart.name}</option>
                    })

                    :
                    <p></p>
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
            <Button variant="primary" onClick={UpdateSupervisor}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Model ended */}

        <h2 className='Heading BlueTxt'>
          All Supervisors
        </h2>
        <div>
          <Table striped bordered variant="light">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Faculty Id</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>

              {supervisors.map((supervisor) => (

                <tr key={supervisor.id}>
                  <td>1</td>
                  <td>{supervisor.name}</td>
                  <td>{supervisor.faculty_no}</td>
                  <td>
                    <button className='Icon-btn-EM'>
                      <img alt='iconsimages' onClick={() => updateClicked(supervisor)} src={require('../../Images/pencil.png')} className="Icons-EM" />
                    </button>
                    <button className='Icon-btn-EM'>
                      <img alt='iconsimages' onClick={() => DeleteSupervisor(supervisor.id)} src={require('../../Images/delete.png')} className="Icons-EM" />
                    </button>
                  </td>
                </tr>
              ))}


              <tr>
                <td>
                  6
                </td>
                <td colSpan={3}>
                  <button className='Icon-btn-EM' onClick={() => { gotoaddsupervisor() }}>
                    Add new <span style={{ 'marginLeft': '5px' }}><img alt='iconsimages' src={require('../../Images/plus.png')} className="Icons-EM" /></span>

                  </button>
                </td>

              </tr>

            </tbody>
          </Table>
        </div>
      </div>







    </div>
  )
}

export default AllSupervisors

