import React from 'react'
import '../Project/projects.css'
import Table from 'react-bootstrap/Table';

function AllSupervisors() {
  return (
    <div>




    <div className='MainContainerFP'>
        <h2 className='Heading BlueTxt'>
            All Supervisors
        </h2>
        <div>
        <Table striped bordered  variant="light">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Faculty Id</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Sir Dr. Waseem</td>
          <td>abc123</td>
          <td>
            <button className='Icon-btn-EM'>
            <img alt='iconsimages' src={require('../../Images/pencil.png')} className="Icons-EM"/>
            </button>
            <button className='Icon-btn-EM'>
            <img alt='iconsimages' src={require('../../Images/delete.png')} className="Icons-EM"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sir Dr. Lubaid Ahmed</td>
          <td>abc123</td>
          <td>
            <button className='Icon-btn-EM'>
            <img alt='iconsimages' src={require('../../Images/pencil.png')} className="Icons-EM"/>
            </button>
            <button className='Icon-btn-EM'>
            <img alt='iconsimages' src={require('../../Images/delete.png')} className="Icons-EM"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Sir Syed Faisal Ali</td>
          <td>abc123</td>
          <td>
            <button className='Icon-btn-EM'>
            <img alt='iconsimages' src={require('../../Images/pencil.png')} className="Icons-EM"/>
            </button>
            <button className='Icon-btn-EM'>
            <img alt='iconsimages' src={require('../../Images/delete.png')} className="Icons-EM"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Sir Shahroz Shamim</td>
          <td>abc123</td>
          <td>
            <button className='Icon-btn-EM'>
            <img alt='iconsimages' src={require('../../Images/pencil.png')} className="Icons-EM"/>
            </button>
            <button className='Icon-btn-EM'>
            <img alt='iconsimages' src={require('../../Images/delete.png')} className="Icons-EM"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>Sir Usman </td>
          <td>abc123</td>
          <td>
            <button className='Icon-btn-EM'>
            <img alt='iconsimages' src={require('../../Images/pencil.png')} className="Icons-EM"/>
            </button>
            <button className='Icon-btn-EM'>
            <img alt='iconsimages' src={require('../../Images/delete.png')} className="Icons-EM"/>
            </button>
          </td>
        </tr>
        <tr>
            <td>
                6
            </td>
          <td colSpan={3}><button className='Icon-btn-EM'>
            Add new <span style={{'marginLeft':'5px'}}><img alt='iconsimages' src={require('../../Images/plus.png')} className="Icons-EM"/></span>
            
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