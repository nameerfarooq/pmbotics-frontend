import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../Project/projects.css'
import Table from 'react-bootstrap/Table';

function AllStudents() {

  const [students, setStudents] = useState([])
  const API_URI_studentslist = 'https://pmbotics.herokuapp.com/studentlist'
  // const getStudents = async () => {
  //   try {
  //     const fetchData = await axios.get(API_URI_studentslist, {

  //     })
  //     setStudents(fetchData.data.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  useEffect(() => {
    const getStudents = async () => {
      try {
        const fetchData = await axios.get(API_URI_studentslist, {

        })
        setStudents(fetchData.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getStudents()
  }, [students])


  // deleting student

  const DeleteStudent =async (e) => {
    await axios.delete(`https://pmbotics.herokuapp.com/deletestudent/${e}`)
      .then(response => {
        alert('Student deleted successfully:', response.data);
      })
      .catch(error => {
        alert('An error occurred while deleting student:', error);
      });
   
  }

  return (
    <div>




      <div className='MainContainerFP'>
        <h2 className='Heading BlueTxt'>
          All Students
        </h2>
        <div>
          <Table striped bordered variant="light">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Roll #</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>

              {students.map((student) => (

                <tr key={student.rollno}>
                  <td>1</td>
                  <td>{student.name}</td>
                  <td>{student.rollno}</td>
                  <td>
                    <button className='Icon-btn-EM'>
                      <img alt='iconsimages' src={require('../../Images/pencil.png')} className="Icons-EM" />
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

export default AllStudents