import React from 'react'
import Table from 'react-bootstrap/Table';
import './projects.css'
function SEditTeamMembers() {
  return (
    <div className='MainContainerFP'>
        <h2 className='Heading'>
            Edit Team Members
        </h2>
        <div>
        <Table striped bordered  variant="light">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Roll #</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Muhammad Nameer</td>
          <td>19b-071-cs</td>
          <td>
            <button className='Icon-btn-EM'>
            <img alt='iconsimages' src={require('../../../Images/pencil.png')} className="Icons-EM"/>
            </button>
            <button className='Icon-btn-EM'>
            <img alt='iconsimages' src={require('../../../Images/delete.png')} className="Icons-EM"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Ushna Karim</td>
          <td>19b-019-cs</td>
          <td>
            <button className='Icon-btn-EM'>
            <img alt='iconsimages' src={require('../../../Images/pencil.png')} className="Icons-EM"/>
            </button>
            <button className='Icon-btn-EM'>
            <img alt='iconsimages' src={require('../../../Images/delete.png')} className="Icons-EM"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Usama Ali</td>
          <td>19b-047-cs</td>
          <td>
            <button className='Icon-btn-EM'>
            <img alt='iconsimages' src={require('../../../Images/pencil.png')} className="Icons-EM"/>
            </button>
            <button className='Icon-btn-EM'>
            <img alt='iconsimages' src={require('../../../Images/delete.png')} className="Icons-EM"/>
            </button>
          </td>
        </tr>
        <tr>
            <td>
                4
            </td>
          <td colSpan={3}><button className='Icon-btn-EM'>
            Add new <span style={{'marginLeft':'5px'}}><img alt='iconsimages' src={require('../../../Images/plus.png')} className="Icons-EM"/></span>
            
            </button></td>
          
        </tr>
        
      </tbody>
    </Table>
        </div>
    </div>
  )
}

export default SEditTeamMembers