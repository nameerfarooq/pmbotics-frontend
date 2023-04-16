import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Project/projects.css'
import Table from 'react-bootstrap/Table';

function AllSupervisors() {

  const [supervisors, setSupervisors] = useState([])
  const API_URI_supervisorslist = 'https://pmbotics.herokuapp.com/alluser/?role=supervisor'
  
  useEffect(() => {
    const getSupervisors = async () => {
      try {
        const fetchData = await axios.get(API_URI_supervisorslist, {
  
        })
        setSupervisors(fetchData.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getSupervisors()
  }, [supervisors])


  // deleting supervisors

  // deleting student

  const DeleteSupervisor =async (e) => {
    await axios.delete(`https://pmbotics.herokuapp.com/deletesupervisor/${e}`)
      .then(response => {
        alert('Supervisor deleted successfully:', response.data);
      })
      .catch(error => {
        alert('An error occurred while deleting Supervisor:', error);
      });
   
  }
  
  return (
    <div>




      <div className='MainContainerFP'>
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
                      <img alt='iconsimages' src={require('../../Images/pencil.png')} className="Icons-EM" />
                    </button>
                    <button className='Icon-btn-EM'>
                      <img alt='iconsimages' onClick={() => DeleteSupervisor(supervisor.id)}  src={require('../../Images/delete.png')} className="Icons-EM" />
                    </button>
                  </td>
                </tr>
              ))}


              <tr>
                <td>
                  6
                </td>
                <td colSpan={3}><button className='Icon-btn-EM'>
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

export default AllSupervisors