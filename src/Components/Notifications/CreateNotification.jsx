import React from 'react'
import './Notifications.css'
import '../../Components/MainStyling.css'
import '../Project/projects.css'
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';

function CreateNotification() {
  return (
    <div className='CreateProjectScreen'>
        <h2 className='Heading BlueTxt'>
            Create Notification
        </h2>
        <div className='FormMainContainer'>
                <Form>

                    <label >Department</label>
                    <Form.Select aria-label="Default select example">
                        <option>select</option>
                        <option value="1">Computer Science</option>
                        <option value="2">Software Engineering</option>
                        <option value="3">Electrical Engineering</option>
                        <option value="4">Power Engineering</option>
                        <option value="5">Electronics Engineering</option>
                        <option value="6">Computer Engineering</option>

                    </Form.Select>




                    <label >Notification Title</label>
                    <Form.Control type="text" />


                

                    <label >Notification Desctiption</label>
                    <Form.Control type="text" />




                    <div className='PC-btnHolder'>
                        <Button className='PC-btn1' variant="secondary" type="submit">
                            Cancel
                        </Button>
                        <Button className='PC-btn2' variant="primary" type="submit">
                            Create 
                        </Button>
                    </div>
                </Form>

            </div>

    </div>
  )
}

export default CreateNotification