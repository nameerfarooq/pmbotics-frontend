import React, { useState, useContext } from 'react';
import axios from '../../../axiosConfig';
import '../../Project/projects.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import GlobalContext from '../../../Context/GlobalContext';
import MyContext from '../../../Context/MyContext';

function AllFYP_Panel() {

  const [selectedSupervisor, setselectedSupervisor] = useState('')
  const [show, setShow] = useState(false);
  const { departments } = useContext(GlobalContext)
  const { fypPanel, refreshfypPanel } = useContext(MyContext)
  const navigate = useNavigate()
  const gotoaddsupervisor = () => {
    navigate('/fyp_panel/add-fyp-panel')
  }

  //  search filter

  const [searchQuery, setSearchQuery] = useState("");
  const filteredfypPanel = fypPanel ? fypPanel.filter((supervisor) =>
    supervisor.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
    :
    null;

  // deleting fypPanel


  const DeleteSupervisor = async (e) => {
    await axios.delete(`deletesupervisor/${e}`)
      .then(res => {
        if (res.data.message === "Successfuly deleted") {
          alert('Supervisor deleted successfully');
          refreshfypPanel()
        }
        else {
          alert(res.data.message)
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
    setselectedSupervisor(ClickedSupervisor)
    handleShow()

  }

  const UpdateSupervisor = async () => {

    //eslint-disable-next-line
    const response = await axios.patch('updatesupervisor',
      selectedSupervisor)
      .then(res => {
        if (res.data.message === "Success") {
          alert("Successfully updated")
          refreshfypPanel()
          setselectedSupervisor({
            id: '',
            email: "",
            name: "",
            phoneno: "",
            faculty_no: "",
            field_of_interest: "",
            designation: "",
            department: localStorage.getItem("departmentId")
          }
          )
          handleClose()
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

  const handleChange = (e) => {
    setselectedSupervisor({ ...selectedSupervisor, [e.target.name]: e.target.value });
  };


  return (
    <>
      {fypPanel ?

        <div>


          {/* search bar  */}
          <div className="searchbar-container">
            <input type="text" placeholder='Search fypPanel by name' className="searchbar" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

          </div>
          <div className='MainContainerFP'>
            {/* showing popup for editing a supervisor */}

            {/* model started for editing selected supervisor */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit FYP Panel Member</Modal.Title>
              </Modal.Header>



              <Modal.Body>
                <form >
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input required type="email" className="form-control" id="email" name="email" value={selectedSupervisor.email} onChange={handleChange} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input required type="text" className="form-control" id="name" name="name" value={selectedSupervisor.name} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="faculty_no">Faculty Number</label>
                    <input required type="text" className="form-control" id="faculty_no" name="faculty_no" value={selectedSupervisor.faculty_no} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="field_of_interest">Field of Interest</label>
                    <input required type="text" className="form-control" id="field_of_interest" name="field_of_interest" value={selectedSupervisor.field_of_interest} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phoneno">Phone Number</label>
                    <input required type="text" className="form-control" id="phoneno" name="phoneno" value={selectedSupervisor.phoneno} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="designation">Designation</label>
                    <input required type="text" className="form-control" id="designation" name="designation" value={selectedSupervisor.designation} onChange={handleChange} />
                  </div>
                  {/* <div className="form-group">
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
              All FYP Panel Members
            </h2>
            <div>
              <Table striped bordered variant="light">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th> Id</th>
                  </tr>
                </thead>
                <tbody>

                  {filteredfypPanel.map((supervisor, Index) => (

                    <tr key={supervisor.id}>
                      <td>{Index + 1}</td>
                      <td>{supervisor.name}</td>
                      <td>{supervisor.id}</td>

                    </tr>
                  ))}


                  <tr>
                    <td>
                      +
                    </td>
                    <td colSpan={3}>
                      <button className='Icon-btn-EM' onClick={() => { gotoaddsupervisor() }}>
                        Add new <span style={{ 'marginLeft': '5px' }}><img alt='iconsimages' src={require('../../../Images/plus.png')} className="Icons-EM" /></span>

                      </button>
                    </td>

                  </tr>

                </tbody>
              </Table>
            </div>
          </div>







        </div>
        : <p>loading</p>}
    </>
  )
}

export default AllFYP_Panel

